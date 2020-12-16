// install fs module
let fs = require('fs');
// read in the file
fs.readFile('./cars.json', (err, data) => {
    if (err) return console.log('Invalid data');
    let cars = JSON.parse(data);
    // change property's name of objects using map
    let carList = cars.map(car => {
        return {
            productId: car.id,
            productName: car.make,
            category: car.type
        };
    });
    // change object of array into JSON file
    const result = JSON.stringify(carList);
    // create JSON file called products.json
    fs.writeFile('products.json', result, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});


