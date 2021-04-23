const yaml = require('js-yaml');
const fs   = require('fs');

const text = fs.readFileSync('maison.yml', 'utf8')
const house = yaml.load(text);
console.log(house);
console.log(house.wcc_house.construction_date)
console.log(house.wcc_house.address)