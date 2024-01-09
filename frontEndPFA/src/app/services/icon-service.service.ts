import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IconServiceService {

  constructor() { }
  private selectedIconSubject = new BehaviorSubject<string>(''); 
  selectedIcon$ = this.selectedIconSubject.asObservable();

  setSelectedIcon(icon: string) {
    this.selectedIconSubject.next(icon);
  }
}
