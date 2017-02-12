var feed = require('feed-read');
var mcConcerts = 'http://www.metalcry.com/?feed=gigpress';
//http://www.todoheavymetal.com/index.php/agenda-de-conciertos-2
//http://metaltrip.com/agenda/
//http://www.metaltotal.com/agenda/

/*
 * Nombre del grupo
 * Gira ???????????????????????????????
 * Fecha concierto
 * Hora
 * Ciudad
 * Ubicación
 * Teléfono ?????????????????????????
 * */
var concerts = [

];
var show = {
  name: '',
  tour: '',
  date: '',
  hour: '',
  city: '',
  place: '',
  phone: ''
};

var test = '<ul>'+
  '<li><strong>Grupo:</strong> ORPHANED LAND</li>'+
  '<li><strong>Gira:</strong> ALL IS ONE IBERIAN TOUR</li>'+
  '<li><strong>Fecha:</strong>'+
  'Viernes, 9 junio 2017                                                           </li>'+
  '<li><strong>Hora:</strong>'+
  '20:00</li>'+
  '<li><strong>Ciudad:</strong>'+
  'Málaga</li>'+
  '<li><strong>Ubicación:</strong>'+
  '<a href="http://www.eventualmusic.com/" target="_blank">Sala Eventual</a></li>'+
  '<li><strong>Dirección:</strong>'+
  '<a href="http://maps.google.com/maps?&amp;q=Pol%C3%ADgono+San+Luis+C%2F+Cuernavaca+21+y+23+29006,M%C3%A1laga,ES" class="gigpress-address" target="_blank">Polígono San Luis C/ Cuernavaca 21 y 23 29006</a></li>'+
  '<li><strong>Teléfono:</strong>'+
  '951 11 49 92</li>'+
  '<li><strong>País:</strong>'+
  'Spain</li>'+
  '<li><a href="http://www.metalcry.com/orphaned-land-fechas-para-2017/">Noticia relacionada</a></li>'+
  '<li>'+
  '<a href="http://www.google.com/calendar/event?action=TEMPLATE&amp;text=ORPHANED+LAND+-+Sala+Eventual&amp;dates=20170609T190000Z/20170609T190000Z&amp;sprop=website:http%3A%2F%2Fwww.metalcry.com%2Fconciertos%2F&amp;sprop=name:ORPHANED+LAND&amp;location=Sala+Eventual%2C+Pol%C3%ADgono+San+Luis+C%2F+Cuernavaca+21+y+23+29006%2C+M%C3%A1laga%2C+ES&amp;details=Gira%3A+ALL+IS+ONE+IBERIAN+TOUR.+&amp;trp=true;" target="_blank">Añadir a Google Calendar</a> | <a href="http://www.metalcry.com/?feed=gigpress-ical&amp;show_id=4489">Descargar iCal</a>'+
  '</li>'+
  '</ul>';
feed(mcConcerts, function (err, articles) {
  articles.forEach(function (article) {
    // console.log('--> ', article);
    // console.log('-------------> ', article.content.substr(article.content.indexOf('<li><strong>Grupo:</strong>')))
    //  console.log(document.createElement(test));
    getField('Grupo', article.content);
    getField('Fecha', article.content);
  });
});

var getField = function(field, article) {
  var value = '';
  var tag = '</strong>';
  var search = field + ':';
  var articleUpdated = article.substr(article.indexOf(search) + search.length + tag.length);
  value = capitalize(articleUpdated.substr(0, articleUpdated.indexOf('</li>')).trim().toLowerCase());
  // console.log('===========> ', articleUpdated);
  console.log('=-----------------=)>', value);
};

var capitalize = function(str) {
  return str.replace(/\b\w/g, function(l){ return l.toUpperCase() });
};
