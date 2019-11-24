
export class Product {
    constructor(
        public sellerId:number,
        public pic:string,
        public category: string,
        public subcategory:string,
        public price: number,
        public quantity: number,
        public location: string,
        public units: boolean,
        public description:string
    ) { }
}