# Grocery manager

> A Vue.js project

## Task Requirement
```
We have a very nice kitchen in our office, which is used in high frequency by our colleagues to prepare delicious meals.
We have two fridges and each colleague can put his groceries in either of the fridges. 
Sometimes it happens, that I forget which groceries I put in the fridge and when I go to buy new groceries for the next delicious sandwich, I am not sure whether I still have some of the ingredients in the fridge or whether I used them up or they expired."
"In order to solve this problem, we want to develop a web application with a list of my groceries in the fridge.
As an employee of Ambient Innovation, I can visit this web application and maintain my own list of my groceries in the shared fridges. 
Below you find a description of the required features:"
User Stories
• After I bought groceries in the supermarket, I want to add each of the purchased items to my personal list of groceries, that are currently in the fridge. 
For each item I want to enter a name (e.g. ""bread"", ""cheese"", ""butter""), and in which fridge I put it (""Fridge 1"" or ""Fridge 2""). 
When I enter an item and another item with the same name already exists in the list, I do not want to create an additional entry.
Instead I want to increase the amount of this item (e.g. ""bread (2x)"")."
• I want to see a list of all of my items that are currently in either of the fridges. For each item I want to see the name.
• I want to be able to mark an item as ""used up"" after I have used all of it. If I have more than one of this item, the amount should be decreased. 
If I only have one, the item should be deleted from the list."
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
