import { Component, OnInit } from '@angular/core';
import { CargoService } from './../../service/cargo.service';
import { Cargo } from './../../model/cargo';


@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.component.html',
  styleUrls: ['./cargo-create.component.css']
})
export class CargoCreateComponent implements OnInit {

  public name:string= "";

  public cargo:Cargo = new Cargo(0,"");

  public cargos: Cargo[] = new Array();

  constructor(public cargoService:CargoService) { }

create():void{

}



/*
  create():void{
    this.cargoService
        .createCargo(this.cargo)
        .subscribe(res => {
          this.cargo = new Cargo();
        })
  }

  create():void {
    if(this.cargo.id){
      this.cargoService.updateCargo(this.cargo).subscribe(res => {
        this.cargo = new Cargo();
        this.findAll()}
      );
   }else{
      this.cargoService
        .createCargo(this.cargo)
        .subscribe(response => {
          this.cargo = new Cargo();
          return this.findAll();
        })
     }

}
*/


  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.cargoService.getCargoList().subscribe(res => {
      console.log(res);
      this.cargos = res;
    })
  }


}
