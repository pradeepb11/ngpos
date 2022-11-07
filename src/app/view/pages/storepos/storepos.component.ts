import { Component, OnInit } from '@angular/core';
import { StoreposService } from 'src/app/service/storepos.service';
// declare var $: any;
@Component({
  selector: 'app-storepos',
  templateUrl: './storepos.component.html',
  styleUrls: ['./storepos.component.scss']
})
export class StoreposComponent implements OnInit {

  constructor(
    private storeService: StoreposService
  ) {
    
   }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.storeService.getProductsCategory()
    .subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

}
