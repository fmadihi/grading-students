'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function gradingStudents(grades) {
    // Write your code here
    
    for(var n in grades){
        if(grades[n]>=38){
            var m=grades[n];
            m=m%10;
            if(m>5 && 10-m<3){
                var z=10-m;
                grades[n]=grades[n]+z;
            }
            else if(m<5 && 5-m<3){
                var z=5-m;
                grades[n]=grades[n]+z;
            }
        }
    }
    return grades;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
