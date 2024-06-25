import { model, Schema } from 'mongoose';

const petSchema = new Schema(
  {
    type: { type: String, require: true },
    name: { type: String, require: true }
  },
  { timestamps: true }
);

export default model('Pet', petSchema);
