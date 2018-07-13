import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products:any;
  cartProducts:any;
  //router: any;


  constructor( private router:Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data!==null){
      this.cartProducts = JSON.parse(data);
    }
    else{
      this.cartProducts=[];
    }
    this.products=[
      {
        id:1,
        title:"water bottle",
        description:"water bottle",
        img:"assets/1.jpg",
        price:30
      },
      {
        id:2,
        title:"water bottle",
        description:"water bottle",
        img:"assets/2.jpg",
        price:40
      },
      {
        id:3,
        title:"water bottle",
        description:"water bottle",
        img:"assets/3.jpg",
        price:50
      },
      {
        id:4,
        title:"water bottle",
        description:"water bottle",
        img:"assets/1.jpg",
        price:30
      },
      {
        id:5,
        title:"water bottle",
        description:"water bottle",
        img:"assets/2.jpg",
        price:40
      },
      {
        id:6,
        title:"water bottle",
        img:"assets/3.jpg",
        price:50
      },
    ];
  }

  addToCart(index){
    let product=this.products[index];
    let cartData=[];
    let data= localStorage.getItem('cart');
    if(data!==null){
      cartData=JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded=true;
  }
  updateCartData(cartData){
    this.cartProducts=cartData;
  }
  goToCart(){
    this.router.navigate(['/cart']);

  }
  }

