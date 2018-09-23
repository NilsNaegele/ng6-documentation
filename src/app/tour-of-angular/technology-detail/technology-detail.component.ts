import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css']
})
export class TechnologyDetailComponent implements OnInit {
  technology: Technology;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnology();
  }

  getTechnology(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.technologyService.getTechnology(id).subscribe(technology => this.technology = technology);
  }

  save() {
    this.technologyService.update(this.technology).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
