import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuard implements CanActivate {
  constructor(private _router: Router) {
  }
  canActivate(next: ActivatedRouteSnapshot): boolean {

    const id = next.url[1].path; // récupérer le second argument de l'URL et le convertir en entier

    if ( isNaN(+id) || (+id < 1)) {
      alert (`ATENCIÒN, Le id ${id} doit être numérique. Vous allez être redirigé vers l'accueil.`);
      this._router.navigate(['/welcome']);
      return false;
    }
    return true;
  }
}
