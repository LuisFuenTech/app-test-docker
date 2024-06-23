import { faker } from '@faker-js/faker';

import * as petRepository from './repository.js';

export const getAll = async (req, res) => {
  try {
    console.log('controller:pets:getAll');

    const pets = await petRepository.find();

    return res.status(200).json(pets);
  } catch (error) {
    console.error('controller:pets:getAll:error', error);

    return res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    console.log('controller:pets:create');

    const petData = {
      type: faker.animal.type(),
      name: faker.person.firstName()
    };
    const pet = await petRepository.save(petData);

    return res.status(200).json({ message: `pet ${pet._id} created` });
  } catch (error) {
    console.error('controller:pets:create:error', error);

    return res.status(500).json({ error: error.message });
  }
};
