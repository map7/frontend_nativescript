import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "Manual",
    templateUrl: "./manual.component.html"
})
export class ManualComponent implements OnInit {

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
