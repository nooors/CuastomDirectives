import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[error-msg]",
})
export class ErrorMsgDirective implements OnInit {
  private _userName!: string;
  private _color: string = "red";

  htmlElement: ElementRef<HTMLElement>;
  // Input color in the directive
  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  @Input() set userName(value: string) {
    this.setUserName();
  }
  @Input() set valid(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add("hidden");
    } else {
      this.htmlElement.nativeElement.classList.remove("hidden");
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setStyle();
    this.setColor();
    this.setUserName();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setUserName(): void {
    this._userName = "Federico";
  }
}
