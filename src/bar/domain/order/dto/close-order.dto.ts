import { IsNotEmpty, IsString } from 'class-validator';

export class CloseOrderDto
{
    @IsString()
    @IsNotEmpty()
    readonly number: string;
}