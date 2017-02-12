'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor(Admin) {
    this.Admin = Admin;
    this.options = [
      {
        text: 'Cargar la base de datos',
        label: 'Cargar',
        action: 'load'
      },
      {
        text: 'Deja la base de datos limpia',
        label: 'Borrar',
        action: 'clean'
      }
    ];
  }

  action(op) {
    switch(op) {
      case 'load':
        console.log('->>>> cargamos la base de datos');
        this.Admin.loadDates().then(() => {
          console.log('-----))> OK')
        }).catch(err => {
          console.log('-----))> ERROR')
        });
        break;
      case 'clean':
        console.log('->>>> Vaciamos la base de datos');
        this.Admin.cleanAllDates().then(() => {
          console.log('-----))> OK')
        }).catch(err => {
          console.log('-----))> ERROR')
        });
        break;
    }
  }
}
