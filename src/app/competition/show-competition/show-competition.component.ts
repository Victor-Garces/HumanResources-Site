import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../../services/competition.service';

@Component({
  selector: 'app-show-competition',
  templateUrl: './show-competition.component.html',
  styleUrls: ['./show-competition.component.css']
})
export class ShowCompetitionComponent implements OnInit {

  competitions: any = [];
  visible = false;

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() { 
    this.showData();
  } 

  showData(){
    this.competitionService.getCompetitions().then((data) => this.competitions = data).catch((error) => console.log(error));
  }

  onDelete(id: string){
    this.competitionService.removeCompetition(id).then((data) => {
      console.log(data);
    }).catch((error) => console.log(error));
    
  }
}
