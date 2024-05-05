import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  create( @Body() createUserDto: CreateUserDto ) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // PATCH /users/:id
  update( @Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // DELETE /users/:id
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
