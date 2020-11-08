import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'deliveryopts',
    loadChildren: () => import('./deliveryopts/deliveryopts.module').then( m => m.DeliveryoptsPageModule)
  },
  {
    path: 'manageaddress',
    loadChildren: () => import('./account/manageaddress/manageaddress.module').then( m => m.ManageaddressPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./account/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'myoffers',
    loadChildren: () => import('./account/myoffers/myoffers.module').then( m => m.MyoffersPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./account/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./account/myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'order-status',
    loadChildren: () => import('./order-status/order-status.module').then( m => m.OrderStatusPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
