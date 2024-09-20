import { RestService } from './rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  public data : any;
  public idTask: string = ""
  public idTaskDelete: string = ""
  public status: string = ""
  public token: string = ""
  public nameOfTask: string = ""

  miFormulario = new FormGroup({
 
  })
  
  constructor(private RestService:RestService,
    ) {}
  
   

  //data = Object.values(this.jsonRespuesta)
  ngOnInit() 
  {

  }



    
}




