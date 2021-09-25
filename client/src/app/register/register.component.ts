import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent: any; // @Input decorative enables to send data from parent to child. In this case, home to register component.
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      // console.log(response);
      this.cancel();
    }, error => {
       console.log(error);
       this.toastr.error(error.error);
    });
    // console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
