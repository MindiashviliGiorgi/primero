import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';

export const routes: Routes = [
  {
    path : '',
    component : MainPageComponent
  }
];
