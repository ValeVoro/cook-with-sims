import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StoreModule } from "./logic/store.module";
import { ItemModule } from "./logic/item.module";

import { StoreComponent } from "./logic/store.component";
import { ItemComponent } from "./logic/item.component";
import { BrowserModule }  from '@angular/platform-browser';
import { CategoryModule } from "./logic/category.module";
import { CategoryComponent } from "./logic/category.component";
import { RouterModule } from "@angular/router";


@NgModule({
	imports: [BrowserModule, StoreModule, CategoryModule, ItemModule,
	RouterModule.forRoot([
		{
			path: "home", component: StoreComponent
		},
		{
			path: ":category", component: CategoryComponent
		},
		{
			path: ":category/:id", component: ItemComponent
		},
		{
			path: "**", redirectTo: "/home" 
		},
	])],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }



