import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)    
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)    
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
