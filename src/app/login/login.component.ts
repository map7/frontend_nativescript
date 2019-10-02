import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import * as localStorage from "@proplugins/nativescript-localstorage";

@Component({
    selector: "Login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // test localstorage
        let me = localStorage.getItem('MeaningOfLife') || 42;
        console.log(me);
        localStorage.setItem('MeaningOfLife', 1);
    }

    navHome() {
        this.router.navigate(["/home"]);
    }

    navSignUp() {
        this.router.navigate(["/sign_up"]);
    }
}
