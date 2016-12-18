import { NgModule } from "@angular/core";
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule } from 'nativescript-angular';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
    ],
    declarations: [],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
    ]
})
export class SharedModule {

}

