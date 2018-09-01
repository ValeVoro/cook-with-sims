import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { CategoryComponent } from "./category.component";
import { ItemComponent } from "./item.component";

import { StoreComponent } from "./store.component";

@NgModule({
	imports: [ModelModule, BrowserModule, FormsModule],
	declarations: [ItemComponent],
	exports: [ItemComponent]
})

export class ItemModule { }