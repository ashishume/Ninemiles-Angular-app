import { ListeningService } from './../shared/listening-shared/listening.service';
import { ApiService } from '../../shared/services/api-service/api.service';
import { Component, OnInit, ViewChild, ElementRef, HostListener, Injectable, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { Router } from '@angular/router';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.css']
})


export class ListeningComponent implements OnInit {
  // @HostListener('window:beforeunload')
  // onBeforeUnload() {
  //   return false;
  // }
  countOfTests;
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
    private listeningService: ListeningService,
    private nav: NavbarService,
    private route: Router,
    private snack: ErrorServiceService
  ) {
    this.nav.testActive()
    this.ListeningSection = this.fb.group(
      {
        mcqAnswers: new FormControl('', []),
      },
    );


    this.apiService.checkTestStatus().subscribe((data: any) => {
      if (data.listening == true) {
        this.route.navigate(['dashboard'])
        this.snack.showError("You have already given the test")
      }
    })
  }

  timeLeft: number = 3600;
  interval;
  checkTimerStatus(event) {
    if (event.left == 0) {
      this.onSubmitOfListeningSection()
    }
  }

  onSubmitOfListeningSection() {
    this.apiService.updateTestStatus("listening")
    this.listeningService.calculateSelectListeningSectionMarks()
  }

  //ON REFRESH THE TEST WILL BE SUBMITTED
  @HostListener('window:beforeunload')
  onBeforeUnload() {
    this.onSubmitOfListeningSection()
    return false;
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
  userType;
  ngOnInit() {



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

    var userType = localStorage.getItem('userType');
    this.userType = userType;
    var testNumber = localStorage.getItem('testNumber');
    const query = {
      userType: userType,
      sectionCategory: "Listening",
      testNumber: testNumber
    }

    this.apiService.getListOfQuestions(query).subscribe((response: any) => {
      if (response.status == 200) {

        response.body.forEach(function (value) {

          if (value.section == "1") {
            section1Questions.push(value);
            if (value.questionType == "Select in the blanks") {
              section1SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section1TypeQuestionsId.push(value._id)
            }

          } else if (value.section == "2") {
            if (value.questionType == "Select in the blanks") {
              section2SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section2TypeQuestionsId.push(value._id)
            }
            section2Questions.push(value);
          } else if (value.section == "3") {
            if (value.questionType == "Select in the blanks") {
              section3SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section3TypeQuestionsId.push(value._id)
            }
            section3Questions.push(value);
          } else if (value.section == "4") {
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
    const params = {
      paragraphUserType: userType,
      testNumber: testNumber,
      paragraphSectionCategory: "Listening"
    }

    this.apiService.getListOfParagraph(params).subscribe((response: any) => {
      if (response.status == 200) {

        response.body.forEach(function (value) {

          if (value.section == '1') {
            section1AudioDetails.push(value);
          }
          if (value.section == '2') {
            section2AudioDetails.push(value);
          }
          if (value.section == '3') {
            section3AudioDetails.push(value);
          }
          if (value.section == '4') {
            section4AudioDetails.push(value);
          }
        })
        this.section1AudioDetails = section1AudioDetails;
        this.section2AudioDetails = section2AudioDetails;
        this.section3AudioDetails = section3AudioDetails;
        this.section4AudioDetails = section4AudioDetails;


      }
    })







  }



  checkOptionStatus(listOption, section, $event) {
    this.listeningService.checkOptionStatus(listOption, section, $event);
  }


  //********************************************************************************************
  //SELECT QUESTIONS
  checkSelectOptionStatus1(fullOption, selectedItem, section, id, selectedIndex) {
    this.listeningService.checkSelectOptionStatus1(fullOption, selectedItem, section, id, selectedIndex, this.section1SelectQuestionsId)
  }
  checkSelectOptionStatus2(fullOption, selectedItem, section, id, selectedIndex) {
    this.listeningService.checkSelectOptionStatus2(fullOption, selectedItem, section, id, selectedIndex, this.section2SelectQuestionsId)
  }
  checkSelectOptionStatus3(fullOption, selectedItem, section, id, selectedIndex) {
    this.listeningService.checkSelectOptionStatus3(fullOption, selectedItem, section, id, selectedIndex, this.section3SelectQuestionsId)
  }
  checkSelectOptionStatus4(fullOption, selectedItem, section, id, selectedIndex) {
    this.listeningService.checkSelectOptionStatus4(fullOption, selectedItem, section, id, selectedIndex, this.section4SelectQuestionsId)
  }

  // ******************************************************************************************
  //TYPE QUESTIONS
  checkTypeOptionStatus1(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase().trim();
    this.listeningService.checkTypeOptionStatus1(fullOption, selectedOption, section, id, selectedIndex, this.section1TypeQuestionsId)
  }
  checkTypeOptionStatus2(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase().trim();
    this.listeningService.checkTypeOptionStatus2(fullOption, selectedOption, section, id, selectedIndex, this.section2TypeQuestionsId)
  }
  checkTypeOptionStatus3(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase().trim();
    this.listeningService.checkTypeOptionStatus3(fullOption, selectedOption, section, id, selectedIndex, this.section3TypeQuestionsId)
  }
  checkTypeOptionStatus4(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase().trim();
    this.listeningService.checkTypeOptionStatus4(fullOption, selectedOption, section, id, selectedIndex, this.section4TypeQuestionsId)
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
    this.isAudioPlayed1 = true;
  }

  //SECTION 2
  section2AudioPlay() {
    this.section2Element.nativeElement.play()
    this.isAudioPlayed2 = true;
  }
  section2EndAudio() {
    this.isAudioPlayed2 = true;
  }

  //SECTION 3
  section3AudioPlay() {
    this.section3Element.nativeElement.play()
    this.isAudioPlayed3 = true;
  }
  section3EndAudio() {
    this.isAudioPlayed3 = true;
  }

  //SECTION 4
  section4AudioPlay() {
    this.section4Element.nativeElement.play()
    this.isAudioPlayed4 = true;
  }
  section4EndAudio() {
    this.isAudioPlayed4 = true;
  }

}
