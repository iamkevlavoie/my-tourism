import { AbstractControl, ValidatorFn} from "@angular/forms";
export function avoidWord(regexp: RegExp): ValidatorFn {
    return (fc: AbstractControl): { [errorName: string]: any } | null => {
    const notAllowed = regexp.test(fc.value);
    if (notAllowed == true) {
    return {
    prohibited: {
    value: fc.value
    }};
    } else return null;
    };}