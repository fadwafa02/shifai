import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    children: [
      
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home-principal', // Redirige vers la page home
    pathMatch: 'full'
  },  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: 'medecin',
    loadChildren: () => import('./medecin/medecin.module').then( m => m.MedecinPageModule)
  },
  {
    path: 'medicament',
    loadChildren: () => import('./medicament/medicament.module').then( m => m.MedicamentPageModule)
  },
  {
    path: 'ajout-medecin',
    loadChildren: () => import('./ajout-medecin/ajout-medecin.module').then( m => m.AjoutMedecinPageModule)
  },
  {
    path: 'recherche-medecin',
    loadChildren: () => import('./recherche-medecin/recherche-medecin.module').then( m => m.RechercheMedecinPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'home-principal',
    loadChildren: () => import('./home-principal/home-principal.module').then( m => m.HomePrincipalPageModule)
  },
  {
    path: 'homeindividu',
    loadChildren: () => import('./homeindividu/homeindividu.module').then( m => m.HomeindividuPageModule)
  },
  {
    path: 'homemedecin',
    loadChildren: () => import('./homemedecin/homemedecin.module').then( m => m.HomemedecinPageModule)
  },

  {
    path: 'home-avant-compte',
    loadChildren: () => import('./home-avant-compte/home-avant-compte.module').then( m => m.HomeAvantComptePageModule)
  },
  {
    path: 'affiche-medecin', 
    loadChildren: () => import('./affiche-medecin/affiche-medecin.module').then( m => m.AfficheMedecinPageModule)
  },
  {
    path: 'login-medecin',
    loadChildren: () => import('./login-medecin/login-medecin.module').then( m => m.LoginMedecinPageModule)
  },
  {
    path: 'signup-medecin',
    loadChildren: () => import('./signup-medecin/signup-medecin.module').then( m => m.SignupMedecinPageModule)
  },
  {
    path: 'app-medecin',
    loadChildren: () => import('./app-medecin/app-medecin.module').then( m => m.AppMedecinPageModule)
  },
  {
    path: 'calender-medecin',
    loadChildren: () => import('./calender-medecin/calender-medecin.module').then( m => m.CalenderMedecinPageModule)
  },
  {
    path: 'parametre-med',
    loadChildren: () => import('./parametre-med/parametre-med.module').then( m => m.ParametreMedPageModule)
  },
  {
    path: 'parametre-secretaire',
    loadChildren: () => import('./parametre-secretaire/parametre-secretaire.module').then( m => m.ParametreSecretairePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}





