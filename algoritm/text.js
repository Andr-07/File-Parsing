const fs = require('fs');


let number = 5; // Number of strings

  function parse(filename) {
      let fs = require('fs');
      let text = fs.readFileSync(filename).toString().split('\n');
    return text;
    }
    
    let arr = parse("text.txt");

    let map = {};
    let arr2 =[];
    let max = 0;
    let map2 = {};

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++
        }  else {
            map[arr[i]] = 1;
        }     
    }

    for (key in map) {
        map2[map[key]] = key;
        if (map[key]>max) {
            max = map[key]
        }
        arr2.push(map[key])
    }

    arr2.sort(function(a,b){
        return (b-a);
    });

    let arr3 = arr2.slice(0,number)

    for (let i = 0; i < arr3.length; i++) {
        console.log(map2[arr2[i]])        
    } 