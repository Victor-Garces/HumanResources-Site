import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { CandidateService } from '../../../services/candidate.service';
import { Observable, Observer } from 'rxjs';
import { PositionService } from '../../../services/position.service';
import { Position } from '../../../models/position';
import { Candidate } from '../../../models/candidate';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  validateForm: FormGroup;
  positions: Position[] = [];
  displayPositions: string[] = [];
  currentPosition: Position;

  constructor(private fb: FormBuilder, 
    private candidateService: CandidateService,
    private positionService: PositionService
  ) {
    this.validateForm = this.fb.group({
      identification: ['', [Validators.required], [this.userNameAsyncValidator]],
      name: ['', [Validators.required], [this.userNameAsyncValidator]],
      department: ['', [Validators.required], [this.userNameAsyncValidator]],
      salary: ['', [Validators.required]],
      recommendBy: ['', [Validators.required], [this.userNameAsyncValidator]]
    });
  }

  ngOnInit() {
    this.getPositions();
  }

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    let candidate: Candidate = {
      identification: value.identification,
      name: value.name,
      department: value.department,
      aspiratedSalary: value.salary,
      positionId: this.currentPosition.id
    };

    this.candidateService.createCandidate(candidate).then((data) => console.log(data)).catch((error) => console.log(error));
    this.validateForm.reset();
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      if (control.value.length < 3) {
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

  getPositions(){
    this.positionService.getPositions().then((data: Position[]) => {
      this.positions = data;
      this.displayPositions = this.positions.map((value: Position) => value.name)
      console.log({Posiciones: this.positions});
    }).catch((error) => console.log(error));
  }

  onSelectPosition(selectedPosition: string){
    this.currentPosition = this.positions.find((value: Position) => value.name == selectedPosition);
    console.log({Posicion_actual: this.currentPosition});
  }
}
