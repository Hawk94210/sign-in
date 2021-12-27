import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../account';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn : FormGroup|any;
  users : Account[] = [
    {
      email : 'nam@gmail.com',
      password: '123456'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.signIn = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required])
    });

  }

  onSubmit(){
    if (this.signIn == this.users) {
      console.log('ok');
    }
  }
  
}
