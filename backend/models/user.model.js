// require in mongoose module and extract out Schema constructor from mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

// make a document by having mongoose compile a model based on our userSchema
const User = mongoose.model('User', userSchema);

// export our User document to make it public
module.exports = User;

/* instantiate a new Schema and store it in userSchema variable.
 
 1. Define a username property on the schema object
 2. Property's value will specify the data type of that property
 3. Property's value will specify if it's required
 4. Property's value will specify if it's unique
 5. Property's value will trim off any white space
 6. Property's value will specify the minimum length of input
 
 Pass in a timestamps option object as second arg to new Schema and set
 it to true. Now, whenever your document is updated, a createdAt and
 updatedAt property will auto be added to your schema.
 
*/
