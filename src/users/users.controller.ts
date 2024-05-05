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
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') //       /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {} //Singleton

  @Get() // GET               /users or /users?role=value&age=value
  async findAll(
    @Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
    @Query('age') age?: number,
  ) {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET        /users/:id
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id); 
  }

  @Post() // POST          /users
  // ValidationPipe ensures that the body parameters are validated 
  // against the Dto's and get a message if there is an error
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // PATCH    /users/:id
  // ValidationPipe ensures that the body parameters are validated 
  // against the Dto's and get a message if there is an error
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // DELETE    /users/:id
  async deleteOne( @Param('id', ParseIntPipe) id: number ) {
    return this.usersService.delete(id);
  }
}
