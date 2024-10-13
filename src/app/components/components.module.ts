import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TabsComponent } from "./tabs/tabs.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [TabsComponent, HeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [TabsComponent, HeaderComponent],
})
export class ComponentsModule {}
