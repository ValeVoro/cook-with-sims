import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
	selector: "category",
	moduleId: module.id,
	templateUrl: "category.component.html"
})

export class CategoryComponent {
	public selectedCategory = this.route.params["category"];
	public productsPerPage = 4;
	public selectedPage = 1;
	activatedRoute: ActivatedRoute;  


	constructor(private route: ActivatedRoute, private repository: ProductRepository) { 
		    this.activatedRoute = route;
		}
	
	ngOnInit() {
		this.activatedRoute.paramMap.subscribe(params => {
			this.selectedCategory =  params.get('category');
		});
	}
	
	get products(): Product[] {
		let pageIndex = (this.selectedPage - 1) * this.productsPerPage
		console.log(this.repository.getProducts(this.selectedCategory)
		.slice(pageIndex, pageIndex + this.productsPerPage));
		
		return this.repository.getProducts(this.selectedCategory)
		.slice(pageIndex, pageIndex + this.productsPerPage);
	}
	
	getRating(id: Product): number[] {
		return this.repository.getRating(id.id);
	}
	
	get categories(): string[] {
		return this.repository.getCategories();
	}
	
	changeCategory(newCategory?: string) {
		this.selectedCategory = newCategory;
	}
	
	changePage(newPage: number) {
		this.selectedPage = newPage;
	}
	
	
	changePageSize(newSize: number) {
		this.productsPerPage = Number(newSize);
		this.changePage(1);
	}
	
	get pageCount(): number {
		return Math.ceil(this.repository
			.getProducts(this.selectedCategory).length / this.productsPerPage)
	}

	
	

}

