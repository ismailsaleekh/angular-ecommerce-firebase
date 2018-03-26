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
    }, 

]

export const routing = RouterModule.forRoot(routes);