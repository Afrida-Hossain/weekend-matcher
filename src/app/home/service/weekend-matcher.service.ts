import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstraintResult } from '../../models/constraintResult';
import { Constraint } from '../../models/constraints';

@Injectable({
  providedIn: 'root'
})
export class WeekendMatcherService {

  constructor() { }

  public calculate (formGroup: FormGroup): ConstraintResult {
    const constraint = new Constraint(formGroup);
    console.log(constraint);
    return new ConstraintResult(new Array(new Date()));
  }
}
