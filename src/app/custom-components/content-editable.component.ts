import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'content-editable',
  template: `<div contenteditable="true" [innerHtml]="model" (keyup)="onChange($event)">
            </div>`,
})

export class ContentEditableComponent  
{ 
    @Input() private model: any;
    @Output('onModelChange') modelChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    private onChange(event: any) : void {

        this.model = event.srcElement.innerText;
        this.modelChange.emit(this.model);

     }

}
