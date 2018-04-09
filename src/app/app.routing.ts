import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes} from '@angular/router';

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
                path:'add',
                component: AddProductComponent
            },
            {
                path:'product-list',
                component: ProductListComponent
            }
        ]
    } 

]

export const routing = RouterModule.forRoot(routes);