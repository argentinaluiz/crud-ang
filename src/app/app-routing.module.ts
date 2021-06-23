import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoService } from './service/cargo.service';
import { CargoListComponent } from './component/cargo-list/cargo-list.component';
import { CargoCreateComponent } from './component/cargo-create/cargo-create.component';
import { CargosUpdateComponent } from './component/cargos-update/cargos-update.component';
import { CargosDeleteComponent } from './component/cargos-delete/cargos-delete.component';
import { JasmineComponent } from './component/jasmine/jasmine.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/cargos',
    pathMatch: 'full'
  },
  {
    path:'cargos',
    component: CargoListComponent
  },
  {
    path:'create',
    component: CargoCreateComponent
  },
  {
    path:'update',
    component: CargosUpdateComponent
  },
  {
    path:'delete',
    component: CargosDeleteComponent
  },
  {
    path:'jasmine',
    component: JasmineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CargoService],
  declarations: [


    CargoCreateComponent,
      CargosUpdateComponent,
      CargosDeleteComponent,
      JasmineComponent
  ],


})
export class AppRoutingModule { }
