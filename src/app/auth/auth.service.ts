import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from '@angular/router'
import * as firebase from 'firebase';

@Injectable()
export class AuthService{

  token: string;
  isAdmin:boolean = false;
  constructor(private router: Router){}

  signInUser(email: string, password: string){
    if(email == 'testadmin@test.com'){
      this.isAdmin = true;
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token:string) => {
                this.token = token;
                console.log(token)
                localStorage.setItem('currentUser', JSON.stringify({ token: token, uid: firebase.auth().currentUser.uid }));
              }
            )
        }
      )
      .catch(
        error =>{
          console.log(error)
        }
      )
  }

  signupUser(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  isAuthenticated(){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser != null)
      this.token = currentUser.token;
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['/']);
    localStorage.setItem('currentUser', JSON.stringify({ token: null }));
    this.token = null;
    this.isAdmin = false;
  }

  getEmail(){
    return firebase.auth().currentUser.email;
  }

  currentUser(){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.uid;
  }

}
