'use strict';

console.log('Welcome curious fellow programmer!');

const MAP_HEIGHT = 670;
const MAP_WIDTH = 835;
const MAX_DECIMAL_PERCENTAGE_AREA = 0;

let areas = document.getElementById('rome2map').getElementsByTagName('area');
let domMapHeight = document.getElementsByClassName('map-image')[0]['height'];
let domMapWidth = document.getElementsByClassName('map-image')[0]['width'];

for (let i = 0; i < areas.length; i++) {
    areas[i]['coords'] = calcPercent(areas[i]['coords']);
}

function calcPercent(coords) {
    let coordValues = coords.split(',');
    
    for(let x  = 0; x < coordValues.length; x=x+2) {
        coordValues[x] = ((domMapHeight * coordValues[x]) / MAP_HEIGHT);
        coordValues[x + 1] = ((domMapWidth * coordValues[x + 1]) / MAP_WIDTH);
    }

    return coordValues.join(',');
}