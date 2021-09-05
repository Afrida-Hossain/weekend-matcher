import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public weekends = new FormControl('');
  public intervals = new FormControl('');
  public startFrom = new FormControl('');
  public noOfMatches = new FormControl('');

  public formGroup;

  constructor() {
    this.formGroup = new FormGroup({ 
      'weekends': this.weekends,
      'intervals': this.intervals,
      'startFrom': this.startFrom,
      'noOfMatches': this.noOfMatches
     });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.formGroup.controls);
  }
}
