import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { ListeningService } from 'src/app/section/shared/listening-shared/listening.service';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listening-admin',
  templateUrl: './listening-admin.component.html',
  styleUrls: ['./listening-admin.component.css']
})
export class ListeningAdminComponent implements OnInit {




  type = []

  countOfTests = [];
  questions = [];
  presentTestNumber;
  section1AudioDetails = [];
  section2AudioDetails = [];
  section3AudioDetails = [];
  section4AudioDetails = [];

  section1Questions = [];
  section2Questions = [];
  section3Questions = [];
  section4Questions = [];


  public ListeningSection: FormGroup;
  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    // private listeningService: listeningService,
    private listeningService: ListeningService,
    private nav: NavbarService,
    private route: Router
  ) {
    // this.nav.testActive()
    this.ListeningSection = this.fb.group(
      {
        mcqAnswers: new FormControl('', []),
      },
    );
  }


  changeUserType(list) {
    this.userType = list;
    this.ngOnInit()
  }
  changeTestNumber(test) {
    this.testNumber = test;
    this.ngOnInit()
  }




  public hasError = (controlName: string, errorName: string) => {
    return this.ListeningSection.controls[controlName].hasError(errorName);
  }

  section1SelectQuestionsId = [];
  section2SelectQuestionsId = [];
  section3SelectQuestionsId = [];
  section4SelectQuestionsId = [];

  section1TypeQuestionsId = [];
  section2TypeQuestionsId = [];
  section3TypeQuestionsId = [];
  section4TypeQuestionsId = [];
  userType = "Academic Students";
  testNumber = 1;
  ngOnInit() {


    this.type = [
      "Academic Students",
      "General Students"
    ]
    this.countOfTests = this.apiService.numberOfTests();



    this.presentTestNumber = parseInt(localStorage.getItem('testNumber'));
    let section1SelectQuestionsId = [];
    let section2SelectQuestionsId = [];
    let section3SelectQuestionsId = [];
    let section4SelectQuestionsId = [];

    let section1TypeQuestionsId = [];
    let section2TypeQuestionsId = [];
    let section3TypeQuestionsId = [];
    let section4TypeQuestionsId = [];

    let section1Questions = [];
    let section2Questions = [];
    let section3Questions = [];
    let section4Questions = [];

    var userType = this.userType;
    var testNumber = this.testNumber;
    this.apiService.getListOfQuestions().subscribe((response: any) => {
      if (response.status == 200) {

        response.body.forEach(function (value) {

          if (value.section == "1" && userType == value.questionUserType && value.sectionCategory == "Listening" && testNumber == value.testNumber) {
            section1Questions.push(value);
            if (value.questionType == "Select in the blanks") {
              section1SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section1TypeQuestionsId.push(value._id)
            }

          } else if (value.section == "2" && userType == value.questionUserType && value.sectionCategory == "Listening" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section2SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section2TypeQuestionsId.push(value._id)
            }
            section2Questions.push(value);
          } else if (value.section == "3" && userType == value.questionUserType && value.sectionCategory == "Listening" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section3SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section3TypeQuestionsId.push(value._id)
            }
            section3Questions.push(value);
          } else if (value.section == "4" && userType == value.questionUserType && value.sectionCategory == "Listening" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section4SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section4TypeQuestionsId.push(value._id)
            }
            section4Questions.push(value);
          }

        })
        //SELECT OPTIONS
        this.section1SelectQuestionsId = section1SelectQuestionsId;
        this.section2SelectQuestionsId = section2SelectQuestionsId;
        this.section3SelectQuestionsId = section3SelectQuestionsId;
        this.section4SelectQuestionsId = section4SelectQuestionsId;


        //TYPE THE OPTIONS
        this.section1TypeQuestionsId = section1TypeQuestionsId;
        this.section2TypeQuestionsId = section2TypeQuestionsId;
        this.section3TypeQuestionsId = section3TypeQuestionsId;
        this.section4TypeQuestionsId = section4TypeQuestionsId;


        //QUESTIONS ADDED
        this.section1Questions = section1Questions;
        this.section2Questions = section2Questions;
        this.section3Questions = section3Questions;
        this.section4Questions = section4Questions;
      }
    })

    let section1AudioDetails = []
    let section2AudioDetails = []
    let section3AudioDetails = []
    let section4AudioDetails = []
    this.apiService.getListOfParagraph().subscribe((response: any) => {
      if (response.status == 200) {

        response.body.forEach(function (value) {

          if (value.section == '1' && "Listening" == value.paragraphSectionCategory && testNumber == value.testNumber && value.paragraphUserType == userType) {
            section1AudioDetails.push(value);
          }
          if (value.section == '2' && "Listening" == value.paragraphSectionCategory && testNumber == value.testNumber && value.paragraphUserType == userType) {
            section2AudioDetails.push(value);
          }
          if (value.section == '3' && "Listening" == value.paragraphSectionCategory && testNumber == value.testNumber && value.paragraphUserType == userType) {
            section3AudioDetails.push(value);
          }
          if (value.section == '4' && "Listening" == value.paragraphSectionCategory && testNumber == value.testNumber && value.paragraphUserType == userType) {
            section4AudioDetails.push(value);
          }
        })
        this.section1AudioDetails = section1AudioDetails;
        this.section2AudioDetails = section2AudioDetails;
        this.section3AudioDetails = section3AudioDetails;
        this.section4AudioDetails = section4AudioDetails;

        console.log(this.section1AudioDetails);
        console.log(this.section2AudioDetails);
        console.log(this.section3AudioDetails);
        console.log(this.section4AudioDetails);



      }
    })

  }

  editParagraph(list) {
    this.apiService.passDataValues(list);
    this.route.navigate(['admin-panel/add-paragraph'])
  }

  editQuestion(list) {
    if (list.questionType == "MCQ") {
      this.apiService.passDataValues(list);
      this.route.navigate(['admin-panel/add-questions'])
    } else {
      this.apiService.passDataValues(list);
      this.route.navigate(['admin-panel/add-fill-blank-questions'])
    }
  }


  isAudioPlayed1 = false;
  isAudioPlayed2 = false;
  isAudioPlayed3 = false;
  isAudioPlayed4 = false;
  audioSource = [];
  @ViewChild("section1Audio") section1Element: ElementRef;
  @ViewChild("section2Audio") section2Element: ElementRef;
  @ViewChild("section3Audio") section3Element: ElementRef;
  @ViewChild("section4Audio") section4Element: ElementRef;
  //AUDIO CONTROL

  //SECTION 1
  section1AudioPlay() {
    this.section1Element.nativeElement.play()
    this.isAudioPlayed1 = true;
  }
  section1EndAudio() {
    console.log("ended");
    this.isAudioPlayed1 = true;
  }

  //SECTION 2
  section2AudioPlay() {
    this.section2Element.nativeElement.play()
    this.isAudioPlayed2 = true;
  }
  section2EndAudio() {
    console.log("ended");
    this.isAudioPlayed2 = true;
  }

  //SECTION 3
  section3AudioPlay() {
    this.section3Element.nativeElement.play()
    this.isAudioPlayed3 = true;
  }
  section3EndAudio() {
    console.log("ended");
    this.isAudioPlayed3 = true;
  }

  //SECTION 4
  section4AudioPlay() {
    this.section4Element.nativeElement.play()
    this.isAudioPlayed4 = true;
  }
  section4EndAudio() {
    console.log("ended");
    this.isAudioPlayed4 = true;
  }



}
