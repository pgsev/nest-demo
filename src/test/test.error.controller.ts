import { ForbiddenException } from './exception/forbidden.exception';
import {Controller, Get, UseFilters} from '@nestjs/common';
import {HttpExceptionFilter} from "./filter/http-exception.filter";

@Controller('/test')
export class TestController {
  @Get()
  @UseFilters(new HttpExceptionFilter())
  throwError() {
    throw new ForbiddenException();
  }
}
