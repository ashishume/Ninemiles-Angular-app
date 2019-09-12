import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  constructor() { }


  //SELECT QUESTIONS
  selectQuestionsSection1Array1 = [];
  selectQuestionsSection1Array2 = [];
  selectQuestionsSection1Array3 = [];
  checkSelectOptionStatus1(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }

    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.selectQuestionsSection1Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.selectQuestionsSection1Array2[selectedIndex] = checkOptionData;
    } else {
      this.selectQuestionsSection1Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.selectQuestionsSection1Array1.length; i++) {
      if (this.selectQuestionsSection1Array1[i] == undefined)
        this.selectQuestionsSection1Array1[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection1Array2.length; i++) {
      if (this.selectQuestionsSection1Array2[i] == undefined)
        this.selectQuestionsSection1Array2[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection1Array3.length; i++) {
      if (this.selectQuestionsSection1Array3[i] == undefined)
        this.selectQuestionsSection1Array3[i] = "Empty"
    }

  }


  selectQuestionsSection2Array1 = [];
  selectQuestionsSection2Array2 = [];
  selectQuestionsSection2Array3 = [];
  checkSelectOptionStatus2(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }
    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.selectQuestionsSection2Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.selectQuestionsSection2Array2[selectedIndex] = checkOptionData;
    } else {
      this.selectQuestionsSection2Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.selectQuestionsSection2Array1.length; i++) {
      if (this.selectQuestionsSection2Array1[i] == undefined)
        this.selectQuestionsSection2Array1[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection2Array2.length; i++) {
      if (this.selectQuestionsSection2Array2[i] == undefined)
        this.selectQuestionsSection2Array2[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection2Array3.length; i++) {
      if (this.selectQuestionsSection2Array3[i] == undefined)
        this.selectQuestionsSection2Array3[i] = "Empty"
    }
  }
  selectQuestionsSection3Array1 = [];
  selectQuestionsSection3Array2 = [];
  selectQuestionsSection3Array3 = [];
  checkSelectOptionStatus3(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }
    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.selectQuestionsSection3Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.selectQuestionsSection3Array2[selectedIndex] = checkOptionData;
    } else {
      this.selectQuestionsSection3Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.selectQuestionsSection3Array1.length; i++) {
      if (this.selectQuestionsSection3Array1[i] == undefined)
        this.selectQuestionsSection3Array1[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection3Array2.length; i++) {
      if (this.selectQuestionsSection3Array2[i] == undefined)
        this.selectQuestionsSection3Array2[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection3Array3.length; i++) {
      if (this.selectQuestionsSection3Array3[i] == undefined)
        this.selectQuestionsSection3Array3[i] = "Empty"
    }
  }
  selectQuestionsSection4Array1 = [];
  selectQuestionsSection4Array2 = [];
  selectQuestionsSection4Array3 = [];
  checkSelectOptionStatus4(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }
    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.selectQuestionsSection4Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.selectQuestionsSection4Array2[selectedIndex] = checkOptionData;
    } else {
      this.selectQuestionsSection4Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.selectQuestionsSection4Array1.length; i++) {
      if (this.selectQuestionsSection4Array1[i] == undefined)
        this.selectQuestionsSection4Array1[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection4Array2.length; i++) {
      if (this.selectQuestionsSection4Array2[i] == undefined)
        this.selectQuestionsSection4Array2[i] = "Empty"
    }
    for (let i = 0; i < this.selectQuestionsSection4Array3.length; i++) {
      if (this.selectQuestionsSection4Array3[i] == undefined)
        this.selectQuestionsSection4Array3[i] = "Empty"
    }
  }

  // ***************************************************************************************
  //TYPE QUESTIONS



  typeQuestionsSection1Array1 = [];
  typeQuestionsSection1Array2 = [];
  typeQuestionsSection1Array3 = [];
  checkTypeOptionStatus1(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }

    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.typeQuestionsSection1Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.typeQuestionsSection1Array2[selectedIndex] = checkOptionData;
    } else {
      this.typeQuestionsSection1Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.typeQuestionsSection1Array1.length; i++) {
      if (this.typeQuestionsSection1Array1[i] == undefined)
        this.typeQuestionsSection1Array1[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection1Array2.length; i++) {
      if (this.typeQuestionsSection1Array2[i] == undefined)
        this.typeQuestionsSection1Array2[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection1Array3.length; i++) {
      if (this.typeQuestionsSection1Array3[i] == undefined)
        this.typeQuestionsSection1Array3[i] = "Empty"
    }


  }



  typeQuestionsSection2Array1 = [];
  typeQuestionsSection2Array2 = [];
  typeQuestionsSection2Array3 = [];
  checkTypeOptionStatus2(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }
    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.typeQuestionsSection2Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.typeQuestionsSection2Array2[selectedIndex] = checkOptionData;
    } else {
      this.typeQuestionsSection2Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.typeQuestionsSection2Array1.length; i++) {
      if (this.typeQuestionsSection2Array1[i] == undefined)
        this.typeQuestionsSection2Array1[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection2Array2.length; i++) {
      if (this.typeQuestionsSection2Array2[i] == undefined)
        this.typeQuestionsSection2Array2[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection2Array3.length; i++) {
      if (this.typeQuestionsSection2Array3[i] == undefined)
        this.typeQuestionsSection2Array3[i] = "Empty"
    }
  }


  typeQuestionsSection3Array1 = [];
  typeQuestionsSection3Array2 = [];
  typeQuestionsSection3Array3 = [];
  checkTypeOptionStatus3(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }
    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.typeQuestionsSection3Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.typeQuestionsSection3Array2[selectedIndex] = checkOptionData;
    } else {
      this.typeQuestionsSection3Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.typeQuestionsSection3Array1.length; i++) {
      if (this.typeQuestionsSection3Array1[i] == undefined)
        this.typeQuestionsSection3Array1[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection3Array2.length; i++) {
      if (this.typeQuestionsSection3Array2[i] == undefined)
        this.typeQuestionsSection3Array2[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection3Array3.length; i++) {
      if (this.typeQuestionsSection3Array3[i] == undefined)
        this.typeQuestionsSection3Array3[i] = "Empty"
    }
  }



  typeQuestionsSection4Array1 = [];
  typeQuestionsSection4Array2 = [];
  typeQuestionsSection4Array3 = [];
  checkTypeOptionStatus4(fullOption, selectedItem, section, id, selectedIndex, UniqueIds) {
    var correctAnswerStatus;
    if (selectedItem == fullOption.optionStatus)
      correctAnswerStatus = true;
    else
      correctAnswerStatus = false;
    const checkOptionData = {
      answer: fullOption,
      selectedValue: selectedItem,
      isCorrect: Boolean(correctAnswerStatus),
      section: parseInt(section)
    }
    var uniqueId1 = UniqueIds[0];
    var uniqueId2 = UniqueIds[1];
    if (id == uniqueId1) {
      this.typeQuestionsSection4Array1[selectedIndex] = checkOptionData;
    } else if (id == uniqueId2) {
      this.typeQuestionsSection4Array2[selectedIndex] = checkOptionData;
    } else {
      this.typeQuestionsSection4Array3[selectedIndex] = checkOptionData;
    }
    for (let i = 0; i < this.typeQuestionsSection4Array1.length; i++) {
      if (this.typeQuestionsSection4Array1[i] == undefined)
        this.typeQuestionsSection4Array1[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection4Array2.length; i++) {
      if (this.typeQuestionsSection4Array2[i] == undefined)
        this.typeQuestionsSection4Array2[i] = "Empty"
    }
    for (let i = 0; i < this.typeQuestionsSection4Array3.length; i++) {
      if (this.typeQuestionsSection4Array3[i] == undefined)
        this.typeQuestionsSection4Array3[i] = "Empty"
    }
  }


  // MCQ
  arrayOfSelectOptionQuestions = [];
  arrayOfMCQQuestions = [];
  checkOptionStatus(optionValue, listSection, event) {
    if (event.checked == true) {
      this.arrayOfMCQQuestions.push(
        {
          answer: optionValue,
          selectedValue: optionValue.option,
          isCorrect: optionValue.optionStatus,
          section: parseInt(listSection)
        })
    } else {

      for (var i = 0; i < this.arrayOfMCQQuestions.length; i++) {
        if (this.arrayOfMCQQuestions[i].answer === optionValue) {
          this.arrayOfMCQQuestions.splice(i, 1);
        }
      }
    }
    console.log(this.arrayOfMCQQuestions);

  }


}
