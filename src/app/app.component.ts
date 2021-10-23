import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-project';
  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      'username' : new FormControl("Nancy", Validators.minLength(5)),
      'firstname' : new FormControl(null),
    })
  }



  onSubmit(){
    console.log(this.reactiveForm)
  }

}
