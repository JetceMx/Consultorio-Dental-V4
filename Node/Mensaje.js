const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'blog.isc22@gmail.com', // Cambialo por tu email
            pass: 'ezuhggaggoutehem' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `"${formulario.email}"`,
        to: 'blog.isc22@gmail.com', // Cambia esta parte por el destinatario
        subject: 'Nuevo correo del usuario',
        html: `
    <p>El usuario <strong>${formulario.nombre}</strong> ah enviado un nuevo corre</p>
    <strong>Mensaje del usuario: </strong> ${formulario.mensaje}
    <p>Este correo fue enviado desde <strong>${formulario.email}</strong></p>
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
