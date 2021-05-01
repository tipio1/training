console.log("Welcome in wcc'house")
const yaml = require('js-yaml')
const fs   = require('fs')

const text = fs.readFileSync('maison.yml', 'utf8')
const house = yaml.load(text)
    //write information in command is possible if you respect syntaxe
    //it's necessary identify absolute path
console.log("building built in :", house.wcc_house.construction_date)
console.log("the official address is :")                    
console.log(house.wcc_house.address)
    // what's the difference between let and const? 
const principal_carportal = house.wcc_house.access.carsportals.principal
const secondary_carportal = house.wcc_house.access.carsportals.secondary
const carsportals = principal_carportal + secondary_carportal
let drawers = house.wcc_house.rooms.entrance.entrance_console.drawers + house.wcc_house.rooms.kitchen.kitchen_furniture.tall_cabinet.drawers
    // how to shorten the function to be more easy writing and reading?
console.log("the wcc's building has", carsportals, "carportals,", "the wcc's house has", drawers, "drawers")
let electrical_outlets = house.wcc_house.rooms.kitchen.electrical_outlets + house.wcc_house.rooms.living_room.electrical_outlets + house.wcc_house.rooms.office.electrical_outlets
console.log(electrical_outlets)