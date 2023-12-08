import re

with open("/Users/jamestang/Documents/Github/Advent-of-Code/James/Day4/input.txt") as fin:
    lines = fin.read().strip().split("\n")


n = len(lines)
copies = [[] for _ in range(n)]

for i, line in enumerate(lines):
    parts = re.split("\s+", line)
    idx = parts.index("|")
    winning = list(map(int, parts[2:idx]))
    ours = list(map(int, parts[idx+1:]))

    # print("winning: ", winning)
    # print("ours: ", ours)

    score = 0
    for num in ours:
        if num in winning:
            score += 1


    # print("copies: ",copies)
    for j in range(i+1, i+score+1):
        copies[i].append(j)

    # print("=============================")

print("copies: ",copies)

score = [1 for _ in range(n)]

# print(score)
# print("============")
for i in range(n-1, -1, -1):
    # print(i)
    # print("scores: ", score)
    for j in copies[i]:
        # print("scores: ", score)
        # print("copies: ", copies)
        print("copies[i]: ", copies[i])
        print("j: ", j)
        print("score[i]: ", score[i])
        print("score[j]: ", score[j])
        score[i] += score[j]
        print("scores_inner: ", score)

    # print("=========================")

print(sum(score))