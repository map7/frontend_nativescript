import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { catchError, map, tap } from "rxjs/operators";

import { GlobalVariables } from "../global.variables";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public welcome: String;
    
    constructor(private router: Router,
                private http: HttpClient,
                private GlobalVariables: GlobalVariables) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        let url = this.GlobalVariables.API_URL + "/home.json";

        this.http.get(url,{observe: "response"})
            .pipe(
                map(res =>{
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
