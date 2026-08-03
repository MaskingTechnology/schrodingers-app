import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ProductDto
{
    @IsString()
    readonly code: string;

    @IsString()
    readonly name: string;

    @IsNumber()
    readonly price: number;
}

export class CreateOrderDto
{
    @IsString()
    @IsNotEmpty()
    readonly number: string;

    @IsString()
    @IsNotEmpty()
    readonly tableNumber: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductDto)
    readonly products: ProductDto[];
}