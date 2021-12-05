# Random Numbers
## Description
A tool to generate a certain number of random numbers in an array

## Getting Started
### Installation
...

## Usage

### settings (optinal)
```JS
{
    quantity : int // default:  1
    sort : string 'asc'|'desc' // // default:  'asc'
    uniqe : boolean // default true
    min : int // default 0 
    max : int // default 99
    detail : boolean // default false 
}
```

### Execute

```JS
// optional settings
const settings = {
    quantity: 5,
    sort: 'asc',
    min: 11,
    max: 100,
    uniqe: true,
    detail: false
};
const numbers = randomNumbers(settings);
const numbers2 = randomNumbers(settings);

console.log(numbers);
console.log(numbers2);
```

### Output
````JS
// Without Details
[ 11, 17, 23, 29, 94 ]

// With Details
{
  selected: [ 13, 14, 16, 22, 25 ],
  notSelected: [
    11, 12, 15, 17, 18, 19,
    20, 21, 23, 24, 26, 27,
    28, 29
  ],
  loops: 5
}
````

## License
Distributed under the MIT License. See <u>LICENCE.txt</u> for more information.

## Contact
hallo@jpbehrens.de