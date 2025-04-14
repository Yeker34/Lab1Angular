import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const confirmOutGuard = (route: ActivatedRouteSnapshot, router: RouterStateSnapshot) => {
    return confirm("Вы точно хотите уйти?");
}