import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PrismaService } from 'src/prisma.service';
import { JwtStrategy } from './auth-jwt.strategy';
import { DidController } from './did.controller';
import { DidService } from './did.service';
import { JwtAuthGuard } from './roles.guard';

@Module({
  imports: [HttpModule],
  controllers: [DidController],
  providers: [
    DidService,
    PrismaService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    JwtStrategy,
  ],
})
export class DidModule {}
