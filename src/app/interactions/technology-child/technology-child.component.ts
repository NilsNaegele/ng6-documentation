import { Component, Input } from '@angular/core';
import { Technology } from '../technology';

@Component({
  selector: 'app-technology-child',
  template: `
            <h3>{{ technology.name }} says:</h3>
            <p>I, {{ technology.name }} am at your service, {{ masterName }}</p>
  `,
  styles: [``]
})
export class TechnologyChildComponent {
  @Input() technology: Technology;
  @Input('master') masterName: string;

}
