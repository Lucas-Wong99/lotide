# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucaswong17/lotide`

**Require it:**

`const _ = require('@lucaswong17/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: A function that counts the amount a single letter in a string 
* `countOnly`: A function that takes two arrays as parameters and counts specific letters in 1st array
* `head`: A function that returns the first element of an array
* `tail`: A function that returns everypart of the array except the first index
* `middle`: A function that returns the middle number/numbers of an array
* `eqArrays`: A function that returns true/false depending if the given arrays are stictly equal
* `eqObjects`: A function that returns true/false depending if the given objects are equal(non-strict)
* `findKey`: A function that takes a stopping conditon callback function and loops through an object 
* `findKeyByValue`: A function that finds a key of an objects property by its value
* `flatten`: A function that takes away layers of a nested array 
* `letterPositions`: A function that returns the index of each letter in a given string
* `map`: A map like function that loops through an array and takes a callback function
* `takeUntil`: A function that loops through an array an stops when a callback functions says to stop
* `without`: A function that removes determined elements from a given array 