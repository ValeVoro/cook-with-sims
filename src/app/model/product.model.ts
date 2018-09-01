export class Product {
	constructor(
		public id: number,
		public name: string,
		public category: string,
		public description: string,
		public preps: string[],
		public ingredients: string[],
		public time: string,
		public rating: number) { }
}