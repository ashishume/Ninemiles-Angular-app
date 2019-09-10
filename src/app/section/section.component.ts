import { WritingDialogComponent } from './shared/writing-shared/writing-dialog/writing-dialog.component';
import { ApiService } from '../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(public matDialog: MatDialog, private route: Router) { }
  testNumber;
  ngOnInit() {

  }

  selectWritingCategory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '350px';

    const dialogRef = this.matDialog.open(WritingDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == "upload") {
        this.route.navigate(['section/upload-writing'])
      } else {
        this.route.navigate(['section/writing'])
      }
    })
  }
}
