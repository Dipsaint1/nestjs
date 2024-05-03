import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users') // /users 
export class UsersController {
  /* 
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
  */

    @Get()  // GET /users
    findAll(){
      return []
    }

    // @Get('interns') //GET /users/interns
    // findAllInterns(){
    //   return []
    // }

    @Get(':id')  // GET /users/:id
    findOne(@Param('id') id: string){
      return { id }
    }

    @Post()  // POST /users
    create(@Body() user: {}){
      return user
    }

    @Patch('id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() user: {}){
      return { id, user }
    }
}
