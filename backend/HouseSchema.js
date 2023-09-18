const mongoose = require('mongoose')

const houseListingSchema = new mongoose.Schema({
  streetAddress: String,
  suburb: String,
  type: String,
  bedrooms: Number,
  year: Number,
  price: Number,
  hasAirCon: Boolean,
  bathrooms: Number,
  carports: Number,
  hasCarpet: Boolean,
  hasFireplace: Boolean,
  isNorthFacing: Boolean,
  hasUnderfloorHeating: Boolean,
  isAnimalFriendly: Boolean,
  hasHotTub: Boolean,
  hasHealthyHomeStandard: Boolean,
  topDownView: Buffer,
  insideLivingRoom: Buffer,
  mapImage: Buffer,
})

const HouseListing = mongoose.model('HouseListing', houseListingSchema)

module.exports = HouseListing
