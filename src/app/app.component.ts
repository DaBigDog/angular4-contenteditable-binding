import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <br>
  <content-editable [model]="name" (onModelChange)="updateName($event)">
  </content-editable>
  `,
})
export class AppComponent  
{ 
  private name: string = 'Angular Demo'; 

  private updateName(e: any) : void {
    this.name=e;
  }

}
