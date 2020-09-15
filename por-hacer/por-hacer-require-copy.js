const fs = require('fs');

let listadoPorHacer = [];


const leerDB = () => {

  try {
    listadoPorHacer = require('../db/data.json');

  } catch (error) {
    listadoPorHacer = [];
    console.log('Listado Vacio');
  }

}

const guardarDB = (db) => {

  let data = JSON.stringify(db);

  fs.writeFile('./db/data.json', data, (e) => {
    console.log('DB guardada');
    if(e) console.log(e);
  })
}

const crearVer2 = (descripcion) => {
  
  leerDB();

  let porHacer = {
    descripcion,
    completado: false
  };


  listadoPorHacer.push(porHacer);

  guardarDB(listadoPorHacer);
  

  return porHacer;
}

let getListado = (argv) => {
 
  leerDB();

  if(argv.incompleto === true) {
    let incomplete = listadoPorHacer.filter((value, index, arr) => {
      return value.completado === false;
    })
    return incomplete;
  }else if(argv.completo === true) {
    let complete = listadoPorHacer.filter((value, index, arra)=> {
      return value.completado === true;
    })
    return complete;
  }

  return listadoPorHacer;
  
}

const actualizar = (descripcion, completado = true) => {

  leerDB();

  let index = listadoPorHacer.findIndex( tarea => {
    return tarea.descripcion === descripcion;
  });

  if( index >= 0 ) {
    listadoPorHacer[index].completado = completado;
    guardarDB(listadoPorHacer);
    return true;
  }else {
    return false;
  }
}

const borrar = (descripcion) => {

  leerDB();

 
    let nuevaLista = listadoPorHacer.filter((value, index, arr) =>  value.descripcion !== descripcion);

    
    guardarDB(nuevaLista);
  
    if(nuevaLista.length != listadoPorHacer.length){
      return `La actividad fue eliminada✌`;
    }else return `La actividad "${descripcion}" no existe en DB`
  

}

module.exports = {
  crearVer2,
  getListado,
  actualizar,
  borrar
}