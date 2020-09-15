const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
}

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
              .command('crear', 'Crear un elemento por hacer', {
                descripcion
              })
              .command('actualizar', 'Actualiza el estado completado de una tarea', {
                descripcion,
                completado
              })      
              .command('borrar', 'Elimina una actividad existente', {
                descripcion                
              })
              .command('listar', 'Muestra las actividades', {
                
                completo: {
                  alias: 'c'
                },
                incompleto: {
                  alias: 'i'
                }

              })
              .help()
              .argv;


module.exports = {
  argv
}