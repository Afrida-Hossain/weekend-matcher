import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeekendMatcherService } from '../service/weekend-matcher.service';

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

  constructor(private weekendMatcherService: WeekendMatcherService) {
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
    this.weekendMatcherService.calculate(this.formGroup);
  }
}
