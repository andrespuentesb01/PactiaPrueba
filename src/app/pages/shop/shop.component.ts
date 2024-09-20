import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { productService } from 'src/services/product.service';
import { userService } from 'src/services/user.service';
import { siteService } from 'src/services/site.service';

import { shopService } from 'src/services/shop.service';
import { Itask } from 'src/interfaces/task.interface';
import { IBuy } from 'src/app/interfaces/shop.interface';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
  tap,
} from 'rxjs/operators';
@Component({

  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
 
  public dataFillProducts : any;
  public dataFillUsers : any;
  public dataFillShop : any;
  public dataFills : any;
  public ShopDetailList : any;
  public ShopHeaderList : any;
  public product: string = "";
  public idHeader: string = "";
  public idUser: string = "";
  public quantity: string = "";
  listShop : IBuy[] = [];


  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private productService:productService, private userService:userService,
    private siteService:siteService, private shopService:shopService, 
    ) {}
  
   

  //data = Object.values(this.jsonRespuesta)
  ngOnInit() 
  {

    this.getFilterData();
  }

  private getFilterData() {
    this.productService
      .getProduct()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFills = respuesta
   
       })
       this.getFilterDataUsers();
       this.getFilterDataProducts();
       this.getFilterDataShop()
  }

  private getFilterDataUsers() {
    this.userService
      .getUsers()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillUsers = respuesta
   
       })
       
  }

  private getFilterDataShop() {
    this.shopService
      .getShopHeader()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.ShopHeaderList = respuesta
   
       })
       
  }

  getFilterDataShopDetails(): void {
    var idHeader =+ this.idHeader
    this.shopService
      .getShopDetails(idHeader)
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.ShopDetailList = respuesta
   
       })
       
  }

  private getFilterDataProducts() {
    this.productService
      .getProduct()
      .pipe(
        tap((data: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataFillProducts = respuesta
   
       })
       
  }



  addBag(): void {
  
    console.log(this.listShop);
    var product = +this.product
    var user = +this.idUser
    var quantityShop = +this.quantity
    this.listShop.push({ idUser: user, idProduct: product, quantity: quantityShop }); // Regresa: 5

  }

  ClearBag(): void {
   
    this.listShop = [] // Regresa: 5

  }

  buy(): void {
 
     this.shopService
      .createShop(this.listShop)
      .subscribe(
        
      );
      window.alert("el registro fue creado");
      
  }

  
}




