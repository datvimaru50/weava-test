import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Job } from "./shared/models/jobs";
import jobs from "./jobs/jobs.json";
import { HttpClient } from "@angular/common/http";
import { catchError, filter, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  constructor(
    private http: HttpClient,
  ) {}

  getJobs(): Observable<Job[]> {
    let url = 'http://localhost:5000/apicenter/jobs';
    return this.http
        .get<any>(url)
        .pipe(
          retry(3)
        );
  }

  getJob(jobId: string): Observable<Job> {
    let url = 'http://localhost:5000/apicenter/jobs/detail/'+jobId;
    return this.http
        .get<any>(url)
        .pipe(
          retry(3)
        );
  }

  addJob(job: Job): Observable<any> {
    let url = 'http://localhost:5000/apicenter/jobs/add';
    return this.http
        .post<any>(url, job)
        .pipe(
          retry(3)
        );
  }

  editJob(jobId: string, info: any): Observable<any> {
    let url = 'http://localhost:5000/apicenter/jobs/edit/'+jobId;
    return this.http
        .put<any>(url, info)
        .pipe(
          retry(3)
        );
  }

  deleteJob(jobId: string): Observable<any> {
    let url = 'http://localhost:5000/apicenter/jobs/delete/'+jobId;
    return this.http
        .delete<any>(url)
        .pipe(
          retry(3)
        );
  }
}
