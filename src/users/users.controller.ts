import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
  findOne(@Param('id') id: string) {
    // Convert id to number
    // return this.usersService.findOne(Number(id)) // Method 1
    return this.usersService.findOne(+id); // Method 2
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  deleteOne(@Param('id') id: string) {
    // Convert id to number because it is a string
    // return this.usersService.findOne(Number(id)) // Method 1
    return this.usersService.delete(+id)
  }
}
