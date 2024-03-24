import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard as NestAuthGuad } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard extends NestAuthGuad("jwt") {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }
}
