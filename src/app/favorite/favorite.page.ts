import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataglobalService } from '../dataglobal.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor(private router: Router, public globalvar: DataglobalService) {
    this.title = globalvar.getTitle();
    this.date = globalvar.getDate();
    this.note = globalvar.getNote();
    this.favo = globalvar.getFavo();
  }

  title;
  date;
  note;
  favo;

  ngOnInit() {
  }

}
