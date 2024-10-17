import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "notes",
    pathMatch: "full",
  },
  {
    path: "notes",
    loadChildren: () =>
      import("./pages/notes/notes.module").then((m) => m.NotesPageModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },  {
    path: 'papelera',
    loadChildren: () => import('./pages/papelera/papelera.module').then( m => m.PapeleraPageModule)
  },
  {
    path: 'favorito',
    loadChildren: () => import('./pages/favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
