import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MantenedorEnvioComponent } from './pages/admin/dashboard/mantenedor-envio/mantenedor-envio.component';
import { MangalargaComponent } from './pages/admin/mangalarga/mangalarga.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { MantenedorProductosComponent } from './pages/admin/mantenedor-productos/mantenedor-productos.component';
import { MenuAdminComponent } from './pages/admin/menu-admin/menu-admin.component';
import { MenuNavComponent } from './pages/admin/menu-nav/menu-nav.component';
import { PoleraComponent } from './pages/admin/polera/polera.component';
import { PoleronComponent } from './pages/admin/poleron/poleron.component';
import { PoloComponent } from './pages/admin/polo/polo.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductossComponent } from './pages/productoss/productoss.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MantenedorEnvioComponent,
    MangalargaComponent,
    CarritoComprasComponent,
    MantenedorProductosComponent,
    MenuAdminComponent,
    MenuNavComponent,
    PoleraComponent,
    PoleronComponent,
    PoloComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProductoComponent,
    ProductossComponent,
    RecuperarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
