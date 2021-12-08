import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateMessageDto } from '../dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('getMessage param: ', id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('post body: ', body);
  }
}
