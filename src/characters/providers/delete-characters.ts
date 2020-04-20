import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from '../character.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteCharacters {
  constructor(@InjectRepository(Character) private characterRepository: Repository<Character>) {}

  delete = async (id: string): Promise<string> => {
    await this.characterRepository
      .createQueryBuilder()
      .delete()
      .where(`id = :id`, { id: id })
      .execute();

    return 'deleted';
  };
}
