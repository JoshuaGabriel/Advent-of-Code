
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
                perm.push(curCard)
                // console.log("perm: ",perm)
                // console.log("current tally: ", tally)
                curCard += 1
                // tally += 1
            }
        }
        res.push(perm)

        var sumOfCards = res.length

        // console.log("sumOfCards: ", sumOfCards)

    })

    console.log("res: ", res)
    var score_track= Array(lines.length).fill(1)

    console.log("score_track: " , score_track)

    for (let k = lines.length-1; k > -1; k--){
        for (let j of res[k]){
            score_track[k] += score_track[j]
        }
    }

    var score = 0
    for (let i in score_track){
        score += score_track[i]
    }
    console.log(score)
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
