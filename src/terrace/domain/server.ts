import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { OrderModule } from './order/order.module';

async function bootstrap(): Promise<void>
{
    const port = parseInt(process.argv.find(arg => arg.startsWith('--port='))?.split('=')[1] ?? '3310');

    const app = await NestFactory.create(OrderModule);

    app.setGlobalPrefix('terrace/domain/order');

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));

    await app.listen(port);
    console.log(`Terrace domain service running on port ${port}`);
}

bootstrap();