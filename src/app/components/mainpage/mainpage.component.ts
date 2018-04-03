import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  images: string[];
  constructor() { }

  ngOnInit() {
    this.images = [
      "https://pp.userapi.com/c631529/v631529421/32ef4/SKEqIZnSjPQ.jpg",
      "https://pp.userapi.com/c631529/v631529421/32e92/dGM5_J2pAjk.jpg",
      "https://pp.userapi.com/c846017/v846017780/475d/EfFuLkBiA1k.jpg",
    ]
    var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100
  });
  }

}
