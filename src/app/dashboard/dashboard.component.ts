import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../technology.service';
import { Technology } from '../technology';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  technologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies() {
    this.technologyService.getTechnologies()
        .subscribe(technologies => this.technologies = technologies.slice(1, 5));
  }


}
