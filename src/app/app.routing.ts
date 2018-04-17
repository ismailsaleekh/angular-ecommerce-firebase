import { RouterModule, Routes } from '@angular/router';
//main componentns
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
//admin components
import { AdminComponent } from './components/admin/admin.component';

import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';

import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                component: MainComponent,
                children: [
                    {
                        path: 'cart',
                        component: CartComponent
                    },
                    {
                        path: 'checkout',
                        component: CheckoutComponent
                    },
                    {
                        path: 'login',
                        component: LoginComponent
                    },
                    {
                        path: '',
                        component: HomeComponent,
                        children: [
                            {
                                path: '',
                                component: ContentComponent
                            }
                        ]
                    }

                ]
            }
        ]
    }, {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'add-product',
                component: AddProductComponent
            },
            {
                path: 'edit-product',
                component: EditProductComponent
            },
            {
                path: 'product-list',
                component: ProductListComponent
            },
            {
                path: 'add-user',
                component: UserAddComponent
            },
            {
                path: 'user-list',
                component: UserListComponent
            }
        ]
    }

]

export const routing = RouterModule.forRoot(routes);