import { Component, ViewEncapsulation } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
	selector: "item",
	moduleId: module.id,
	templateUrl: "item.component.html"
})

export class ItemComponent {

	activatedRoute: ActivatedRoute;  
	private myId = this.route.params["id"];

	constructor(private route: ActivatedRoute, private repository: ProductRepository) { 
		this.activatedRoute = route;
	}
	
	ngOnInit() {
		this.activatedRoute.paramMap.subscribe(params => {
			this.myId =  params.get('id');
		});
	}
	
	get product(): Product {
		return this.repository.getProduct(this.myId);
	}
	
	getRating(id: Product): number[] {
		return this.repository.getRating(id.id);
	}
}

