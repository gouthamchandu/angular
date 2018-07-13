import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
//import { ViewEncapsulation } from '@angular/compiler/src/core';
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { 


  }

  ngOnInit() {
    jQuery('.carousel').carousel({
      interval:2000
    });
  }
  viewProducts(){
    this.router.navigate(['/products']);
   }

}
