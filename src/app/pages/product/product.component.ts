import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { productService } from 'src/services/product.service';
import { Itask } from 'src/interfaces/task.interface';
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

  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  public dataProduct : any;
  public description: string = ""
  public price: string = ""
  public ivaPercent: string = ""
  public stock: string = ""
  
  
  
  public nameOfTask: string = ""
  

  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    private productService:productService,
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
        tap((dataProduct: Itask) => {
        
        })
      )
      .subscribe(respuesta=>{
 
        this.dataProduct = respuesta
   
       })
  }


  createTask(): void {
    var price = +this.price
    var ivaPercent = +this.ivaPercent
    var stock = +this.stock
    this.productService
      .createProduct( this.description, price, ivaPercent, stock)
      .subscribe(
        
      );
      window.alert("el registro fue creado");
      this.getFilterData();
  }


  
}




