import { Component, OnInit,EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent:string }>();
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();


  serverElements = [];
  newServerName = '';
  newServerContent = '';

  constructor() { }
  ngOnInit(): void {
  }
  
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
