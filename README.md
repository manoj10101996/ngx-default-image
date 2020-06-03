<img src="https://image.flaticon.com/icons/png/512/1042/1042349.png" width="150px" title="Default RATING" alt="STAR">

# Show default image if image doesn't exists.

> Custom / Default image loader for angular 8+ projects (ng9)

> Creative Custom image loader `pipe` if no image found. 

> Will enforce the image protocal from `HTTP` to `HTTPS` automatically.

# Preview demo

This preview was generated with [Stackblitz](https://stackblitz.com/edit/ngx-default-image)

<!-- <img src="https://github.com/manoj10101996/ngx-default-image/blob/master/ss.png?raw=true" width="100%" title="Scroll page" alt="scroll"> -->

# Angular version

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Code integration

To use this package as a service `npm i ngx-default-image` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-default-image` on root folder or else it will throw error.

## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxDefaultImageModule } from "ngx-default-image";

Then import the module as follow on imports array

> NgxDefaultImageModule

## Using

After importing this library with `npm install ngx-default-image`, go to the component which is declared under `app.module.ts` and integrate as below. 

## Scoll page module

> `<img [src]=" imageurl | defaultImage : fallbackurl">`

> imageurl : (developer preference) value shoule be `url` of any image which you want to show `as a variable` or `string` ...

> fallbackurl : (developer preference) value shoule be `custom image url when the actual url gets falls or empty` value should be `as a variable` or `string` ...


## Further help

To get more help on the usage check out the [Ngx rating star README](https://github.com/manoj10101996/ngx-star-rating/blob/master/README.md).
