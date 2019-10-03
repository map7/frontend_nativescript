import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "Feedback",
    templateUrl: "./feedback.component.html"
})
export class FeedbackComponent implements OnInit {

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
