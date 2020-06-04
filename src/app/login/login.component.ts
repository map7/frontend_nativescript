import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { TokenService } from "../services/token.service";

import { GlobalVariables } from "../global.variables";

@Component({
    selector: "Login",
    templateUrl: "./login.component.html",
    providers: [TokenService, GlobalVariables]
})
export class LoginComponent implements OnInit {
    public email: string;
    public password: string;
    
    constructor(private router: Router,
                private http: HttpClient,
                private _tokenService: TokenService,
                private GlobalVariables: GlobalVariables) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }

    login() {
        console.log("Login called")
        // Using the example rails app ~/code/templates/mobile_app_with_backend/backend_rails6_template
        // email     = user@example.com
        // password  = monkey67
        
        this.http.post(this.GlobalVariables.API_URL + "/auth/sign_in.json",
                       { email: this.email, 
                         password: this.password },
                       { observe: 'response' }
                      ).pipe(
                          map(data => {
                              let uid = data.headers.get('uid');
                              let client = data.headers.get('client');
                              let access = data.headers.get('access-token')

                              console.log("Logged in: " + access);
                              
                              let token = {uid: uid, client: client, access: access}
                          })
                      ).subscribe(res => {
                          this.router.navigate(["/home"]);
                      });
    }

    navSignUp() {
        this.router.navigate(["/sign_up"]);
    }
}
