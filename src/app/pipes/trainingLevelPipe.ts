import { Pipe, PipeTransform } from '@angular/core';
import { TrainingLevel } from '../../enums/trainingLevel';
@Pipe({
    name: 'trainingLevel'
})
export class TrainingLevelPipe implements PipeTransform {
    transform(val: TrainingLevel): string {

        if (val === TrainingLevel.Grade) {
            return 'Grade';
        } else if (val === TrainingLevel.PostGrade) {
            return 'PostGrade';
        } else if (val === TrainingLevel.Masters) {
            return 'Masters';
        } else if (val === TrainingLevel.Doctorate) {
            return 'Doctorate';
        } else if (val === TrainingLevel.Technical) {
            return 'Technical';
        } else if (val === TrainingLevel.Management) {
            return 'Management';
        }
    }
}