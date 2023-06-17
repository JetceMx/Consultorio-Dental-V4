const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'blog.isc22@gmail.com', // Cambialo por tu email
            pass: 'evmovlraujvsugry' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: 'blog.isc22@gmail.com',
        to: `"${formulario.correo}"`, // Cambia esta parte por el destinatario
        subject: 'Nuevo correo del usuario',
        html: `
    <p>El usuario <strong>${formulario.nombre}</strong> ah soliciatado una consulta</p>
    <strong>Solicito una cita de tipo:</strong> ${formulario.tipo}
    <p>Día de la cita: <strong>${formulario.fecha}</strong></p>
    <p>Hora de la cita: <strong>${formulario.hora}</strong></p>
    <p>Sucursal: <strong>${formulario.sucursal}</strong></p>
    `
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}
