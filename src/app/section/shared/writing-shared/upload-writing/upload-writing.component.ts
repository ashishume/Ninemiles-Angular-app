import { LoaderService } from './../../../../shared/services/loader-service/loader.service';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { WritingService } from './../writing.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-writing',
  templateUrl: './upload-writing.component.html',
  styleUrls: ['./upload-writing.component.css']
})
export class UploadWritingComponent implements OnInit {
  public WritingSection: FormGroup;
  imageSource;
  actualDataSize;
  selectedImage;
  imageUrl;
  public UploadForm: FormGroup;

  constructor(
    private nav: NavbarService,
    private writingService: WritingService,
    private http: HttpClient,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private snack: MatSnackBar,
    private apiService: ApiService,
    private route: Router,
    private loader: LoaderService,
    private snackbar: ErrorServiceService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Upload Document Section')
    this.nav.testActive()
    this.UploadForm = this.fb.group(
      {
        upload: new FormControl('', [Validators.required]),
        sheetNumber: new FormControl('', [Validators.required]),
      },
    );
    this.apiService.checkTestStatus().subscribe((data: any) => {
      if (data.onlineWriting == true || data.writing == true) {
        this.route.navigate(['dashboard'])
        this.snackbar.showError("You have already given the test")
      }
    })

  }

  section1paragraphDetails = [];
  section2paragraphDetails = [];
  ngOnInit() {

    var userType = localStorage.getItem('userType');
    var testNumber = localStorage.getItem('testNumber');

    const query = {
      paragraphUserType: userType,
      testNumber: testNumber,
      paragraphSectionCategory: "Writing"
    }

    this.apiService.getListOfParagraph(query).subscribe((response: any) => {
      if (response.status == 200) {
        let section1paragraphDetails = []
        let section2paragraphDetails = []

        response.body.forEach(function (value) {
          if (value.section == '3') {
            section1paragraphDetails.push(value);
          }
          if (value.section == '4') {
            section2paragraphDetails.push(value);
          }
        })
        this.section1paragraphDetails = section1paragraphDetails;
        this.section2paragraphDetails = section2paragraphDetails;

      }
    })


  }

  onFileSelected(event) {
    this.actualDataSize = event.target.files[0].size;

    const reader = new FileReader();
    reader.onload = (e: any) => this.imageSource = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImage = event.target.files[0];
  }


  uploadImage(sheetNumber) {
    this.loader.show()
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const date = new Date().getTime()
    const filePath = email + "/" + name + "_" + date;
    const fileRef = this.storage.ref(filePath)
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          if (url) {
            this.loader.hide()
            const body = {
              onlineAnswer: url,
              studentEmail: localStorage.getItem('email'),
              studentName: localStorage.getItem('name'),
              testNumber: parseInt(localStorage.getItem('testNumber')),
              userType: localStorage.getItem('userType'),
              sheetNumber: sheetNumber
            }
            this.apiService.insertOnlineTest(body).subscribe((data: any) => {
              if (data.status == 200) {
                this.snack.openFromComponent(SnackBarComponent, {
                  duration: 3 * 1000,
                  data: "Sheet No. " + sheetNumber + " Uploaded Successfully"
                });
              }
            })

          }
        })
      })
    ).subscribe();
  }

  editParagraph(list) {
    this.apiService.passDataValues(list);
    this.route.navigate(['admin-panel/add-paragraph'])
  }

  onSubmitUploadForm(UploadFormData) {
    this.uploadImage(UploadFormData.value.sheetNumber)
  }


  testCompleted() {
    this.apiService.updateTestStatus("onlineWriting")
    this.route.navigate(['dashboard'])
  }
}
