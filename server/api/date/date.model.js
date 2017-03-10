'use strict';

import mongoose from 'mongoose';

let DateSchema = new mongoose.Schema({
  _id: String,
  name: String,
  dates: [{
    tour: String,
    date: String, //TODO pasar a tipo date
    hour: String,
    city: String,
    price: String,
    place: {
      name: String,
      url: String
    },
    phone: String
    // Podríamos poner urls a noticias relacionadas con dichos conciertos
  }]
});

export default mongoose.model('Date', DateSchema);
