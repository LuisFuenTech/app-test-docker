import { Pet } from '../../db/mongodb/models/index.js';

export const find = () => {
  return Pet.find();
};

export const save = (pet) => {
  return Pet.create(pet);
};
