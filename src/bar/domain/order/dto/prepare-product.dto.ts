import { IsNotEmpty, IsString } from 'class-validator';

export class PrepareProductDto
{
    @IsString()
    @IsNotEmpty()
    readonly orderNumber: string;

    @IsString()
    @IsNotEmpty()
    readonly entryId: string;
}