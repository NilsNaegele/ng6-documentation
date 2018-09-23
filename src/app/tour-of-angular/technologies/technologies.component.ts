import { Component, OnInit } from '@angular/core';

import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  selectedTechnology: Technology;

  technologies: Technology[] = [];

  onSelect(technology: Technology) {
    this.selectedTechnology = technology;
  }

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies(): void {
      this.technologyService.getTechnologies().subscribe(technologies => this.technologies = technologies);
  }

  addTechnology(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.technologyService.add({ name } as Technology)
                            .subscribe(technology => {
                              this.technologies.push(technology);
                            });
  }

  deleteTechnology(technology: Technology): void {
    this.technologies = this.technologies.filter(t => t !== technology);
    this.technologyService.delete(technology).subscribe();
  }

}
