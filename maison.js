console.log("Welcome in wcc'house")
const yaml = require('js-yaml');
const fs   = require('fs');

const text = fs.readFileSync('maison.yml', 'utf8')
const house = yaml.load(text);
    //write information in command is possible if you respect syntaxe
    //it's necessary identify absolute path
console.log("building built in :", house.wcc_house.construction_date)  
console.log("the official address is :");                              
console.log(house.wcc_house.address);
    // what's the difference of the functions's names like : let and const?
const carsportals = house.wcc_house.access.carsportals.principal + house.wcc_house.access.carsportals.secondary
let drawers = house.wcc_house.rooms.entrance.entrance_console.drawers + house.wcc_house.rooms.kitchen.kitchen_furniture.tall_cabinet.drawers
    // how to shorten the function to be more easy writing and reading?
console.log("the wcc's building has", carsportals, "carportals,", "the wcc's house has", drawers, "drawers")              
