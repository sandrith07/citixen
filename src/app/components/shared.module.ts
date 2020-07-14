import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopoverTaskComponent } from "./popover-task/popover-task.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { DetailTaskComponent } from './detail-task/detail-task.component';
@NgModule({
    declarations: [PopoverTaskComponent, DetailTaskComponent],
    exports: [PopoverTaskComponent, DetailTaskComponent],
    imports: [ 
        CommonModule,
        FormsModule,
        IonicModule]
})

export class sharedModule {}