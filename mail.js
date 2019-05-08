const config = require('./config');
const nodemailer = require('nodemailer');

class Mail {
  constructor () {
    this._host = config.host;
    this._port = config.port;
    this._user = config.user;
    this._pass = config.password;
    const options = {
      host: this._host,
      port: this._port,
      auth: {
        user: this._user,
        pass: this._pass
      }
    };
    this._transporter = nodemailer.createTransport(options);
  }

  send (body) {
    const { from, to, subject, text, html, attachments } = body;
    if (!from) throw new Error('发件人from参数不存在');
    if (!to) throw new Error('收件人to参数不存在');
    if (!subject) throw new Error('邮件标题不存在');
    if (!html) throw new Error('邮件主体不存在');

    let options = { from, to, subject, html };
    if (text) options.text = text;
    if (attachments) options.attachments = attachments;

    const result = this._transporter.sendMail(options).catch(error => {
      console.log('error', error);
    });
    return result;
  }
}

module.exports = new Mail();
