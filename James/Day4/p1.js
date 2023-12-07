
// File input
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'input.txt');
var cnt_card = 0
var cnt_total = 0

// Function to read file and process each line
// Just power of 2 -1 eh?
let points = {
    "1":1,
    "2":2,
    "3":4,
    "4":8,
    "5":16,
    "6":32,
    "7":64,
    "8":128,
    "9":256,
    "10":512
}

fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    
    const lines = data.split(/\r?\n/);
    // let card_cnt = lines.length;
    

    lines.forEach((line,index) => {
        console.log(line)
        var card = line.split(":");
        var nums = card[1].trim().split("|");

        var win_nums = nums[0].trim();
        win_nums = win_nums.split(" ");
        win_nums = win_nums.filter(entry => /\S/.test(entry));
        var gamble = nums[1].trim();
        gamble = gamble.split(" ").filter(entry => /\S/.test(entry));
        // console.log(card)
        // console.log(nums)
        // console.log(win_nums)
        // console.log(gamble)
        // console.log("=======================")
        // console.log(win_nums.length)
        for (let i = 0; i < win_nums.length; i++){
            // console.log("current: ", win_nums[i])
            // console.log('39' in gamble)
            if (gamble.includes(win_nums[i])){
                console.log(win_nums[i], "true")
                console.log("cnt_card: ", cnt_card)
                cnt_card++
            }
        }
        // console.log("card_cnt: ",cnt_card)
        if(cnt_card != 0){
            cnt_total += 2**(parseInt(cnt_card)-1)
        }else{
            cnt_total += 0
        }
        console.log("cnt_total: ", cnt_total)
        console.log("======================")
        cnt_card = 0

    })
    console.log(cnt_total)

});





