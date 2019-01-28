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
  }

}

