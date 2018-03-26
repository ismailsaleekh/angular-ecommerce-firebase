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
                        path: '',
                        component: ContentComponent
                    },
                    {
                        path: 'carousel',
                        component: ContentComponent
                    }
                ]
            }
        ]
    }, 

]

export const routing = RouterModule.forRoot(routes);