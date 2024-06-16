const { Schema, model } = require('mongoose');

const collectSchema = new Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  categories: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Category' 
  }]
});

const Collection = model('Collect', collectSchema);

module.exports = Collection;