import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Tapis } from '../model/tapis.model';
import { Observable, map, of } from 'rxjs';
import { TapisService } from './tapis.service';

@Injectable({
  providedIn: 'root'
})
export class TapisResoleService implements Resolve<Tapis> {
  id: any;

  constructor(private tapisService: TapisService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Tapis | Observable<Tapis> {
    this.id = localStorage.getItem('idTapis');
    if (this.id) {
      return this.tapisService.getTapisByIdTapis(this.id).pipe(
        map(t=>this.tapisService.createImages(t))
      )
    } else {
      return of(this.getTapisDetails());
    }
  }

  getTapisDetails():any{
    return {
      type: "",
      description: "",
      price: 0
    };
  }
}
