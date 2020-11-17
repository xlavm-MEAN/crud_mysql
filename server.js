const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //crear app de express
const port = process.env.PORT || 5000; //puerto del servidor
// analizar solicitudes del tipo: application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// analizar solicitudes del tipo: application/json
app.use(bodyParser.json())

// definir una ruta principal
app.get('/', (req, res) => {
  res.send([//respuesta en JSON para ver al abrir localhost:5000/
    {
      1: "Bienvenido a la API, las siguientes son las direcciones de las rutas:",
      2: "Creador Luis Angel Vanegas (xlavm)",
      "find_all": "/api/employees/findall/",
      "add": "/api/employees/add/",
      "find": "/api/employees/find/:id",
      "edit": "/api/employees/edit/:id",
      "delete": "/api/employees/delete/:id"
    }
  ]);
});

// Importar las rutas de los empleados
const employeeRoutes = require('./routes/employee.routes')
// Usando como middleware
app.use('/api/employees', employeeRoutes)

// Escuchar las solicitudes
app.listen(port, () => {
  console.log(`Servidor Escuchando en el Puerto: ${port}`);
});