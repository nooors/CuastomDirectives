import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styles: [
    `
      .hidden {
        display: none;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  names: string[] = ["Federico", "Pablo", "Sebastian", "Joe", "Lincoln"];
  userName: string = this.names[0];

  color: string = "blue";

  myForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  hasError(name: string): boolean {
    return this.myForm.get(name)?.invalid || false;
  }

  changeName() {
    let index = Math.floor(Math.random() * 5);
    this.userName = this.names[index];
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16),
    );
    this.color = color;
  }
}
