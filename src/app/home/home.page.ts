import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  totalQPI:number = 0;
  totalSubject = [];
  rawQPI:number = 0;
  history:String;
  // To reduce the array into a single value.
  reducer = (accumulator, currentValue) => accumulator + currentValue;

  append(val_:number) {
    // pass value to array.
    this.totalSubject.push(val_);
    // add all values inside array
    this.rawQPI = this.totalSubject.reduce(this.reducer);
    // calculate qpi
    this.totalQPI = this.rawQPI / this.totalSubject.length;

    // log
    switch(val_) {
      case 4:
        this.logLetter("A");
        break;
      case 3.5:
        this.logLetter("B+");
        break;
      case 3:
        this.logLetter("B");
        break;
      case 2.5:
        this.logLetter("C+");
        break;
      case 2:
        this.logLetter("C");
        break;
      case 1:
        this.logLetter("D");
        break;
      default:
        this.logLetter("F/FD");
        break;
    }
  }

  logLetter(letter_:String) {
    if(this.history == undefined) {
      this.history = letter_;
    } else {
      this.history = this.history + ", " + letter_;
    }
  }

  clear() {
    // re-initialize all global variables.
    this.totalQPI = 0;
    this.totalSubject = [];
    this.rawQPI = 0;
    this.history = undefined;
  }
}
