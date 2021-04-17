import {
  Directive,
  HostBinding,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File;
  url: SafeUrl;
}

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding('style.background') private background = 'rgba(0,107,255,0.1)';

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'rgba(0,107,255,0.4)';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'rgba(0,107,255,0.1)';
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'rgba(0,107,255,0.1)';

    const files: FileHandle[] = [];
    if (evt.dataTransfer) {
      for (const file of evt.dataTransfer.files as any) {
        // const file = evt.dataTransfer.files[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        files.push({ file, url });
      }
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
}
