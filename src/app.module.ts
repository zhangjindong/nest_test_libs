import { ShareModule } from '@app/share';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ShareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
