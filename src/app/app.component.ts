import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductStateInterface } from './store/state.models/product.state';
import { SampleState } from './store/state.models/sample.stateModel';
import * as fromAction from './store/actions/sample.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  message$ : Observable<SampleState>
  constructor(private store: Store<ProductStateInterface>){
      this.message$ = this.store.select('sampleState');
  }
  chnageText(newText : HTMLFormElement){
    console.log(newText.value);
    this.store.dispatch(new fromAction.changeMessage(newText.value))
  }
}
