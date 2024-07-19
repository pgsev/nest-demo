import { Module } from '@nestjs/common';
import { TestController } from './test.error.controller';

@Module({
  controllers: [TestController],
})
export class TestModule {}
