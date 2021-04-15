import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title!: string;

  myForm = new FormGroup({
    firstName: new FormControl({
      value: '',
      disabled: false,
    }),
    lastName: new FormControl({
      value: '',
      disabled: true,
    }),
  });

  mySubmissionFunction(event: any): void {
    event.preventDefault();

    // const { firstName, lastName } = this.myForm.value;
    console.log(JSON.stringify(this.myForm.value, null, 2));
  }

  ngOnInit(): void {
    // enable lastName when firstName has a value
    // why? because we're the WORST
    const firstNameControl = this.myForm.get('firstName') as FormControl;
    const lastNameControl = this.myForm.get('lastName') as FormControl;

    this.title = 'Jason is awesome'; // it's true

    firstNameControl.valueChanges.subscribe((firstNameValue) => {
      if (firstNameValue.length > 0) {
        lastNameControl.enable();
      } else {
        lastNameControl.disable();
      }
    });
  }
}
