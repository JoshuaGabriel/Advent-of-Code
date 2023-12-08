
// File input
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'input.txt');
var tally = 0

// Function to read file and process each line
// Just power of 2 -1 eh?


fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    
    const lines = data.split(/\r?\n/);
    // let card_cnt = lines.length;

    // console.log("lines: ", lines)
    

    var res = []
    var standby = []
    lines.forEach((line,index) => {
        // console.log(line)
        var card = line.split(":");
        var nums = card[1].trim().split("|");

        var win_nums = nums[0].trim();
        win_nums = win_nums.split(" ");
        win_nums = win_nums.filter(entry => /\S/.test(entry));
        var gamble = nums[1].trim();
        gamble = gamble.split(" ").filter(entry => /\S/.test(entry));
        
        var perm = []

        var curCard = index + 1

        for (let i = 0; i < win_nums.length; i++){
            // adding winning cards to list
            if (gamble.includes(win_nums[i])){
                // console.log(curCard)
                perm.push(curCard+1)
                // console.log("perm: ",perm)
                // console.log("current tally: ", tally)
                curCard += 1
                tally += 1
            }
        }
        res.push(perm)

        var sumOfCards = res.length

        // console.log("sumOfCards: ", sumOfCards)

    })
    // console.log(cnt_total)

    // console.log("res: ", res)
    standby = arr_red(res)
    // console.log(standby)


    // Array spread
    res = [...standby]
    // console.log("res: ", res)
    
    // console.log(res[0])

    standby = []

    // console.log("res: ", res)
    // console.log("standby: ", standby)

    // First run done

    // Rest of the iteration
    // while(standby != [] && res !=[]){
    //     for (let i = 0; i < res.length; i++){
            
    //     }
    // }
    // console.log(win_check(lines, res[2]-1))
    // console.log("your momma fat")
    var counter = 0

    tally += lines.length

    // console.log(tally)
    while(res.length !== 0){
        for (let j = 0; j < res.length; j++){
            // console.log("alsdkfjasl;kfdjasl;dkfjas")
            standby.push(win_check(lines, res[j]-1))
        }
        standby = arr_red(standby)
        res = [...standby]
        // console.log("standby: ",standby)
        // console.log("res: ", res)
        standby = []
        // break
        console.log("counter: ", counter)
        counter++
    }

    // console.log(standby)

    console.log("tally: ", tally)



});


function arr_red(res){
    res = res.reduce((a, cur) => {
        if (cur.length > 0){
            return a.concat(cur)
        }
        return a
    }, []);
    return res
}

function win_check(lines,i){
    // console.log("win_check here")
    var card = lines[i].split(":");
    var nums = card[1].trim().split("|");

    var win_nums = nums[0].trim();
    win_nums = win_nums.split(" ");
    win_nums = win_nums.filter(entry => /\S/.test(entry));
    var gamble = nums[1].trim();
    gamble = gamble.split(" ").filter(entry => /\S/.test(entry));
    var perm = []

    var curCard = i + 1

    for (let i = 0; i < win_nums.length; i++){
        // console.log("===================")
        // adding winning cards to list
        if (gamble.includes(win_nums[i])){

            // console.log(curCard)
            perm.push(curCard+1)
            // console.log("perm: ",perm)
            // console.log("current_tally: ", tally)
            tally += 1
            curCard += 1
        }
    }
    return perm
}


// ```
// Plan: 
// Standby queue
// 1. Loop through them once... to get the basic queue of cards
// After Card 1 queue: [2, 3, 4, 5]
// After Card 2 queue: [2, 3, 4, 5], [3, 4]
// ...
// After Card 6 queue: [2, 3, 4, 5], [3, 4], [4, 5], [5], [], []

// 2. Combine into big queue:
// [2, 3, 4, 5, 3, 4, 4, 5, 5]

// 3. Loop through said queue and repeat 1. and add the winning cards to a standby queue

// 4. set ready queue to standby queue

// 5. repeat until standby and ready are both empty
// ```




