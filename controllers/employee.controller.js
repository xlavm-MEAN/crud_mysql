const Employee = require('../models/employee.model');

exports.findAll = function (req, res) {
    Employee.findAll().then(employee => {
        if (employee) {
            res.json(employee)
        } else {
            res.send('No Existen Empleados')
        }
    })
};

exports.create = function (req, res) {
    const new_employee = new Employee(req.body);
    Employee.create({
        first_name: new_employee.first_name,
        last_name: new_employee.last_name,
        email: new_employee.email,
        phone: new_employee.phone,
        organization: new_employee.organization,
        designation: new_employee.designation,
        salary: new_employee.salary,
        status: new_employee.status,
        is_deleted: new_employee.is_deleted,
        created_at: new_employee.created_at,
        updated_at: new_employee.updated_at,
    }).then(result => {
        if (result) {
            res.send('Empleado Creado Correctamente!')
        } else {
            res.send('Hubo un Error al Crear el Empleado')
        }
    })
};


exports.findOne = function (req, res) {
    Employee.findOne({
        where: {
            id: req.params.id
        }
    }).then(employee => {
        if (employee) {
            res.json(employee)
        } else {
            res.send('Empleado No Existe en la BD')
        }
    })
};


exports.update = function (req, res) {
    const new_employee = new Employee(req.body);
    Employee.findOne({
        where: {
            id: new_employee.id,
        }
    }).then(employee => {
        if (employee) {
            Employee.update({
                first_name: new_employee.first_name,
                last_name: new_employee.last_name,
                email: new_employee.email,
                phone: new_employee.phone,
                organization: new_employee.organization,
                designation: new_employee.designation,
                salary: new_employee.salary,
                status: new_employee.status,
                is_deleted: new_employee.is_deleted,
                created_at: new_employee.created_at,
                updated_at: new_employee.updated_at,
            }, {
                where: {
                    id: new_employee.id,
                }
            }).then(result => {
                if (result) {
                    res.send('Empleado Actualizado Correctamente!')
                } else {
                    res.send('Hubo un Error al Actualizar el Empleado')
                }
            })
        } else {
            res.send('Empleado No Existe en la BD')
        }
    })
};


exports.delete = function (req, res) {
    Employee.findOne({
        where: {
            id: req.params.id
        }
    }).then(employee => {
        if (employee) {
            Employee.destroy({
                where: {
                    id: req.params.id
                }
            }).then(result => {
                if (result) {
                    res.send('Empleado Eliminado Correctamente!')
                } else {
                    res.send('Hubo un Error al Eliminar el Empleado')
                }
            })
        } else {
            res.send('Empleado No Existe en la BD')
        }
    })

};