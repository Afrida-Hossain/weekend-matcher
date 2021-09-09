import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstraintResult } from 'src/app/models/constraintResult';
import { Constraint } from 'src/app/models/constraints';

@Injectable({
  providedIn: 'root'
})
export class WeekendMatcherService {

  constructor() { }

  public calculate (formGroup: FormGroup): Date[] {
    const constraint = new Constraint(formGroup);

    let result = [];
    let matches = 0;
    let currentDay = new Date(constraint.startDate);

    while(matches < constraint.matches) {
      currentDay = new Date(currentDay.setDate(currentDay.getDate() + constraint.intervals));
      console.log(currentDay);
      if (constraint.weekends.indexOf(currentDay.getDay().toString()) != -1) {
        result.push(new Date(currentDay));
        matches++;
      }
    }

    return result;
  }
}
