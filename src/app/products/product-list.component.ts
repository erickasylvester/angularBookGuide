import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

  constructor (private productService: ProductService) {
  }
  
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter = '';
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage = '';
  sub!: Subscription;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next : products => {
        this.products = products;
        this.filteredProducts = products},
      error : err => this.errorMessage = err
    });
    this.filteredProducts = this.products;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.perfromFilter(value);
    console.log('filteredProducts: ' + this.filteredProducts);

  }

  perfromFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy) );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}