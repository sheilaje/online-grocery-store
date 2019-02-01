import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

 import { HttpModule } from '@angular/http';
 import { routing } from './app.routing';

import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';

// import { SwiperModule } from '@angular2-useful-swiper';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    CategoryComponent,
    PostListComponent,
    PostdetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    FormsModule,
    HttpModule,
    AppRoutingModule,
     RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "shopping-cart", component: ShoppingCartComponent},
      {path: "my/orders", component: MyOrdersComponent},
      {path: "admin/products", component: AdminProductsComponent},
      {path: "admin/orders", component: AdminOrdersComponent},
      {path: "login", component: LoginComponent},
      {path: "category",component: CategoryComponent},
      {path: "posts/:category", component: PostListComponent},
      {path:"posts/:id", component: PostdetailsComponent}      
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
