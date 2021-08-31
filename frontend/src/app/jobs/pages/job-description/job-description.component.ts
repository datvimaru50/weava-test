import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { JobsService } from "src/app/jobs.service";
import { Job } from "src/app/shared/models/jobs";

@Component({
  selector: "app-job-description",
  templateUrl: "./job-description.component.html",
  styleUrls: ["./job-description.component.scss"],
})
export class JobDescriptionComponent implements OnInit {
  detail!: Job;
  jobId: string | null = '';
  subscription = new Subscription();
  editMode: boolean = false;
  form: FormGroup = new FormGroup({});

  handleClickEdit(){

    this.form = this.formBuilder.group({
      company: [this.detail.company, Validators.required],
      logo: [this.detail.logo, Validators.required],
      link: [this.detail.link, Validators.required],
      date: [this.detail.date, Validators.required],
      title: [this.detail.title, Validators.required],
      type: [this.detail.type, Validators.required],
    });

    this.editMode = true;
  }

  onUpdate(){
    if(this.jobId){
      this.subscription.add(
        this.api.editJob(this.jobId, this.form.value).subscribe((res:any)=>{
          if(res.success){
            this.detail = {
              ...this.detail,
              ...this.form.value
            };
            this.editMode = false;
          }else{
            alert(res.message);
          }
        })
      );
    }
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private api: JobsService,
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.jobId = this.activatedRoute.snapshot.paramMap.get("id");

    if(this.jobId){
      this.subscription.add(
        this.api.getJob(this.jobId).subscribe((res:any)=>{
          if(res.success){
            this.detail = res.data;
          }else{
            alert(res.message);
          }
        })
      );
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
