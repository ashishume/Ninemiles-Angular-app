import { ApiService } from './../../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';

@Component({
  selector: 'app-raised-issue',
  templateUrl: './raised-issue.component.html',
  styleUrls: ['./raised-issue.component.css']
})
export class RaisedIssueComponent implements OnInit {

  constructor(private apiService: ApiService, private snack: ErrorServiceService) { }
  issueDetails = [];
  ngOnInit() {
    this.apiService.displayIssue().subscribe((data: any) => {
      if (data.status == 200) {
        this.issueDetails = data.body
      }
    })
  }
  updateIssues(trueValue, id) {
    const body = {
      id: id,
      status: trueValue
    }

    this.apiService.updateIssue(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.snack.showError("Issue marked as resolved")
        this.ngOnInit();
      }
    })
  }

}
