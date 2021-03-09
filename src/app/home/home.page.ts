import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataglobalService } from '../dataglobal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public globalvar: DataglobalService) {
    this.title = globalvar.getTitle();
    this.date = globalvar.getDate();
    this.note = globalvar.getNote();
  }

  title;
  date;
  note;
  save = 0;

  Input() {
    if (this.title == "" || this.date == " " || this.note == "") {
      alert("You must fill in all the blanks");
    } else {
      this.globalvar.setTitle(this.title);
      this.globalvar.setDate(this.date);
      this.globalvar.setNote(this.note);
      this.save = 1;
      alert("Your note has been saved!");
    }
  }

}
