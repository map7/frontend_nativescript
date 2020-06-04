import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { catchError, map, tap } from "rxjs/operators";

import { TokenService } from "../services/token.service";

import { GlobalVariables } from "../global.variables";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    providers: [TokenService, GlobalVariables]
})
export class HomeComponent implements OnInit {

    public welcome: String;
    
    constructor(private router: Router,
                private http: HttpClient,
                private _tokenService: TokenService,
                private GlobalVariables: GlobalVariables) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        let url = this.GlobalVariables.API_URL + "/home.json?" + this._tokenService.get_stringified_access_tokens();;

        this.http.get(url,{observe: "response"})
            .pipe(
                map(res =>{
                    this._tokenService.updateToken(res.headers);
                    console.log("Reponse: " + res.body["message"]);
                    return res.body;
                })
            ).subscribe(body => {
                this.welcome = body["message"];
            });
    }

    navLogin() {
        this.router.navigate(["/login"]);
    }

    navManual() {
        this.router.navigate(["/manual"]);
    }

    navFeedback() {
        this.router.navigate(["/feedback"]);
    }

    navSettings() {
        this.router.navigate(["/settings"]);
    }
}
