import { Module } from '@nestjs/common';
import { API_DOCUMENT } from '.';
import { ShareService } from './share.service';

@Module({
  providers: [
    ShareService,
    {
      provide: API_DOCUMENT,
      useFactory: () => {},
    },
  ],
  exports: [ShareService],
})
export class ShareModule {}
