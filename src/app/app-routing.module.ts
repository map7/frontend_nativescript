import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: () => import("~/app/login/login.module").then((m) => m.LoginModule) },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "manual", loadChildren: () => import("~/app/manual/manual.module").then((m) => m.ManualModule) },
    { path: "feedback", loadChildren: () => import("~/app/feedback/feedback.module").then((m) => m.FeedbackModule) },
    { path: "sign_up", loadChildren: () => import("~/app/sign_up/sign_up.module").then((m) => m.SignUpModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
