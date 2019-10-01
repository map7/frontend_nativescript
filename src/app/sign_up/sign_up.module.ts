import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SignUpRoutingModule } from "./sign_up-routing.module";
import { SignUpComponent } from "./sign_up.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SignUpRoutingModule
    ],
    declarations: [
        SignUpComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignUpModule { }
