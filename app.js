
// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

const porHacerVer2 = require('./por-hacer/por-hacer-require-copy');

let comando = argv._[0];

switch( comando ) {
  case 'crear':
    // let tarea = porHacer.crear( argv.descripcion );
    let tarea = porHacerVer2.crearVer2( argv.descripcion );
    console.log(tarea);
    break;
  case 'listar':

    let listado = porHacerVer2.getListado( argv );

    for (const tarea of listado) {
      console.log('======Por Hacer======'.green);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado);
      console.log('====================='.green);
      console.log('');
    }

    break;
  case 'actualizar':
    let actualizado = porHacerVer2.actualizar(argv.descripcion, argv.completado);
    if(actualizado === true) {
      console.log('Tarea completada');
    }else console.log('Tarea sin completar');
    break;
  
  case 'borrar':
    let borrado = porHacerVer2.borrar( argv.descripcion );
    console.log(borrado);

    break;
    
  default:
    console.log('Comando no es reconocido');

}