import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('main')
  mainPage(@Res() res: Response) {
    res.sendFile(this.appService.getBuildPath());
  }

  @Get('signup')
  signupPage(@Res() res: Response) {
    res.sendFile(this.appService.getBuildPath());
  }

  // @Get('*')
  // fallback(@Res() res: any) {
  //   res.sendFile(this.appService.getBuildPath());
  // }

  // @Get('*')
  // serveFile(@Req() req: Request, @Res() res: Response) {
  //   const filePath = join(
  //     __dirname,
  //     '..',
  //     '..',
  //     'client',
  //     'build',
  //     'index.html',
  //   );
  //   return res.sendFile(filePath);
  // }
}
