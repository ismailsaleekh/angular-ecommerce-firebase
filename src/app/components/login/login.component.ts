import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private modalRef: BsModalRef
  public user: any = {}
  public registringUser: any = {}
  public sent: boolean = false

  public message: string = ''

  constructor(public userService: UserService,
              private modal: BsModalService
  ) { }

  ngOnInit() {
    this.userService.loginFailed.subscribe(data => {
      this.message = data
    })
  }

  public showModal(template) {
    this.modalRef = this.modal.show(template)
  }

  public register() {
    this.userService.registerUserWithEmail(this.registringUser.email, this.registringUser.password)
    this.sent = true
  }
}
