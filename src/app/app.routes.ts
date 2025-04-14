import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowNameComponent } from './pages/show-name/show-name.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';

export const routes: Routes = [{path: '', component: Page1Component}, 
    {path: 'page2', component: Page2Component, canActivate: [confirmInGuard], pathMatch: 'full'}, 
    {path: 'page3', component: Page3Component, canDeactivate: [confirmOutGuard], pathMatch: 'full'}, 
    {path: '**', component: NotFoundComponent},
    {path: 'show-name/:name', component: ShowNameComponent}];

