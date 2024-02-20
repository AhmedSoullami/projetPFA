import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  isLoggedIn = false;
   formLogin!:FormGroup;
   constructor(private router:Router,private loginservice:LoginService,private fb:FormBuilder){}
   ngOnInit(): void {
      this.formLogin=this.fb.group({
        email: ['', Validators.required],
        password:['',Validators.required]
      })
   }
   connexion() {
    if (this.formLogin.valid) {
      let email = this.formLogin.value.email;
      let password = this.formLogin.value.password;
  
      this.loginservice.login(email, password).subscribe({
        next: (data: any) => {
          console.log(data);
          const decodeToken: any = jwtDecode(data.accessToken);
          if (decodeToken && decodeToken.sub) {
            const userId = decodeToken.sub.split(',')[0];
            const roles = decodeToken.role.map((role: any) => role.roleName);
  
            console.log(userId);
            console.log(roles);
  
            if (roles.includes("admin")) {
              console.log("Vous êtes admin");
              this.router.navigateByUrl("/admin");
            }
  
            if (roles.includes("user")) {
              console.log("Vous êtes client");
              this.isLoggedIn = true;
              if(this.isLoggedIn==true){
                localStorage.setItem('islogin',this.isLoggedIn.toString())
                localStorage.setItem('idclient',userId)
                console.log(this.isLoggedIn)
              }
              this.router.navigateByUrl("/home");

             
            }
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  
}
