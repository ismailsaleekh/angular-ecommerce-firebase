import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule, CollapseModule   } from 'ngx-bootstrap';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    CheckoutComponent,
    NavbarComponent,
    CarouselComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    AddProductComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    ProductListComponent,
    UserAddComponent,
    UserListComponent,
    EditProductComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    CollapseModule .forRoot(),
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }