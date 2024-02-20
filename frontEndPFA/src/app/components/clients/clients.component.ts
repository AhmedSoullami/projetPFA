import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clientsList: any[] = [];
  searchResults: any[] = [];
  currentPage = 1; 
  totalPages = 5; 
  searchText: string = '';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    const startIndex = (this.currentPage - 1) * this.totalPages;
    const endIndex = startIndex + this.totalPages;
    
    this.clientService.clients().subscribe({
      next: (data: any) => {
        this.clientsList = data.slice(startIndex, endIndex);
        this.filterClients();  // Appel initial pour afficher les clients correspondants à la recherche par défaut
      }
    });
  }

  filterClients() {
    this.searchResults = this.clientsList.filter(client =>
      client.prenom.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  
  // Ajoutez cette méthode pour gérer la recherche lors de la saisie
  onSearchChange() {
    this.filterClients();
  }

  changePage(page: number) {
    this.currentPage = page;
    // Affiche uniquement les résultats de la recherche
    this.filterClients();
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  deleteClient(id: any): void {
    this.clientService.deleteUser(id).subscribe(
      (data) => {
        console.log('Utilisateur supprimé avec succès:', data);
        this.getClients(); // Rafraîchir la liste après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      }
    );
  }
}
