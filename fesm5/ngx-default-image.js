import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Directive, Pipe, NgModule } from '@angular/core';

var NgxDefaultImageService = /** @class */ (function () {
    function NgxDefaultImageService() {
    }
    NgxDefaultImageService.ɵprov = ɵɵdefineInjectable({ factory: function NgxDefaultImageService_Factory() { return new NgxDefaultImageService(); }, token: NgxDefaultImageService, providedIn: "root" });
    NgxDefaultImageService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxDefaultImageService);
    return NgxDefaultImageService;
}());

var NgxDefaultImageComponent = /** @class */ (function () {
    function NgxDefaultImageComponent() {
    }
    NgxDefaultImageComponent.prototype.ngOnInit = function () {
    };
    NgxDefaultImageComponent = __decorate([
        Component({
            selector: 'lib-ngx-default-image',
            template: "\n    <p>\n      ngx-default-image works!\n    </p>\n  "
        })
    ], NgxDefaultImageComponent);
    return NgxDefaultImageComponent;
}());

var DefaultImageDirective = /** @class */ (function () {
    function DefaultImageDirective() {
    }
    DefaultImageDirective = __decorate([
        Directive({
            selector: '[defaultImage]'
        })
    ], DefaultImageDirective);
    return DefaultImageDirective;
}());

var DefaultImagePipe = /** @class */ (function () {
    function DefaultImagePipe() {
    }
    DefaultImagePipe.prototype.transform = function (value, fallback) {
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
    };
    DefaultImagePipe = __decorate([
        Pipe({
            name: 'defaultImage'
        })
    ], DefaultImagePipe);
    return DefaultImagePipe;
}());

var NgxDefaultImageModule = /** @class */ (function () {
    function NgxDefaultImageModule() {
    }
    NgxDefaultImageModule = __decorate([
        NgModule({
            declarations: [NgxDefaultImageComponent, DefaultImageDirective, DefaultImagePipe],
            imports: [],
            exports: [NgxDefaultImageComponent, DefaultImageDirective, DefaultImagePipe]
        })
    ], NgxDefaultImageModule);
    return NgxDefaultImageModule;
}());

/*
 * Public API Surface of ngx-default-image
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDefaultImageComponent, NgxDefaultImageModule, NgxDefaultImageService, DefaultImageDirective as ɵa, DefaultImagePipe as ɵb };
//# sourceMappingURL=ngx-default-image.js.map
