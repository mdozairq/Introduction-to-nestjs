/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create() {}

  @Get()
  findOne(id) {}

  @Get()
  findAll() {}

  @Delete()
  deleteOne() {}

  @Put()
  updateOne() {}
}
