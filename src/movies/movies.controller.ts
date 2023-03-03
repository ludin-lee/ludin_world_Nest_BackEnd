import { Controller,Get,Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'this will return all movies'
    }
    @Get(':id')
    getOne(@Param('id') id:string){
        return `One movie ${id}`
    }
    @Post()
    create(){
        return 'zzzz'
    }
}
