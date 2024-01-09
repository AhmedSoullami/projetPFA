import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  formRegister!:FormGroup
  constructor(private router:Router,private registerService:RegisterService,private fb:FormBuilder ){}
  ngOnInit(): void {
     this.formRegister=this.fb.group(
      {
        prenom:['', Validators.required],
        nom:['', Validators.required],
        email:['', Validators.required],
        password:['', Validators.required],
      }
     )
  }
  onRegister(){
     if(this.formRegister.valid){
      const prenom=this.formRegister.value.prenom;
      const nom=this.formRegister.value.nom;
      const email=this.formRegister.value.email;
      const password=this.formRegister.value.password;
      this.registerService.register(prenom,nom,email,password).subscribe({
        next:data=>{
          Swal.fire('Bonjour ' + prenom + ' '+ nom +', vous êtes maintenant membre.');
          console.log(data);
          this.router.navigateByUrl('/login')
          

        },
        error: err => {
          console.log(err);
        }
      }
        );
        

     }else{
      Swal.fire('Erreur', 'Veuillez remplir correctement tous les champs.', 'error');
     }
  }

}
