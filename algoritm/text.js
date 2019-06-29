const fs = require('fs');

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
    }
    console.log(map2);
    console.log(map2[max]);