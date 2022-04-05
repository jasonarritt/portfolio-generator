const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});













// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//     }

//     console.log("============================================================");

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// }

// printProfileData(profileDataArgs);
