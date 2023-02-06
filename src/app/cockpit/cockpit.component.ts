import { Component, OnInit,EventEmitter, Output, ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent:string }>();
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


  constructor() { }
  ngOnInit(): void {
  }
  
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

//   onAddBlueprint() {
//     this.bluePrintCreated.emit({
//       serverName: this.newServerName,
//       serverContent: this.newServerContent
//     });
//   }





//// Othwe Way To Print /////

  onAddServer(nameInput: HTMLInputElement) {
 

    // console.log(nameInput.value);
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }



}
