const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./Mensaje');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/contacto', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})

app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000')
});
