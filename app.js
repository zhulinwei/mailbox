const mail = require('./mail');

const body = {
  from: 'Level.Z<1171567018@qq.com>',
  to: '2545703633@qq.com',
  subject: 'Hello',
  text: 'Hello world?',
  html: '<b>Hello world!</b>',
  attachments: [{
    filename: 'text.txt',
    content: 'hello world!'
  }]
};

mail.send(body).then(data => {
  console.log(`发送邮件成功，邮件messageId为${data.messageId}`);
});
