import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
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
export { DefaultImagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pbWFnZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlZmF1bHQtaW1hZ2UvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZGVmYXVsdC1pbWFnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRDtJQUFBO0lBaUJBLENBQUM7SUFmQyxvQ0FBUyxHQUFULFVBQVUsS0FBYSxFQUFFLFFBQWdCO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEIsSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUU7WUFDbkMsT0FBTywyREFBMkQsQ0FBQztTQUNwRTthQUNJLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO1lBQ3hDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO2FBQ0k7WUFDSCxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6RSxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQWhCVSxnQkFBZ0I7UUFINUIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLGNBQWM7U0FDckIsQ0FBQztPQUNXLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGVmYXVsdEltYWdlJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0SW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnNvbGUubG9nKGZhbGxiYWNrKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gJycgJiYgZmFsbGJhY2sgPT09ICcnKSB7XG4gICAgICByZXR1cm4gJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3BuZy81MTIvMTA0Mi8xMDQyMzQ5LnBuZyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlID09PSAnJyAmJiBmYWxsYmFjayAhPT0gJycpIHtcbiAgICAgIGZhbGxiYWNrID0gZmFsbGJhY2suaW5jbHVkZXMoJ2h0dHBzJykgPyBmYWxsYmFjayA6IGZhbGxiYWNrLnJlcGxhY2UoJ2h0dHAnLCAnaHR0cHMnKTtcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLmluY2x1ZGVzKCdodHRwcycpID8gdmFsdWUgOiB2YWx1ZS5yZXBsYWNlKCdodHRwJywgJ2h0dHBzJyk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=