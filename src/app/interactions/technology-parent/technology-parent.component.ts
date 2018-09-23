import { Component } from '@angular/core';
import { TECHNOLOGIES } from '../technology';

@Component({
  selector: 'app-technology-parent',
  template: `
          <h2>{{ master }} controls {{ technologies.length }} technologies</h2>
          <app-technology-child
          *ngFor="let technology of technologies"
          [technology]="technology"
          [master]="master">
          </app-technology-child>
  `,
  styles: [``]
})
export class TechnologyParentComponent {
      technologies = TECHNOLOGIES;
      master = 'Master Nils-Holger';

}
