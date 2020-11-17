const Sequelize = require('sequelize') //para usar el modelo del user
var db = require('./../config/db.config')

var employeeSchema = ({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    organization: {
        type: Sequelize.STRING
    },
    designation: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    is_deleted: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    }
})

module.exports = db.sequelize.define('employee', employeeSchema)
