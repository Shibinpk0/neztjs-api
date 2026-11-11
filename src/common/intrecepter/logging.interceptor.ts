// import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
// import { ExecutionContextHost } from "@nestjs/core/internal";

// @Injectable()
// export class LoggingInterceptor implements NestInterceptor{
//     intercept(
//         context:ExecutionContext,
//         next:CallHandler
//     ):Observable(any){
//         const request=Context.switchToHttp().getRequest();
//         const method=request.method;
//         const url=request.url;
//         const startTime=Date.now();

//         console.log(`incoming Req: ${method} ${url}`);
//         return next.handle().pipe(
//             tap(()=>{
//                 const duration=Date.now()-startTime;
//                 console.log(`completed  : ${method} ${url} -${duration}ms `)

//             })
//         )
//     }
// }
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const startTime = Date.now();

    console.log(`Incoming Request : ${method} ${url}`);
    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startTime;
        console.log(`Completed: ${method} ${url} - ${duration}ms`);
      }),
    );
  }
}
