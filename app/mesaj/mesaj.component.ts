import { Component, OnInit} from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-mesaj',
  templateUrl: './mesaj.component.html',
  styleUrls: ['./mesaj.component.css']
})
export class MesajComponent implements OnInit{

  contactForm!: FormGroup;

  isSubmit = true;
  submitMesaj='';

  constructor(private formBuilder: FormBuilder, private firestore: Firestore){

  }
  
  ngOnInit(){
    this.contactForm= this.formBuilder.group({
      nume:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]],
      mesaj:[null,Validators.required],
      subiect:[null,Validators.required],
    })
  }
  submitData(value:any){

    let $contactRef=collection(this.firestore,"contact");
    addDoc($contactRef, value)
    .then(()=>{
      this.submitMesaj = 'Trimis cu Succes!';
    })
    .catch(err=>{
      console.log(err);
    })
    
    this.isSubmit=true;

    setTimeout(()=>{
      this.isSubmit=false;
    },8000);



  }
  


}
