import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstronautComponent } from './astronaut/astronaut.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TechnologyChildComponent } from './technology-child/technology-child.component';
import { TechnologyParentComponent } from './technology-parent/technology-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { InteractionsHomeComponent } from './interactions-home.component';
import { InteractionsRoutingModule } from './interactions-routing.module';
import { CountdownParentViewchildComponent } from './countdown-parent-viewchild/countdown-parent-viewchild.component';

@NgModule({
  imports: [
    CommonModule,
    InteractionsRoutingModule
  ],
  declarations: [
                 AstronautComponent,
                 CountdownParentComponent,
                 CountdownTimerComponent,
                 TechnologyChildComponent,
                 TechnologyParentComponent,
                 NameChildComponent,
                 NameParentComponent,
                 VersionChildComponent,
                 VersionParentComponent,
                 VoterComponent,
                 VoteTakerComponent,
                 MissionControlComponent,
                 InteractionsHomeComponent,
                 CountdownParentViewchildComponent
                ]
})
export class InteractionsModule { }
