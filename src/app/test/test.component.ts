import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  imageUrl: string;
  ngOnInit() {
    this.imageUrl = localStorage.getItem('photoURL')


    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l', 'mm', 'a5'); // size page of PDF  
      var position = 10;
      pdf.addImage(contentDataURL, 'PNG', 1, position, imgWidth, imgHeight)
      var name = localStorage.getItem('name') + "_test_number_1";
      pdf.save(name); // Generated PDF   
    });
  }

}
