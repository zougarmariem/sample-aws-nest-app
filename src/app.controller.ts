import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('functions')
  getAllFunctions() {
    return this.appService.getAllFunctions();
  }

  @Get('logs')
  getAllLogs() {
    return this.appService.getAllLogs();
  }
}
