import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ace } from 'ace-builds/ace.d';
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

  private editor : Ace.Editor | null = null

  @ViewChild('codeboxId')
  private codebox!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // initialize ace
    var langTools = ace.require("ace/ext/language_tools");

    // initialize code editor
    this.editor = ace.edit(this.codebox.nativeElement);
    this.editor.session.setMode("ace/mode/python");
    this.editor.setTheme("ace/theme/chrome");
    this.editor.setValue(this.text);
    this.editor.selection.clearSelection();
  }
}
