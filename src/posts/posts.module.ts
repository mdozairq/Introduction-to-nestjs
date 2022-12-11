/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsServices } from './posts.services';

@Module({
  controllers: [PostsController],
  providers: [PostsServices],
})
export class PostsModule {}
