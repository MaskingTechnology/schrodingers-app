import { Module, OnModuleInit } from '@nestjs/common';

import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
    controllers: [OrderController],
    providers: [OrderService],
    exports: [OrderService],
})
export class OrderModule implements OnModuleInit
{
    constructor(private readonly orderService: OrderService) {}

    async onModuleInit(): Promise<void>
    {
        await this.orderService.initializeSubscription();
    }
}