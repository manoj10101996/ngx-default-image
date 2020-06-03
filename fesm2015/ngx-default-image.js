import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Directive, Pipe, NgModule } from '@angular/core';

let NgxDefaultImageService = class NgxDefaultImageService {
    constructor() { }
};
NgxDefaultImageService.ɵprov = ɵɵdefineInjectable({ factory: function NgxDefaultImageService_Factory() { return new NgxDefaultImageService(); }, token: NgxDefaultImageService, providedIn: "root" });
NgxDefaultImageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxDefaultImageService);

let NgxDefaultImageComponent = class NgxDefaultImageComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxDefaultImageComponent = __decorate([
    Component({
        selector: 'lib-ngx-default-image',
        template: `
    <p>
      ngx-default-image works!
    </p>
  `
    })
], NgxDefaultImageComponent);

let DefaultImageDirective = class DefaultImageDirective {
    constructor() { }
};
DefaultImageDirective = __decorate([
    Directive({
        selector: '[defaultImage]'
    })
], DefaultImageDirective);

let DefaultImagePipe = class DefaultImagePipe {
    transform(value, fallback) {
        console.log(fallback);
        if (value === '' && fallback === '') {
            return 'https://image.flaticon.com/icons/png/512/1042/1042349.png';
        }
        else if (value === '' && fallback !== '') {
            fallback = fallback.includes('https') ? fallback : fallback.replace('http', 'https');
            return fallback;
        }
        else {
            value = value.includes('https') ? value : value.replace('http', 'https');
            return value;
        }
    }
};
DefaultImagePipe = __decorate([
    Pipe({
        name: 'defaultImage'
    })
], DefaultImagePipe);

let NgxDefaultImageModule = class NgxDefaultImageModule {
};
NgxDefaultImageModule = __decorate([
    NgModule({
        declarations: [NgxDefaultImageComponent, DefaultImageDirective, DefaultImagePipe],
        imports: [],
        exports: [NgxDefaultImageComponent, DefaultImageDirective, DefaultImagePipe]
    })
], NgxDefaultImageModule);

/*
 * Public API Surface of ngx-default-image
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDefaultImageComponent, NgxDefaultImageModule, NgxDefaultImageService, DefaultImageDirective as ɵa, DefaultImagePipe as ɵb };
//# sourceMappingURL=ngx-default-image.js.map
