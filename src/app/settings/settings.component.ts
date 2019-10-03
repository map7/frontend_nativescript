import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    navHome() {
        this.router.navigate(["/home"]);
    }
}
