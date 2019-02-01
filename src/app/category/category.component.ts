import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
//import { routing } from './app.routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: string[] = ["vegetable", "fruit"];
  posts: Post[] = [
    new Post("Onion", 10, "onion.jpg", "vegetable"),
    new Post("Tomato", 20, "tomato.jpg", "vegetable"),
    new Post("potato", 15, "potato.jpg", "vegetable"),
    new Post("pineapple", 30, "pineapple.jpg", "fruit"),
    new Post("grapes", 6, "grapes.jpg", "fruit"),
    new Post("apple", 12, "apple.jpg", "fruit"),
  ];


  constructor(private router: Router) { }

  ngOnInit(){
    //console.log(this.posts);
  }

  showCategory(category: string){
    this.router.navigate(['posts', category]);
  }

}
