import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { faPlus, faSortNumericDownAlt } from "@fortawesome/free-solid-svg-icons";

import { Job } from "../../../shared/models/jobs";
import * as jobsActions from "../../state/jobs.actions";
import * as fromJobs from "../../state/jobs.reducer";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobsService } from "src/app/jobs.service";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.scss"],
})
export class JobsComponent implements OnInit {
  jobs$!: Observable<Job[]>;
  formAddStatus$!: Observable<boolean>;
  confirmDeleteDialog!: Observable<boolean>;

  add = faPlus;

  form: FormGroup = new FormGroup({});

  constructor(
    private api: JobsService,
    private store: Store,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.store.dispatch(jobsActions.getJobs());

    this.jobs$ = this.store.pipe(select(fromJobs.selectJobs));

    this.form = this.formBuilder.group({
      company: ['', Validators.required],
      logo: ['', Validators.required],
      link: ['', Validators.required],
      date: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
    });


  }

  onAdd(): void {
    this.store.dispatch(jobsActions.showFormAdd());
    this.formAddStatus$ = this.store.pipe(select(fromJobs.selectFormAddStatus));
  }
  onSubmit(): void{
    let job: Job = {
      ...this.form.value,
      type: parseInt(this.form.value.type)
    }
    // console.log(job);
    
    this.api.addJob(job).subscribe((res: any)=>{
      if(res.success){
        this.store.dispatch(jobsActions.getJobs());
      }else{
        alert(res.message);
      }
    })
  }
  onRemove(jobId: string) {
    this.api.deleteJob(jobId).subscribe((res: any)=>{
      if(res.success){
        this.store.dispatch(jobsActions.getJobs());
      }else{
        alert(res.message);
      }
    })
  }
}
