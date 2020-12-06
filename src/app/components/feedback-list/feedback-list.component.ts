import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';
import { Feedback } from 'src/model/feedback';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbackList:Feedback[]
  entry:object = {
    name : 'Rp',
    feedback : 'This is the third one'
  }
  constructor(private service:FeedbackService) { 

  }

  ngOnInit(): void {
    this.getDataFromAPI()
  }

  addData(){
    this.service.addData(this.entry).subscribe((res)=>{
      console.log("Added Item")
    })
  }

  getDataFromAPI(){
    this.service.getData().subscribe((res)=> {
      //res.json()
      this.feedbackList = res;
      console.log("Response from server",this.feedbackList)
    },(error) => {
      console.log("error",error)
    })
  }
}
