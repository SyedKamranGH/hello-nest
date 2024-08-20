import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /* 
    List of routes
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // get all users
  findAll() {
    return [];
  }

  // Order matters for dynamic routing
  //   @Get('interns')
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') //get specific user
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') //get specific user
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //get specific user
  delete(@Param('id') id: string) {
    return { id };
  }
}
