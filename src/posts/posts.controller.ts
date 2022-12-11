/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { PostsServices } from './posts.services';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsServices) {}

  @Post()
  addPost(@Body('title') title: string, @Body('desc') desc: string): any {
    const savedId = this.postsService.addPost(title, desc);
    return { id: savedId };
  }

  @Get()
  getAllPosts() {
    return this.postsService.getPosts();
  }
}
