import { FormGroup } from "@angular/forms";

export class Constraint {
    weekends: string[];
    intervals: number;
    startDate: string;
    matches: number;

    constructor(formGroup: FormGroup) {
        this.weekends = formGroup.controls['weekends'].value;
        this.intervals = formGroup.controls['intervals'].value;;
        this.startDate = formGroup.controls['startFrom'].value;;
        this.matches = formGroup.controls['noOfMatches'].value;;
    }
}