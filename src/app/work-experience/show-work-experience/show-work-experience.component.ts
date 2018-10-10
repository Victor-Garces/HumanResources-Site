import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../../../models/work-experience';
import { WorkExperienceService } from '../../../services/work-experience.service';

@Component({
  selector: 'app-show-work-experience',
  templateUrl: './show-work-experience.component.html',
  styleUrls: ['./show-work-experience.component.css']
})
export class ShowWorkExperienceComponent implements OnInit {

  workExperiences: WorkExperience[] = [];
  visible = false;
  displayData = [ ...this.workExperiences ];
  searchValue = '';

  constructor(private workExperienceService: WorkExperienceService) { }

  ngOnInit() { 
    this.showData();
  } 

  showData(){
    this.workExperienceService.getWorkExperiences().then((data: WorkExperience[]) => {
      this.workExperiences = data;
      this.displayData = [...this.workExperiences];
    }).catch((error) => console.log(error));
  }

  onDelete(id: string){
    this.workExperienceService.removeWorkExperiences(id).then((data) => {
      console.log(data);
    }).catch((error) => console.log(error));
    
    this.displayData = this.displayData.filter(value => value.id !== id)
  }

  search() {
    this.displayData = this.workExperiences.filter(workExperience => {
      return Object.keys(workExperience).some(keys => workExperience[keys] != null &&
        workExperience[keys].toString().toLowerCase()
          .includes(this.searchValue.toLowerCase()));
    });
  }
}
