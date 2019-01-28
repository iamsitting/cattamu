import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howdyweekevents',
  templateUrl: './howdyweekevents.component.html',
  styleUrls: ['./howdyweekevents.component.scss']
})
export class HowdyweekeventsComponent implements OnInit {

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
