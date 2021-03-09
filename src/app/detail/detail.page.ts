import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataglobalService } from '../dataglobal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

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
    if (this.title == "") {
      this.title = "Place for your title";
      this.date = "Place for your date";
      this.note = "Place for your note";
    }
  }

//if button like is pressed
  Favorite() {
    if (this.favo == 0) {
      this.globalvar.setFavo(1);
      alert("You like this note!");
    } else {
      this.globalvar.setFavo(0);
      alert("You unlike this note!");
    }
  }

}
