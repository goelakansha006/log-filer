import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillEditorComponent } from './quill-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {QuillModule } from 'ngx-quill';

const SUPPORTED_FORMATS = [
  'background',
  'bold',
  'color',
  'font',
  'code',
  'italic',
  'link',
  'size',
  'strike',
  'script',
  'underline',
  'blockquote',
  'header',
  'indent',
  'list',
  'align',
  'direction',
];

@NgModule({
  declarations: [QuillEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      formats: SUPPORTED_FORMATS,
      modules :{
        toolbar : [['blockquote','code-block'],['bold','underline','italic','link']],
        history:{
          delay : 1500,
          userOnly: true,
        },
        syntax: false
      },
      placeholder :'Compose your text',
      theme: 'bubble'
    })
  ],
  exports: [QuillEditorComponent]
})
export class QuillEditorModule { }
