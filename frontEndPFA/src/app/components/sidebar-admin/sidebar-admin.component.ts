import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IconServiceService } from 'src/app/services/icon-service.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css'],
  
})
export class SidebarAdminComponent {
  constructor(private iconService: IconServiceService) {}
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  sidenavWidth$: Observable<string> = this.collapsed$.pipe(
    map((collapsed) => (collapsed ? '0px' : '250px'))
  );

  toggleSidebar() {
   
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }
  

  setIcon(icon: string) {
    this.iconService.setSelectedIcon(icon);
  }
}
