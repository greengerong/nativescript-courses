import { NgModule, SkipSelf, Optional, NgModuleFactoryLoader } from '@angular/core';
import { NsModuleFactoryLoader } from './lazy-load';


@NgModule({
    imports: [],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NsModuleFactoryLoader }
    ],
    exports: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
