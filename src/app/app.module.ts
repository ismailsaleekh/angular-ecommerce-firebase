import { DataService } from './services/data.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule } from "angularfire2/storage";

//components
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule, CollapseModule   } from 'ngx-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { CartService } from './services/cart.service';
import { ProductDetailsComponent } from './components/content/product-details/product-details.component';
import { UserAccountComponent } from './components/user-account/user-account.component';


const config = {
  apiKey: "AIzaSyARGzZ4hTAQQQ8bD4sZjuarzyawVPlRXAY",
  authDomain: "dimploma-project.firebaseapp.com",
  databaseURL: "https://dimploma-project.firebaseio.com",
  projectId: "dimploma-project",
  storageBucket: "dimploma-project.appspot.com",
  messagingSenderId: "752633795001"
};

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
    EditProductComponent,
    ProductDetailsComponent,
    UserAccountComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    CollapseModule .forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    routing
  ],
  providers: [DataService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }