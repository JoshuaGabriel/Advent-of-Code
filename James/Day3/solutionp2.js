
// File input
const fs = require('fs')
const path = require('path')

var cnt = 0

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
        let goods = [];

        for (let i = 0; i < col_length; i++) {
            let row = [];
            for (let j = 0; j < row_length; j++) {
                row.push([]);
            }
            goods.push(row);
        }

        var p2_ans = 0

        for (const [i, line] of lines.entries()) {
            // console.log(index, value);
            // console.log("This is i at the start of the for loop: ", i)

            var start = 0

            var j = 0


            // Takes care of row, checking number
            while (j < row_length){
                start = j
                var num = ""
                
                // if (line[j] == '0'){
                //     console.log("Hello this is 0")
                //     console.log(parseInt(line[j]))
                //     console.log(j < row_length)
                // }
                while (j < row_length && parseInt(line[j]) || line[j] == '0'){
                    // if (parseInt(line[j])== 0 || line[j] == "0"){
                    //     console.log("Hello, this is 0")
                    // }
                    // console.log("current char: ", line[j])
                    num += line[j]
                    // console.log("current num: ", num)
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

                // (start - 1) top/bottom left corner of number
                // (j+1) top/bottom right corner of number
                // i is column num of lines, starting val is 0
                // check num_prev and num_next since i is basically y-coordinate
                is_symbol(i,start-1,lines,num,goods) || is_symbol(i,j,lines,num,goods)

                for (let k = start-1; k < j+1; k++){
                    // console.log("i am here")
                    // console.log(start-1)
                    // console.log(j+1)
                    // Need a condition here...
                    // i is basically the y-axis here.. OOOH IM HAVING THE MOMENT OKOK I GET IT NOW
                    is_symbol(i-1,k,lines,num,goods) || is_symbol(i+1,k,lines,num,goods)

                }
            }

        }
        for (let g = 0; g < col_length; g++){
            for (let z = 0; z < row_length; z++){
                var nums = goods[g][z]
                if (lines[g][z] == '*' && nums.length ==2){
                    cnt++
                    // console.log(nums)
                    p2_ans += (nums[0] * nums[1])
                }
            }
        }
        console.log(p2_ans)
        console.log(cnt)


    });

}

function is_symbol(i, j,lines,num,goods){
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


    // Checking for stars
    if (lines[i][j] == '*'){
        // console.log(num)
        goods[i][j].push(num)
    }
    return (lines[i][j] != ".") && !(parseInt(lines[i][j]))
}



// Replace 'yourfile.txt' with the path to your file
const filePath = path.join(__dirname, 'input.txt');
processFile(filePath);



