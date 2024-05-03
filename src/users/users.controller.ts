import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') // /users 
export class UsersController {

  @Get()  // GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN', @Query('age') age?:number ){
      return [role, age]
    }

    @Get(':id')  // GET /users/:id
    findOne(@Param('id') id: string){
      return { id }
    }

    @Post()  // POST /users
    create(@Body() user: {}){
      return user
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}){
      return { id, ...userUpdate }
    }

    @Delete(':id') // DELETE /users/:id
    deleteOne(@Param('id') id: string){
      return { id }
    }

}
