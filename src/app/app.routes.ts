import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductComponent, canActivate: [authGuard] },
    { path: '', redirectTo: "login", pathMatch: 'full' }
];
