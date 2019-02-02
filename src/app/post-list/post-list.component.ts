import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../post.model'

 @Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  category: string = null;

   posts: Post[] = [
    new Post("Onion", 10, "onion.jpg", "vegetable",1),
    new Post("Tomato", 20, "tomato.jpg", "vegetable",2),
    new Post("potato", 15, "potato.jpg", "vegetable",3),
    new Post("pineapple", 30, "pineapple.jpg", "fruit",4),
    new Post("grapes", 6, "grapes.jpg", "fruit",5),
    new Post("apple", 12, "apple.jpg", "fruit",6),
  ];

   constructor(private route: ActivatedRoute, private location: Location, private router: Router) { }

   ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.category = urlParameters['category'];
  });
  }

   showPostDetails(post: Post) {
    let postId = post.id;
    console.log(postId);
    this.router.navigate(['posts', postId]);
  }

 }
