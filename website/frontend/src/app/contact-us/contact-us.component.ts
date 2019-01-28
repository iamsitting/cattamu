import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  data : Date = new Date();

  constructor() { }

  ngOnInit() {
    const Button = document.getElementsByTagName('button')[1];
    const exbutton = document.getElementsByTagName('button')[0];
    exbutton.classList.add('hidden');
    exbutton.classList.remove('show');
    Button.classList.add('show');
    Button.classList.remove('hidden');

    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    //const sgMail = require('@sendgrid/mail');
    //const SENDGRID_API_KEY="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";
    //sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //const msg = {
    //to: 'christiansattamu@gmail.com',
    //from: 'christiansattamu@gmail.com',
    //subject: 'Sending with SendGrid is Fun',
    //text: 'and easy to do anywhere, even with Node.js',
    //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    //};
    //sgMail.send(msg);
  }

}

