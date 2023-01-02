import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(){

  }

  ngOnInit(){

  }

  file:File | undefined

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  submitFile(){
    if(this.file == undefined){
      alert('Por favor selecione um arquivo!')
      return
    }

    console.log(this.file)
  }


}
