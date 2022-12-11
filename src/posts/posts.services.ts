/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Post } from './posts.model';

@Injectable()
export class PostsServices {
  private posts: Post[] = [];

  addPost(title: string, desc: string) {
    const postId = Math.random();
    const newPost = new Post(postId, title, desc);
    this.posts.push(newPost);
    console.log(this.posts);
    return postId;
  }

  getPosts() {
    return this.posts;
  }

  
}
