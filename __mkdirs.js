const fs = require('fs');
const path = require('path');

const dirs = [
  'src/app/services',
  'src/app/components/studentlist',
  'src/app/components/studentadd',
];

dirs.forEach(d => {
  fs.mkdirSync(d, { recursive: true });
  console.log('Created:', d);
});
console.log('All directories created successfully!');
