import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { WritingService } from './../writing.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material';

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
  constructor(
    private nav: NavbarService,
    private writingService: WritingService,
    private http: HttpClient,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private snack: MatSnackBar,
    private apiService: ApiService
  ) {
    this.nav.hide()
  }

  section1paragraphDetails = [];
  section2paragraphDetails = [];
  ngOnInit() {

    var userType = localStorage.getItem('userType');
    var testNumber = localStorage.getItem('testNumber');


    this.apiService.getListOfParagraph().subscribe((response: any) => {
      if (response.status == 200) {
        let section1paragraphDetails = []
        let section2paragraphDetails = []

        response.body.forEach(function (value) {
          if (value.section == '1' && userType == value.paragraphUserType && testNumber == value.testNumber && value.paragraphSectionCategory == "Writing") {
            section1paragraphDetails.push(value);
          }
          if (value.section == '2' && userType == value.paragraphUserType && testNumber == value.testNumber && value.paragraphSectionCategory == "Writing") {
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


  uploadImage() {
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const date = new Date().getTime()
    const filePath = email + "/" + name + "_" + date;
    const fileRef = this.storage.ref(filePath)
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          if (url) {
            this.writingService.insertImageData(url);
            this.snack.openFromComponent(SnackBarComponent, {
              duration: 3 * 1000,
              data: "Image Uploaded Successfully"
            });
          }
        })
      })
    ).subscribe();
  }




}
