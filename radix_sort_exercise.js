/*

  Implement a radix sort in a function called radixSort.
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.
  
  If you need help understanding radix sort, see https://btholt.github.io/four-semesters-of-cs-part-two/radix-sort
  
  You can visualize each iteration of bucketing and emptying of buckets by calling snapshot(array) at the end of each
  loop. It'll tell you how many iterations you've gone through where it says `Comparisons` at the top.
  
  You can see what happens with bigger numbers if you change the first unit test to be `xit(...)` and the second unit
  test to be `it`.

*/
var xx = 0;

function getDigit(number, place, longestNumber) {
    const string = number.toString();
    const size = string.length;

    const mod = longestNumber - size;
    // console.log('number:',number,'place:', place, 'longestNumber:',longestNumber)
    // console.log('stringIndex:',string[place - mod] , ', place - mod = ', place - mod);
    return string[place - mod] || 0;
}

function findLongestNumber(array) {
    let longest = 0;
    for (let i = 0; i < array.length; i++) {
        const currentLength = array[i].toString().length;
        longest = currentLength > longest ? currentLength : longest;
    }
    return longest;
}

function radixSort(array) {
    const longestNumber = findLongestNumber(array);

    const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays

    for (let i = longestNumber - 1; i >= 0; i--) {
        while (array.length) {
            xx++;
            const current = array.shift();
            buckets[getDigit(current, i, longestNumber)].push(current);
            // console.log(buckets);
        }

        for (let j = 0; j < 10; j++) {
            while (buckets[j].length) {
                xx++;
                // console.log(buckets[j]);
                //   console.log(array);
                array.push(buckets[j].shift());
            }
        }
    }

    return array;
}

// unit tests
// do not modify the below code
const nums = [20,51,3,801,415,62,4,17,19,11,1,100,1244,104,944,854,34,3000,3001,1200,633];
const ans = radixSort(nums);
//   expect(ans).toEqual([1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944, 1200, 1244, 3000, 3001]);

console.log(xx);