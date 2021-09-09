import { FormGroup } from "@angular/forms";

export class Constraint {
    weekends: string[];
    intervals: number;
    startDate: Date;
    matches: number;

    constructor(formGroup: FormGroup) {
        this.weekends = formGroup.controls['allWeekends'].value;
        this.intervals = formGroup.controls['intervals'].value;;
        this.startDate = formGroup.controls['startFrom'].value;;
        this.matches = formGroup.controls['noOfMatches'].value;;
    }
}