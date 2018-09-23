import { Component, OnInit } from '@angular/core';

import { TechnologyService } from '../technology.service';
import { Technology } from '../technology';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-technology-search',
  templateUrl: './technology-search.component.html',
  styleUrls: ['./technology-search.component.css']
})
export class TechnologySearchComponent implements OnInit {
  technologies$: Observable<Technology[]>;
  private searchTerms = new Subject<string>();

  constructor(private technologyService: TechnologyService) { }

  // push search term in observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.technologies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.technologyService.search(term))
    );
  }

}
