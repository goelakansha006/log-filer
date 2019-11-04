import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cookie = this.getCookies();
    if (cookie) {
      request = request.clone({
        setHeaders: {
          'x-access-token': cookie['x-access-token']
        }
      });
    }

    return next.handle(request);
  }

  getCookies() {
    if (document && document.cookie) {
      const pairs = document.cookie.split(';');
      const cookies = {};
      console.log('LENGTH: ', pairs);
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        cookies[pair[0].trim()] = unescape(pair.slice(1).join('='));
      }
      return cookies;
    }
  }
}
