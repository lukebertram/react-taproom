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
