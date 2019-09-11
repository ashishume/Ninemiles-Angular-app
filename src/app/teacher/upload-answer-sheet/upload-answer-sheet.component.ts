import { LoaderService } from './../../shared/services/loader-service/loader.service';
import { ApiService } from './../../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';

@Component({
  selector: 'app-upload-answer-sheet',
  templateUrl: './upload-answer-sheet.component.html',
  styleUrls: ['./upload-answer-sheet.component.css']
})
export class UploadAnswerSheetComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage,
    private snack: MatSnackBar,
    private fb: FormBuilder,
    private apiService: ApiService,
    private showSnack: ErrorServiceService,
    private loader: LoaderService
  ) {

    this.UploadForm = this.fb.group(
      {
        studentDetails: new FormControl('', [Validators.required]),
        testNumber: new FormControl('', [Validators.required]),
        sheetNumber: new FormControl('', [Validators.required]),
        upload: new FormControl('', [Validators.required]),
        marks: new FormControl('', []),
      },
    );
  }

  dropdownOptions = []

  config = {
    displayKey: "name",
    search: true,
    height: 'auto',
    placeholder: 'Select',
    customComparator: () => { },
    limitTo: 5,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'email'
  }
  StudentDetails = [];


  ngOnInit() {
    this.apiService.listAllUsers().subscribe((data: any) => {
      if (data.status == 200) {
        this.StudentDetails = data.body;
        this.dropdownOptions = data.body;
      }
    })
  }

  public UploadForm: FormGroup;
  selectedImage;
  imageSource;
  onFileSelected(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => this.imageSource = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImage = event.target.files[0];
  }


  uploadImage(studentData) {
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
            const body = {
              email: studentData.studentDetails.email,
              testNumber: studentData.testNumber,
              sheetNumber: studentData.sheetNumber,
              checkedAnswer: url,
              marksScored: studentData.marks,
            }
            this.loader.hide()
            this.apiService.updateOnlineTest(body).subscribe((data: any) => {
              if (data.status == 200) {
                this.showSnack.showError("Image Uploaded Successfully")
              }
            })


          }
        })
      })
    ).subscribe();
  }


  onSubmitUploadForm(UploadForm) {
    this.uploadImage(UploadForm.value)
  }

}
