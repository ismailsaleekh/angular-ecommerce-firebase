import { RouterModule, Routes } from '@angular/router';
//main componentns
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
//admin components
import { AdminComponent } from './components/admin/admin.component';
import { AddGenreComponent } from './components/admin/add-genre/add-genre.component';
import { AddAuthorComponent } from './components/admin/add-author/add-author.component';

import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ProductDetailsComponent } from './components/content/product-details/product-details.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

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
                            },
                            {
                                path: 'product-details',
                                component: ProductDetailsComponent
                            },
                            {
                                path: 'user-account',
                                component: UserAccountComponent
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
                path: 'product-list',
                component: ProductListComponent
            },
            {
                path: 'add-genre',
                component: AddGenreComponent
            },
            {
                path: 'add-author',
                component: AddAuthorComponent
            }
        ]
    }

]

export const routing = RouterModule.forRoot(routes);