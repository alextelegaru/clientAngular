import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService]
    //styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
    public title: string;
    public user: User;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Registrate';
        this.user = new User("",
            "",
            "",
            "",
            "",
            "",
            "ROLE_USER",
            "");
    }



    ngOnInit() {
        console.log("Componente de registro cargado");
    }



    onSubmit() {

        this._userService.register(this.user).subscribe(
            response => {
                if (response.user && response.user.id) {
                   
                    console.log(response.user);
                 this.status = 'success';
                }

            },
            error => {
                console.log(<any>error);
            }


        );
    }

}