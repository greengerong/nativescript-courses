import { NgModule, SkipSelf, Optional, NgModuleFactoryLoader } from '@angular/core';
import { NsModuleFactoryLoader } from './lazy-load';
import { FontIcon } from './font-icon';


@NgModule({
    imports: [],
    providers: [
        FontIcon,
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
