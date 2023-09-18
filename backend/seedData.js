const fs = require('fs')
const path = require('path')
const commander = require('commander')
const mongoose = require('mongoose')
const HouseListing = require('./HouseSchema')

commander
  .command('seedData')
  .description('Seed data into the HouseListings database')
  .action(async () => {
    try {
      await mongoose.connect('mongodb://my-mongodb:27017/HouseListings', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      const jsonData = JSON.parse(fs.readFileSync('houseData.json', 'utf8'))

      const propertiesList = jsonData.propertiesList

      for (const property of propertiesList) {
        if (property.topDownView) {
          property.topDownView = fs.readFileSync(
            path.join(__dirname, property.topDownView)
          )
        }
        if (property.mapImage) {
          property.mapImage = fs.readFileSync(
            path.join(__dirname, property.mapImage)
          )
        }

        await HouseListing.create(property)
      }

      console.log('Data seeded successfully.')
      mongoose.connection.close()
    } catch (error) {
      console.error('Error seeding data:', error)
    }
  })

commander.parse(process.argv)
