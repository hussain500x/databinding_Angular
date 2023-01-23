import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type:'server',
    name:'Testserver',
    content:'Just test !'
  },
  {
    type:'server',
    name:'Hssain',
    content:'Just test  2 !'
  }];
  


}
