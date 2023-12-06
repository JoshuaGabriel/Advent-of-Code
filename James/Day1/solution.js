
// File input
const fs = require('fs')
const path = require('path')





var l = 0
var r = 0
var t = 0
var total = 0


// Function to read file and process each line
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        var lefty = ""
        var righty = ""

        let nums_to_words = {
            "one":"1",
            "two":"2",
            "three":"3",
            "four":"4",
            "five":"5",
            "six":"6",
            "seven":"7",
            "eight":"8",
            "nine":"9",
            "zero": "0"
        }
        // Splitting the file content into lines
        // Whatever the fuck this means
        const lines = data.split(/\r?\n/);
        var failed = false;
        // console.log(lines);
        // Looping through each line
        lines.forEach((line, index) => {
            // console.log(line)
            for (let i = 0; i < line.length; i++){
                // console.log(line[i])
                // console.log("===================================")
                // If line[i] is convertible to int
                if (parseInt(line[i])){
                    l = line[i]
                    // console.log(l)
                    break
                }else{
                    // If line[i] isn't convertible to int
                    // need to find if it fits in "letter"
                    lefty = lefty.concat(line[i])

                    // console.log(lefty)
                    // console.log(lefty)
                    // break
                }
                // Check if lefty is convertible to int
                filter_num = converty(lefty)


                // Found a number
                if (filter_num != ""){
                    // console.log(filter_num)
                    lefty = ""
                    // console.log("hello world")
                    l = nums_to_words[filter_num]
                    // Break out of loop cuz done
                    
                    break
                }


            }
            for (let j = line.length-1; j >= 0; j--){
                // console.log(j)
                // console.log(line[j])


                if (parseInt(line[j])){
                    r = line[j]
                    break
                }else{
                    // how to add in reverse order
                    righty = line[j] + righty
                    // console.log(righty)
                }
                filter_num = converty(righty)


                // Found a number
                if (filter_num != ""){
                    righty = ""
                    // console.log("Hello world")
                    r = nums_to_words[filter_num]
                    // Break out of loop cuz done
                    break
                }
            }

            
            // console.log(l)
            // console.log(r)
            // console.log("================")
            t = parseInt(l.concat(r))
            total += t
            l = 0
            r = 0
            t = 0
            lefty = ""
            righty = ""
            // console.log(t)
        });
        console.log(total)

    });
    // console.log(sum_possible)
}

function converty(number){
    let nums_to_words = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "zero"
    ]
    // console.log(number)
    for (let w = 0; w < nums_to_words.length; w++){
        console.log(w)
        console.log(nums_to_words[w])
        console.log(number)
        if (number.includes(nums_to_words[w])){
            // console.log("converting nums to words")
            // console.log(w)
            return nums_to_words[w]
        }
    }
    // If can't match word
    return ""
}

// Replace 'yourfile.txt' with the path to your file
const filePath = path.join(__dirname, 'input.txt');
processFile(filePath);



