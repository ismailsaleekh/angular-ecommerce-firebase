import { RouterModule, Routes} from '@angular/router';
//main componentns
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { CheckoutComponent } from './checkout/checkout.component';
//admin components
import { AdminComponent } from './admin/admin.component';

import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes : Routes  = [
    {
        path:'',
        component: AppComponent,
        children: [
            {
                path:'',
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
                            path:'',
                            component : HomeComponent,
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
    },{
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path:'add-product',
                component: AddProductComponent
            },
            {
                path:'edit-product',
                component: EditProductComponent
            },
            {
                path:'product-list',
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