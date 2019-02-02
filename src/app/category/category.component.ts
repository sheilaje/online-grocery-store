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
    new Post("Onion", 10, "onion.jpg", "vegetable",1),
    new Post("Tomato", 20, "Tomato.jpg", "vegetable",2),
    new Post("potato", 15, "potato.jpg", "vegetable",3),
    new Post("pineapple", 30, "pineapple.jpg", "fruit",4),
    new Post("grapes", 6, "grapes.jpg", "fruit",5),
    new Post("apple", 12, "apple.jpg", "fruit",6),
  ];


  constructor(private router: Router) { }

  ngOnInit(){
    //console.log(this.posts);
  }

  showCategory(category: string){
    this.router.navigate(['posts', category]);
  }

}
