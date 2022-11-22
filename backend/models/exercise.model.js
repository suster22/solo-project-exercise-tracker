// require in mongoose and extract out Schema construtor
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// construct our exercise schema
const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/* instantiate a new Schema and store it in exerciseSchema variable.
 
   1. Declare a username property on the schema object
          - Property's value will specify the data type of that property
            - Property's value will specify if it is required
   2. Declare a description property
            - Property's value will specify the data type of that property
            - Property's value will specify if it is required
   3. Declare a duration property
            - Property's value will specify the data type of that property
            - Property's value will specify if it is required
   4. Declare a date property
            - Property's value will specify the data type of that property
            - Property's value will specify if it is required
 
   Pass in a timestamps option object as second arg to new Schema and set
   it to true. Now, whenever your document is updated, a createdAt and
   updatedAt property will auto be added to your schema.
 
*/

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
