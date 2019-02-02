import {Pipe, PipeTransform} from '@angular/core';
import { Post } from './post.model';

 @Pipe({
  name: "categoryFilter",
  pure: false
})

 export class CategoryFilter implements PipeTransform {
  transform(input: Post[], category){
    let output: Post[] = [];
    for (let i=0; i< input.length; i++) {
      if (input[i].category === category) {
        output.push(input[i])
      }
    }
    return output;
  }
}