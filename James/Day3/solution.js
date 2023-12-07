
// File input
const fs = require('fs')
const path = require('path')


// Function to read file and process each line
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        
        const lines = data.split(/\r?\n/);

        let col_length = lines.length
        let row_length = lines[0].length
        // console.log(col_length)
        // console.log(row_length)


        // console.log(lines[1][7])
        // console.log("======================")
        // lines.forEach((line, index) => {
            
        //     // console.log(line)
        // });

        var p1_ans = 0

        for (const [i, line] of lines.entries()) {
            // console.log(index, value);
            // console.log("This is i at the start of the for loop: ", i)

            var start = 0

            var j = 0


            // Takes care of row, checking number
            while (j < row_length){
                start = j
                var num = ""

                while (j < row_length && parseInt(line[j])){
                    num += line[j]
                    j++
                }

                if (num == ""){
                    j++
                    continue
                }
                // console.log(num)

                // Convert to num
                num = parseInt(num)

                // Finish checking number, look around number for symbols
                if (is_symbol(i,start-1,lines) || is_symbol(i,j,lines)){
                    p1_ans += num
                    continue
                }

                for (let k = start-1; k < j+1; k++){
                    // console.log("i am here")
                    // console.log(start-1)
                    // console.log(j+1)
                    // Need a condition here...
                    if (is_symbol(i-1,k,lines) || is_symbol(i+1,k,lines)){
                        p1_ans+= num
                        break
                    }
                }
            }

        }
        console.log(p1_ans)


    });

}

function is_symbol(i, j,lines){
    // console.log(0 <= i < lines.length)
    if (!((0 <= i && i < lines.length) && (0 <= j && j < lines[0].length))){
        return false
    }
    // console.log(lines)
    // console.log(i)
    // console.log(j)
    // console.log(lines[i][j])
    // var not_dot = (lines[i][j] != ".")
    // var is_digit = !(parseInt(lines[i][j]))

    return (lines[i][j] != ".") && !(parseInt(lines[i][j]))
}



// Replace 'yourfile.txt' with the path to your file
const filePath = path.join(__dirname, 'input.txt');
processFile(filePath);



