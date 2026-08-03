import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';

import { OrderService } from './order.service';
import { CreateOrderDto } from './dto';

@Controller('order')
export class OrderController
{
    constructor(private readonly orderService: OrderService) {}

    @Post('create')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async createOrder(@Body() dto: CreateOrderDto): Promise<unknown>
    {
        return this.orderService.create(dto.tableNumber);
    }

    @Get(':number')
    async getByOrderNumber(@Param('number') number: string): Promise<unknown>
    {
        return this.orderService.getByNumber(number);
    }

    @Get('open/by-table')
    async getOpenByTable(@Query('table') tableNumber: string): Promise<unknown>
    {
        return this.orderService.getOpenByTable(tableNumber);
    }

    @Post('add-product')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async addProduct(@Body() body: { orderNumber: string, productCode: string }): Promise<unknown>
    {
        return this.orderService.addProduct(body.orderNumber, body.productCode);
    }

    @Post('remove-product')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async removeProduct(@Body() body: { orderNumber: string, entryId: string }): Promise<unknown>
    {
        return this.orderService.removeProduct(body.orderNumber, body.entryId);
    }

    @Post('send')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async sendOrder(@Body() body: { number: string }): Promise<unknown>
    {
        return this.orderService.sendOrder(body.number);
    }

    @Get('product/all')
    async getAllProducts(): Promise<unknown[]>
    {
        return this.orderService.getAllProducts();
    }

    @Get('product/:code')
    async getProductByCode(@Param('code') code: string): Promise<unknown>
    {
        return this.orderService.getProductByCode(code);
    }
}