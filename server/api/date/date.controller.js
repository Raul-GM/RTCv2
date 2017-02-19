'use strict';

import Date from './date.model';
import feed from 'feed-read';
import _ from 'lodash';

let getField = (field, article) => {
  let tag = '</strong>';
  let search = field + ':';
  if(article.indexOf(search) === -1) return ''; //Si no encuentra el tag de búsqueda, devolvemos vacío
  if(field === 'Ubicación') { //Si el campo requerido es Ubicación, intentamos separar el nombre de la url
    let articleUpdated = {
      name: '',
      url: ''
    }
    let place = article.substr(article.indexOf(search) + search.length + tag.length);
    place = place.substr(0, place.indexOf('</li>')).trim().toLowerCase();
    if(place.indexOf('href=') === -1) {
      articleUpdated.name = place;
    } else {
      //articleUpdated.name = place.substr(place.indexOf('>')+1, 4);
      articleUpdated.name = place.substring(place.indexOf('>')+1, place.length-4);
      articleUpdated.url = place.substr(place.indexOf('href=')+6, (place.indexOf('" tar') - 10));
    }
    return articleUpdated;
  }
  let articleUpdated = article.substr(article.indexOf(search) + search.length + tag.length);
  return articleUpdated.substr(0, articleUpdated.indexOf('</li>')).trim().toLowerCase();
};
/*
* Leemos la web de Metal Cry
* */
let readMC = () => {
  return new Promise((resolve, reject)=> {
    const mcConcerts = 'http://www.metalcry.com/?feed=gigpress';
    let groups = [];
    let group = {};
    let name = '';
    let found = {};
    feed(mcConcerts, (err, articles) => {
      articles.forEach((article)=> {
        name = {name: getField('Grupo', article.content)};
        found =  _.find(groups, name);
        if(found !== undefined) {
          found.dates.push({
            tour: getField('Gira', article.content),
            date: getField('Fecha', article.content).replace('abril', 'april'),
            hour: getField('Hora', article.content),
            city: getField('Ciudad', article.content),
            price: getField('Precio', article.content),
            place: getField('Ubicación', article.content),
            phone: getField('Teléfono', article.content)
          });
        } else {
          group = {
            _id: getField('Grupo', article.content),
            name: getField('Grupo', article.content),
            dates: [{
              tour: getField('Gira', article.content),
              date: getField('Fecha', article.content).replace('abril', 'april'),
              hour: getField('Hora', article.content),
              city: getField('Ciudad', article.content),
              price: getField('Precio', article.content),
              place: getField('Ubicación', article.content),
              phone: getField('Teléfono', article.content)
            }]
          };
          groups.push(group);
        }
      });
      resolve(groups);
    });
  });
};

/*
* Buscamos en la base de datos un grupo
*/
let findGroup = (name) => {
  return new Promise((resolve, reject) => {
    Date.findOne({ name }).then(
      (group) => resolve(group),
      (err) => reject()
    );
  });
};

export function load(req, res) {
  console.log('==> Cargamos todas las fechas');
  return new Promise((resolve, reject) => {
    let promises = [];
    readMC().then((dates)=> {
      dates.forEach((d)=> {
        findGroup(d.name).then(
          (group) => {
            if(!group) promises.push(Date.create(d)); //Si no existe el grupo en la base de datos creamos una nueva entrada completa
            else {
              d.dates.forEach((date)=> {
                if(_.find(group.dates, { date: date.date }) === undefined) { //Buscamos si la fecha ya está creada. Si no lo está la añadimos
                  promises.push(Date.findOneAndUpdate({_id: d._id}, {$push: { dates: date }}, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec());
                }
              });
            }
          },
          (err) => {
          }
        );

      });
      Promise.all(promises).then(
        ()=> { return resolve(res.status(200).json()); },
        (err)=> { return reject(res.status(500).json(err)); }
      );
    });
  });
}

export function clean(req, res) {
  console.log('==> Limpiamos todas las fechas');
  return new Promise((resolve, reject) => {
    Date.remove({}).then(
      () => { return resolve(res.status(200).json()); },
      (err) => { return reject(res.status(500).json(err)); }
    );
  });
}

export function getAllDates(req, res) {
  console.log('==> Recuperamos todas las fechas');
  return new Promise((resolve, reject)=> {
    Date.find().then(
      (dates)=> { return resolve(res.status(200).json(dates)) },
      (err) => { return reject(res.status(500).json(err)); }
    );
  });
}
