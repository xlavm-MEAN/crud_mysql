const Sequelize = require('sequelize')
const db = {}
const db_connexion = new Sequelize('node_mysql_crud_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  operatorsAliases: false,
  pool: {
    max: 5, //numero maximo de conexiones
    min: 0, //numero minimo de conexiones
    acquire: 30000, //tiempo de inactividad en milisegundos para ser liberada la conexion
    idle: 10000
  }
})

db.sequelize = db_connexion
db.Sequelize = Sequelize

module.exports = db