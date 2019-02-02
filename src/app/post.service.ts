import { Injectable } from '@angular/core';
// import { Post } from './post.model';
import { POSTS } from './mock-Post';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPostById(postId: number) {
    for (let i=0; i< POSTS.length; i++) {
      if (POSTS[i].id === postId) {
        console.log("posts ", POSTS[i]);
        return POSTS[i];
      }
    }
  }
}
