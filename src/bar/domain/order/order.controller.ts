import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { OrderService } from './order.service';
import { CloseOrderDto, CreateOrderDto, PrepareProductDto } from './dto';

@Controller('order')
export class OrderController
{
    constructor(private readonly orderService: OrderService) {}

    @Post('close')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async closeOrder(@Body() dto: CloseOrderDto): Promise<void>
    {
        await this.orderService.closeOrder(dto.number);
    }

    @Get('open')
    async getOpenOrders(): Promise<unknown[]>
    {
        return this.orderService.getOpenOrders();
    }

    @Post('create')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async createOrder(@Body() dto: CreateOrderDto): Promise<void>
    {
        await this.orderService.createOrder(dto);
    }

    @Post('prepare-product')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async prepareProduct(@Body() dto: PrepareProductDto): Promise<unknown>
    {
        return this.orderService.prepareProduct(dto.orderNumber, dto.entryId);
    }

    @Get(':number')
    async getByOrderNumber(@Param('number') number: string): Promise<unknown>
    {
        return this.orderService.getByOrderNumber(number);
    }
}