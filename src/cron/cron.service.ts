import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  constructor(private configService: ConfigService) {}
  private readonly logger = new Logger(CronService.name);

  @Cron('5 * * * * *')
  handleCron() {
    this.logger.debug(
      'Beloved Cron',
      this.configService.get<string>('MY_ANIME_LIST_API_KEY'),
    );
  }
}
