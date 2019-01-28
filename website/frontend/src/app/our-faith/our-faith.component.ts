import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-faith',
  templateUrl: './our-faith.component.html',
  styleUrls: ['./our-faith.component.scss']
})
export class OurFaithComponent implements OnInit {

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
