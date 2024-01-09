import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
  clientsList: any[] = [];
  currentPage = 1; 
  totalPages = 5; 
  constructor(private clientService:ClientService){}
  ngOnInit(): void {
  this.getClients()
}
getClients() {
  return this.clientService.clients().subscribe(
    {
      next:(data:any)=>{
        this.clientsList=data;
      }
    }
  );
}
  changePage(page: number) {
    this.currentPage = page;
    this.getClients();
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

}
