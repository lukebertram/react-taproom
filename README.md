### Notes
**Unforeseen issue No. 1: Angular tap room would not run.**

My initial response to the prompt provided was to clone my Angular taproom project from github and take a look at it. After running `npm install`, I tried to run `ng serve` but the process stalled out when it could not find JQuery in the node_modules. I installed JQuery using `npm i jquery` and met with another error. The build process now could not find an installation of 'Tether' in the node_modules folder. I couldn't remember ever having to install tether for this project (or any angular project) in the past, but installing this project dependency seemed to be the last piece of the puzzle. Afterwards my Angular version of the taproom compiled and served properly.
