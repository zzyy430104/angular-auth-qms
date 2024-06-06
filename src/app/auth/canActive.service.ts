import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
class UserToken {}

@Injectable({ providedIn: "root" })
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    console.log("canActive is working");
    return true;
  }
  // canMatch(currentUser: UserToken): boolean {
  //   console.log("canMatch is working");
  //   return false;
  // }
}

export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  return inject(PermissionsService).canActivate(
    inject(UserToken),
    route.params["id"]
  );
};
