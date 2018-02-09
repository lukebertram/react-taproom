# React Taproom

#### A React application for tracking details about the kegs on tap at a taproom, February 9th, 2018

#### By **Luke Bertram**

## Description

This project uses React to build a component-based application for tracking details about the kegs on tap at a local taproom. Currently, this is just a static layout for the project. It will eventually allow for users to add, edit, and/or remove kegs.

### Component Tree
![Component Tree](component-tree.jpg)

### Notes
**Unforeseen issue No. 1: Angular tap room would not run.**

My initial response to the prompt provided was to clone my Angular taproom project from github and take a look at it. After running `npm install`, I tried to run `ng serve` but the process stalled out when it could not find JQuery in the node_modules. I installed JQuery using `npm i jquery` and met with another error. The build process now could not find an installation of 'Tether' in the node_modules folder. I couldn't remember ever having to install tether for this project (or any angular project) in the past, but installing this project dependency seemed to be the last piece of the puzzle. Afterwards my Angular version of the taproom compiled and served properly.

### Requirements From Angular Taproom Project

- [ ] As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).

- [ ] As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)

- [ ] As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.

- [ ] As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).

- [ ] As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.

- [ ] As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.

- [ ] As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.

- [ ] As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.
