import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConstraintResult } from '../models/constraintResult';
import { WEEKDAYS } from '../models/WEEKDAYS';
import { WeekendMatcherService } from '../service/weekend-matcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allWeekends = new FormControl([], Validators.required);
  public intervals = new FormControl(5);
  public startFrom = new FormControl(Validators.required);
  public noOfMatches = new FormControl(1);

  public formGroup;

  public weekdays = WEEKDAYS;
  public results: Date[] = [];
  public isShowResult = false;

  constructor(private weekendMatcherService: WeekendMatcherService) {
    this.formGroup = new FormGroup({ 
      'intervals': this.intervals,
      'startFrom': this.startFrom,
      'noOfMatches': this.noOfMatches,
      'allWeekends': this.allWeekends
     });
  }

  ngOnInit(): void {
  }

  submitForm() {
   this.results = this.weekendMatcherService.calculate(this.formGroup);
   if (this.results.length > 0) {
     this.isShowResult = true;
   }
  }
}
