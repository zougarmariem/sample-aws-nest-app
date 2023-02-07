import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('functions')
  async getAllFunctions() {
    return await this.appService.getAllFunctions();
  }

  @Get('logs')
  async getAllLogs() {
    return await this.appService.getAllLogs();
  }
}
