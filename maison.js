const yaml = require('js-yaml');
const fs   = require('fs');

const text = fs.readFileSync('maison.yml', 'utf8')
const maison = yaml.load(text);
console.log(maison);
console.log(maison.wcc_house.date_de_construction)
console.log(maison.wcc_house.address)