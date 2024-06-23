import { model, Schema } from 'mongoose';

const Pet = model(
  'Pet',
  new Schema(
    {
      type: { type: String, require: true },
      name: { type: String, require: true }
    },
    { timestamps: true }
  )
);

export default Pet;
