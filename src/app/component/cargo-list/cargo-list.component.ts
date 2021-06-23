import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/model/cargo';
import { CargoService } from 'src/app/service/cargo.service';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  // cargos: Cargo[] = [];

  cargos: Cargo[] = new Array();

  constructor(private cargoService: CargoService,
    private router: Router) { }

  ngOnInit(): void {
   return this.findAll();
    console.log("dados" + this.cargos);
  }


  findAll():void{
    this.cargoService.getCargoList().subscribe(res => {
      console.log(res);
      this.cargos = res;
    })
  }

}
