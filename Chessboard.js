/* Write a program that creates a string that represents an
8×8 grid, using newline characters to separate lines. At each 
position of the grid there is either a space or a "#" character. 
The characters should form a chessboard. Passing this string to 
console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding 
size = 8 and change the program so that it works for any size, outputting 
a grid of the given width and height. */

/*let straightSavageProgrammer = " # # # #" 
let thisWontSolveTheProblem = "# # # # "
for (let i = 0; i < 4; i++) {
    console.log(straightSavageProgrammer + "\n" + thisWontSolveTheProblem);
};*/


let line = ''
let x = ' '
let number = 7
let grid = ''

while (line.length < number) {
    line = line + x;
    if (x == ' ') {
        x = '#'
    } else if (x == '#') {
        x = ' '
    }
}
console.log(line)