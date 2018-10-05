import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-modal',
  templateUrl: './competition-modal.component.html',
  styleUrls: ['./competition-modal.component.css']
})
export class CompetitionModalComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
