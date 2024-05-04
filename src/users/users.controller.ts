import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {} //Singleton

  @Get() // GET /users or /users?role=value&age=value
  findAll(
    @Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
    @Query('age') age?: number,
  ) {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id); // Method 2
  }

  @Post() // POST /users
  create(
    @Body()
    user: {
      id: number;
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {
    name?: string;
    email?: string;
    role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    return this.usersService.update(id, userUpdate)
  }

  @Delete(':id') // DELETE /users/:id
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}