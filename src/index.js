import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './site-logo.svg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    // Use lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Use module function
    element.textContent = element.textContent + '\n' + myName('Cody');

    // Add 'hello' class
    element.classList.add('hello');

    // Add image
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    // Import XML
    console.log(Data);

    // Import CSV
    console.log(Notes);

    return element;
}

document.body.appendChild(component());