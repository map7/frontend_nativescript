import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import * as localStorage from "@proplugins/nativescript-localstorage";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Component({
    selector: "Login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private http: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }

    login() {
        // Login
        this.http.post("https://a61d19f0.ngrok.io/auth/sign_in",
                       { email: "user@example.com",
                         password: "monkey67" },
                       { observe: 'response' }
                      ).pipe(
                          map(data => {
                              let uid = data.headers.get('uid');
                              let client = data.headers.get('client');
                              let access = data.headers.get('access-token')

                              console.log("Logged in: " + access);
                              
                              let token = {uid: uid, client: client, access: access}
                              localStorage.setItemObject('token', token);
                          })
                      ).subscribe(res => {
                          this.router.navigate(["/home"]);
                      });
    }

    navSignUp() {
        this.router.navigate(["/sign_up"]);
    }
}
