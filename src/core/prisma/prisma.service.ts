import { Injectable, type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/client/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
