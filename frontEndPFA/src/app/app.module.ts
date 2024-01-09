import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes,RouterModule} from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { RegisterComponent } from './components/register/register.component';
import { AjouterTapisComponent } from './components/ajouter-tapis/ajouter-tapis.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { TapisComponent } from './components/tapis/tapis.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { ShowImageTapisComponent } from './components/show-image-tapis/show-image-tapis.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { EditTapisComponent } from './components/edit-tapis/edit-tapis.component';
import { TapisResoleService } from './services/tapis-resole.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { TapisDetailsComponent } from './components/tapis-details/tapis-details.component';

const routes:Routes=[
  {path:'',component:NavbarComponent},
  {path:'login',component:ConnexionComponent},
  {path:'register',component:RegisterComponent},
  {path:'addTapis',component:AjouterTapisComponent},
  {path:'sidebar',component:SidebarAdminComponent},
  {path:'admin',component:AdminpageComponent},
  {path:'client',component:ClientComponent},
  {path:'tapis',component:TapisComponent},
  {path:'clients',component:ClientsComponent},
  {path:'statistiques',component:StatistiquesComponent},
  {path:'Ajoutertapis',component:AjouterTapisComponent},
  {path:'editTapis',component:EditTapisComponent,
    resolve:{
      product:TapisResoleService
    }
  },
  {path:'home',component:HomeComponent},
  {path:'detailsTapis',component:TapisDetailsComponent,resolve:{product:TapisResoleService}}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    RegisterComponent,
    AjouterTapisComponent,
    SidebarAdminComponent,
    TapisComponent,
    HeaderComponent,
    AdminpageComponent,
    ClientComponent,
    ClientsComponent,
    StatistiquesComponent,
    NavHeaderComponent,
    ShowImageTapisComponent,
    EditTapisComponent,
    HomeComponent,
    FooterComponent,
    ContainerComponent,
    TapisDetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatGridListModule,
    NgbModule,
   NgbCarouselModule    
   
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
