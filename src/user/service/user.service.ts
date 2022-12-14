/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from '../models/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity> 
    ){}

    // create(user: User) : Observable<User>(
    //     return from (this.userRepository.save(user))
    // )

    // findAll(): Observable<User[]>{
    //     return from(this.userRepository.find());
    // }

    // deleteOne(id: number): Observable<any>{
    //     return from(this.userRepository.delete(id));
    // }

    // updateOne(id: number, user: User): Observable<any>{
    //     return from(this.userRepository.update(id, user));
    // }
}
