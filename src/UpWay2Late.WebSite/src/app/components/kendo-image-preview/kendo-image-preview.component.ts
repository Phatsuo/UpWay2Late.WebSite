import { Component, Input, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-kendo-image-preview',
  templateUrl: './kendo-image-preview.component.html',
  styleUrls: ['./kendo-image-preview.component.css']
})
export class KendoImagePreviewComponent implements OnInit {

    @Input() title;
    @Input() path;
    @Input() thumbHeight: number;
    @Input() thumbWidth: number;

    elementRef: ElementRef;
    kWindow: any;

    constructor(elementRef: ElementRef) {

        this.elementRef = elementRef;
    }

    ngOnInit() {

        var options: any = {
            title: this.title,
            visible: false,
            actions: [
                "Pin",
                "Minimize",
                "Maximize",
                "Close"
            ],
            close: this.close
        }

        var div = jQuery(this.elementRef.nativeElement).find("#k-window");
        this.kWindow = div.kendoWindow(options).data("kendoWindow");

        var img = jQuery(this.elementRef.nativeElement).find("#imagePreview");

        if (this.thumbWidth > 0) {
            if (img) {
                img.attr('width', this.thumbWidth);
            }
        }

        if (this.thumbHeight > 0) {
            if (img) {
                img.attr('height', this.thumbHeight);
            }
        }
    }

    open() {
        this.kWindow.center().open();
    }

    close() {
    }
}