/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

let x = "#"
for (let i = 0; i < 7; i++) {
    console.log(x);
    x = x + "#";
}

let z = "#";
while (z.length < 8) {
  console.log(z);
  z = z + "#";
}