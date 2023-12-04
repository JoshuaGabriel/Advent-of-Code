
// File input
const fs = require('fs')
const path = require('path')
const { parseJsonText } = require('typescript')


// Total
var sum_possible = 0

// Conditions
var red = 12
var green = 13
var blue = 14

var red_h = 0
var blue_h = 0
var green_h = 0
var power_c = 0

// var condition = false


// Function to read file and process each line
function processFile(filePath,sum_possible,power_c) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        // Splitting the file content into lines
        // Whatever the fuck this means
        const lines = data.split(/\r?\n/);
        var failed = false;
        // console.log(lines);
        // Looping through each line
        lines.forEach((line, index) => {
            // console.log(line);
            var games = line.split(":")
            var game = games[0]
            var sets = games[1].split(";")
            // console.log(game)
            console.log(sets)
            // console.log(sets[0])

            for (let i = 0; i < sets.length; i++){
                var set = sets[i]
                var set_test = set.split(',')
                // console.log(set)
                // console.log(set_test)
                for (let j = 0; j < set_test.length; j++){
                    var color = set_test[j].trimStart().split(" ")
                    // console.log("color:",  color)
                    if (color[1] == "red"){
                        // console.log("Yes, this is red")
                        // Failed
                        if (color[0] > red){
                            // console.log(game.split(" ")[1])
                            // sum_possible += parseInt(game.split(" ")[1]) // this is so bad omfg
                            failed = true
                        }
                        if (parseInt(color[0]) > red_h){
                            red_h = parseInt(color[0])
                            console.log("red: ", red_h)
                        }
                    }
                    if (color[1] == "blue"){
                        // console.log("Yes, this is blue")
                        // Failed
                        if (color[0] > blue){
                            // sum_possible += parseInt(game.split(" ")[1]) // this is so bad omfg
                            failed = true
                        }
                        if (parseInt(color[0]) > blue_h){
                            blue_h = parseInt(color[0])
                            console.log("blue: ", blue_h)
                        }
                    }
                    if (color[1] == "green"){
                        // console.log("Yes, this is green")
                        // Failed
                        if (color[0] > green){
                            // sum_possible += parseInt(game.split(" ")[1]) // this is so bad omfg
                            failed = true
                        }
                        if (parseInt(color[0]) > green_h){
                            green_h = parseInt(color[0])
                            console.log("green: ", green_h)
                        }
                    }
                    // console.log(sum_possible)
                }
                // console.log(sets[i])
            }
            // console.log(failed)
            // console.log("=====================================")
            temp = red_h * blue_h * green_h
            console.log("temp: ", temp)
            power_c += temp
            red_h = 0
            blue_h = 0
            green_h = 0

            if (failed == false){
                sum_possible += parseInt(game.split(" ")[1])

            }else if (failed == true){
                failed = false
            }
            console.log("=====================================")
            // console.log(`Line ${index + 1}: ${line}`);
            // Process each line as needed
        });
        console.log(power_c)
        console.log(sum_possible)
    });
    // console.log(sum_possible)
}
// 65122 -> part 2

// Replace 'yourfile.txt' with the path to your file
const filePath = path.join(__dirname, 'input.txt');
processFile(filePath,sum_possible,power_c);



