import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { Technology } from './technology';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private technologiesURL = 'api/technologies';

  private log(message: string) {
    this.messageService.add(`TechnologyService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  search(term: string): Observable<Technology[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Technology[]>(`${this.technologiesURL}/?name=${term}`).pipe(
      tap(() => this.log(`found technologies matching "${term}"`)),
      catchError(this.handleError<Technology[]>('searchTechnologies', []))
    );
  }

  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.technologiesURL)
                    .pipe(
                      tap(technologies => this.log('fetched Technologies')),
                      catchError(this.handleError('getTechnologies', []))
                    );
  }

  getTechnology(id: number): Observable<Technology> {
    const url = `${this.technologiesURL}/${id}`;
    return this.http.get<Technology>(url).pipe(
      tap(() => this.log(`fetched technology id=${id}`)),
      catchError(this.handleError<Technology>(`getTechnology id=${id}`))
    );
  }

  update(technology: Technology): Observable<any> {
    return this.http.put(this.technologiesURL, technology, httpOptions).pipe(
      tap(() => this.log(`updated technology id=${technology.id}`)),
      catchError(this.handleError<any>('updateTechnology'))
    );
  }

  add(technology: Technology): Observable<Technology> {
    return this.http.post<Technology>(this.technologiesURL, technology, httpOptions).pipe(
      tap((tech: Technology) => this.log(`added technology w/ id=${tech.id}`)),
      catchError(this.handleError<Technology>('addTechnology'))
    );
  }

  delete(technology: Technology | number): Observable<Technology> {
      const id = typeof technology === 'number' ? technology : technology.id;
      const url = `${this.technologiesURL}/${id}`;
      return this.http.delete<Technology>(url, httpOptions).pipe(
        tap(() => this.log(`deleted technology id=${id}`)),
        catchError(this.handleError<Technology>('deleteTechnology'))
      );
  }
}
