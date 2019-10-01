import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ManualRoutingModule } from "./manual-routing.module";
import { ManualComponent } from "./manual.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ManualRoutingModule
    ],
    declarations: [
        ManualComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ManualModule { }
