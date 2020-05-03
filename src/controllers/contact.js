import Mail from '../lib/Mail';

module.exports = {

	async create(req, res, next) {
    const { name, email, message } = req.body;
    
    Mail.sendMail({
      to: process.env.TO_MAIL,
      subject: 'Contact From - Floors Foverer',
      html: `<p><strong>Name: </strong>${name}</p>
             <p><strong>Email: </strong>${email}</p>
             <p><strong>Message: </strong>${message}</p>
            `
    })

    res.json({data: {name, email, message}, sendTo: process.env.TO_MAIL });
  }

}