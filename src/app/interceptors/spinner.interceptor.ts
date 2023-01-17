import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { delay, finalize, Observable } from "rxjs";
import { SpinnerService } from "../services/spinner.service";


export class SpinnerInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.setLoading(true, req.url);
        return next.handle(req)
            .pipe(
                delay(0),
                finalize(() => this.spinnerService.setLoading(false, req.url))
            );
    }

}