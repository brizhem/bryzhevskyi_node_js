import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
}
