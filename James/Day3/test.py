with open("/Users/jamestang/Documents/Github/Advent-of-Code/James/Day3/input.txt") as fin:
    data = fin.read()
    lines = data.strip().split("\n")

n = len(lines)
m = len(lines[0])

cnt = 0


goods = [[[] for _ in range(m)] for _ in range(n)]
# print(goods)


def is_symbol(i, j, num):
    if not (0 <= i < n and 0 <= j < m):
        return False

    if lines[i][j] == "*":
        goods[i][j].append(num)
    return lines[i][j] != "." and not lines[i][j].isdigit()


ans = 0

for i, line in enumerate(lines):
    start = 0

    j = 0

    while j < m:
        start = j
        num = ""
        while j < m and line[j].isdigit():
            num += line[j]
            j += 1

        if num == "":
            j += 1
            continue

        num = int(num)

        # Number ended, look around
        # (start - 1) top/bottom left corner of number
        # (j+1) top/bottom right corner of number
        # i is column num of lines, starting val is 0
        # check num_prev and num_next since i is basically y-coordinate
        is_symbol(i, start-1, num) or is_symbol(i, j, num)

        for k in range(start-1, j+1):
            # lines_prev or lines_next check
            # i is basically the y-axis here.. OOOH IM HAVING THE MOMENT OKOK I GET IT NOW
            is_symbol(i-1, k, num) or is_symbol(i+1, k, num)

for i in range(n):
    for j in range(m):
        nums = goods[i][j]
        # print(nums)
        if lines[i][j] == "*" and len(nums) == 2:
            print(nums)
            cnt += 1
            ans += nums[0] * nums[1]

# print(ans)
# print(cnt)