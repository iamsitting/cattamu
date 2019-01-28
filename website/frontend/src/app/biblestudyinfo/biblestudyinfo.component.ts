import { Component, OnInit } from '@angular/core';
import { TnmService } from '../tnm.service';

@Component({
  selector: 'app-biblestudyinfo',
  templateUrl: './biblestudyinfo.component.html',
  styleUrls: ['./biblestudyinfo.component.scss']
})
export class BiblestudyinfoComponent implements OnInit {

  tnmTable = {}

  constructor(private tnmService:TnmService) { }

  ngOnInit() {

    this.tnmService.getTnm()    
    .subscribe(res => {
      this.tnmTable = res;
    });

    const Button = document.getElementsByTagName('button')[1];
    const exbutton = document.getElementsByTagName('button')[0];
    exbutton.classList.add('hidden');
    exbutton.classList.remove('show');
    Button.classList.add('show');
    Button.classList.remove('hidden');
  }

}
