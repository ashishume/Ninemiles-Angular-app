import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audio-test',
  templateUrl: './audio-test.component.html',
  styleUrls: ['./audio-test.component.css']
})
export class AudioTestComponent implements OnInit {
  @ViewChild("myAudio") block: ElementRef;
  constructor() { }
  audioSource;
  ngOnInit() {
    this.audioSource = "https://firebasestorage.googleapis.com/v0/b/upwork-5d46d.appspot.com/o/ashishume%40gmail.com%2FAshish%20Debnath_1568204678297?alt=media&token=97a340ff-af72-40c5-9667-39f63d431861";
  }

  endAudio() {
    console.log("ended");
    alert("Audio Ended")

  }
  audioPause() {
    this.block.nativeElement.pause()

  }
  audioPlay() {
    this.block.nativeElement.play()

  }


}
