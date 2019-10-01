import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "SignUp",
    templateUrl: "./sign_up.component.html"
})
export class SignUpComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    navLogin() {
        this.router.navigate(["/login"]);
    }
}
