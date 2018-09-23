import { Component } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
        <h2>Mission Control</h2>
        <button (click)="announce()">Announce mission</button>
        <app-astronaut *ngFor="let astronaut of astronauts"
                        [astronaut]="astronaut">
        </app-astronaut>
        <h3>History</h3>
        <ul>
            <li *ngFor="let event of history">{{ event }}</li>
        </ul>
  `
})
export class MissionControlComponent {
  astronauts = ['Nils', 'Bob', 'Joe'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;


  constructor(private missionService: MissionService) {
    this.missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed mission`);
      }
    );
    }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
