import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {
  @Output() textData = new EventEmitter<{
    isValid : boolean;
    htmlText: string
  }>()

  @Input() htmlText = ''
  @Input() minLength ='100'

  reset = false;
  constructor() { }

  ngOnInit() {
  }

  onContentChanged(editorEvent: any){
    this.textData.emit({
      isValid: editorEvent.text.length > this.minLength,
      htmlText: editorEvent.html
    })
  }

  resetEditor(){
    this.reset  = true;
    setTimeout(() => {
      this.reset= false
    },0)
  }

}
