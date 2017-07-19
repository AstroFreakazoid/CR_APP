import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "San Roque",
        "profilePic": "assets/img/cr/2786_1210753550.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Jaco Beach",
        "profilePic": "assets/img/cr/DIA5.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Guapiles",
        "profilePic": "assets/img/cr/Zapote-2.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Puerto Viejo de Sarapiqui",
        "profilePic": "assets/img/cr/Zapote-2.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Palmares",
        "profilePic": "assets/img/cr/10858353_917574334941297_2676914982009273176_n.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Zapote",
        "profilePic": "assets/img/cr/131227Zapote-1000x662.jpg",
        "about": "Donald is a Duck."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
