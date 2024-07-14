import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterService, GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { DashboardLayoutModule, SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { CheckBoxSelectionService, DropDownListAllModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SidebarModule, ToolbarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GridModule,
    DialogModule,
    DashboardLayoutModule,
    MultiSelectModule,
    ReactiveFormsModule,
    DropDownListAllModule,
    CheckBoxModule,
    SplitterModule,
    DropDownListModule,
    SidebarModule,
    TreeViewModule,
    TextBoxModule,
    ButtonModule,
    DatePickerModule,
    ToolbarModule,
    
  ],
  providers: [
    FilterService, 
    PageService,
    CheckBoxSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
