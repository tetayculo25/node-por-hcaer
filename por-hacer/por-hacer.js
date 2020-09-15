const fs = require('fs');

let listadoPorHacer = [];

const leerDB = () => {

  return new Promise(( resolve, reject) => {
    fs.readFile('./db/data.json', (err, data) => {
      if(err) {
        reject(console.log(err));
      }else {
          
        if(data.length == 0) {
          resolve([]);
        }else {
          const tareas = JSON.parse(data);
          resolve(tareas);
        }
        
      }
    })
  })
}

const guardarDB = (db) => {

  let data = JSON.stringify(db);

  fs.writeFile('./db/data.json', data, (e) => {
    console.log('DB guardada');
    if(e) console.log(e);
  })
}

const crear = (descripcion) => {
  
  let porHacer = {
    descripcion,
    completado: false
  };

  leerDB()
    .then(db => {
      db.push(porHacer);
      guardarDB(db);
    })
    .catch(e => {
      console.log(e);
    })

  return porHacer;
}

module.exports = {
  crear
}