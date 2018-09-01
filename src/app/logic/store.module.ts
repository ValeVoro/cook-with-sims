import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CategoryComponent } from "./category.component";

import { CounterDirective } from "./counter.directive";

@NgModule({
	imports: [ModelModule, BrowserModule, FormsModule],
	declarations: [StoreComponent, CounterDirective, CategoryComponent],
	exports: [StoreComponent, CategoryComponent]
})

export class StoreModule { }