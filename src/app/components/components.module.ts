import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TabsComponent } from "./tabs/tabs.component";
import { HeaderComponent } from "./header/header.component";
import { MenuNoteComponent } from "./menu-note/menu-note.component";
import { RouterLink } from "@angular/router";
import { BotonSalirComponent } from "./boton-salir/boton-salir.component";

@NgModule({
  declarations: [
    TabsComponent,
    HeaderComponent,
    MenuNoteComponent,
    BotonSalirComponent,
  ],
  imports: [CommonModule, IonicModule, RouterLink],
  exports: [TabsComponent, HeaderComponent, BotonSalirComponent],
})
export class ComponentsModule {}
