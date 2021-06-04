// Conditionnals

let temperature = 20;

console.log(temperature > 35);

// operators logiques : == (egalite), != (inegalite) > (sup), < (inf), >= (sup ou egal), <= (inf ou egal)

// operateurs binaires : && (and), || (or)

if (temperature >= 19 && temperature <= 21) {
    console.log('temperature is between 19 and 21');
}

if (temperature <= 19 || temperature >= 21) {
    console.log('temperature is outside 19 and 21');
}

if (temperature != 20) {
    console.log('temperature is different of 20')
}

console.log('avant', temperature);
if (temperature == 20) {
    console.log('apres', temperature);
    console.log('The temperature is 20');
}

if (temperature >= 20) {       // condition
    console.log("It's hot");
    if (temperature > 35) {       // condition
        console.log("It's very hot");     // execution if condition is true
    }
} else {
    console.log("It's cold");       // execution if condition is false
}


// if (...) { ... } else { ... }

// Find exemples of conditions:
// - returns "It's my son" if the variable name contains the name of your son

