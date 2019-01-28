import { Component, OnInit } from '@angular/core';
import { WbsService } from '../wbs.service';

@Component({
  selector: 'app-wednesday-bs',
  templateUrl: './wednesday-bs.component.html',
  styleUrls: ['./wednesday-bs.component.scss']
})
export class WednesdayBsComponent implements OnInit {

  wbstable = {}

  constructor(private wbsService:WbsService) { }

  ngOnInit() {

    this.wbsService.getWbs()    
      .subscribe(res => {
        this.wbstable = res;
    });

    const Button = document.getElementsByTagName('button')[1];
    const exbutton = document.getElementsByTagName('button')[0];
    exbutton.classList.add('hidden');
    exbutton.classList.remove('show');
    Button.classList.add('show');
    Button.classList.remove('hidden');
  }

}
