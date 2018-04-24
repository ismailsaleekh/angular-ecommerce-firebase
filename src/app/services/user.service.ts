import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()

export class UserService {

  public currentUser: any = {}

  private isAuthorized = new BehaviorSubject<boolean>(false)
  public isAuth = this.isAuthorized.asObservable()

  private noUser = new BehaviorSubject<string>('')
  public loginFailed = this.noUser.asObservable()

  constructor(private auth: AngularFireAuth,
              private router: Router
  ) { 
    if (this.user.email) {
      this.isAuthorized.next(true)
    } else {
      this.isAuthorized.next(false)
    }
  }

  public signInWithGoogle() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userData: any) => {
        this.setCurrentUser(userData.user)
        this.setUserToStorage()
        this.isAuthorized.next(true)
        this.redirectToContent()
      })
  }

  public signWithFacebook() {
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((userData: any) => {
        this.setCurrentUser(userData.user)
        this.setUserToStorage()
        this.isAuthorized.next(true)
        this.redirectToContent()
      })
  }

  public signWithTwitter() {
    this.auth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((userData: any) => {
        this.setCurrentUser(userData.user)
        this.setUserToStorage()
        this.isAuthorized.next(true)
        this.redirectToContent()
      })
  }

  public signInWithEmail(email: string, password: string)  {
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then((userData: any) => {
        this.checkVerification(userData)
      }).catch(() => {
        this.noUser.next('No such user!')
      }) 
  }

  public logout() {
    this.auth.auth.signOut()
    this.removeUserFromStorage()
    this.isAuthorized.next(false)
  }
 
  get user() {
    const user = JSON.parse(localStorage.getItem('userData'))
    if (user) {
      return user
    } else {
      return {}
    }
  }

  public registerUserWithEmail(email, password) {
    this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        data.sendEmailVerification()
    })
  }

  private checkVerification(userData) {
    if (userData.emailVerified) {
      this.setCurrentUser(userData)
      this.setUserToStorage()
      this.isAuthorized.next(true)
      this.redirectToContent()
    } else {
      this.noUser.next('Please, verify your account')
    }
  }

  private setCurrentUser({displayName, email, photoURL}) {
    this.currentUser.name = displayName
    this.currentUser.email = email
    this.currentUser. photoURL = photoURL
  }

  private redirectToContent() {
    this.router.navigate(['/'])
  }

  private removeUserFromStorage() {
    localStorage.removeItem('userData')
  }

  private setUserToStorage() {
    localStorage.setItem('userData', JSON.stringify(this.currentUser))
  }
}