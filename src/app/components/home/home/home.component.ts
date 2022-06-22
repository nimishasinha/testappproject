import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  myReactiveForm: FormGroup;
  constructor(private formBuilder : FormBuilder , private route : Router) { }

  ngOnInit(): void {
    this.myReactiveForm=this.formBuilder.group({
      name:['', Validators.required],
      email:['',[Validators.required,Validators.email]]
    });
  }

  onSubmit(form:FormGroup){
    console.log('valid?',form.valid);
    console.log('Name',form.value.name);
    console.log('Email',form.value.email);
    localStorage.setItem('name',form.value.name);
    this.route.navigate(['question']);

  }

}
