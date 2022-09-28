import { Component, ElementRef, ViewChild } from '@angular/core';
import * as ace from "ace-builds";
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-chrome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minimal';
  text = 'some text and some more text';

  @ViewChild('codeboxId')
  private codebox!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // initialize ace
    var langTools = ace.require("ace/ext/language_tools");

    // initialize code editor
    const codeEditor = ace.edit(this.codebox.nativeElement);
    codeEditor.session.setMode("ace/mode/python");
    codeEditor.setTheme("ace/theme/chrome");
    codeEditor.setValue(this.text);
    codeEditor.selection.clearSelection();
  }
}
