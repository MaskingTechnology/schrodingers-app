import { IsString } from 'class-validator';

export class CreateOrderDto
{
    @IsString()
    readonly tableNumber: string;
}