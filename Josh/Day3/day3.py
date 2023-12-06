

from os import path


class Solution:

    def __init__(self):

        self.input = []

        with open(path.join(path.dirname(__file__), "input.txt")) as f:
            for line in f:
                line = line.strip()
                self.input.append(line)

    def part1(self):
        ROWS = len(self.input)
        COLS = len(self.input[0])

        total = 0
        visited = set()

        # return true if adjacent to symbol
        def bfs(r, c):

            around = [(r+1, c), (r+1, c-1), (r+1, c+1),
                      (r-1, c+1), (r-1, c), (r-1, c-1),
                      (r, c+1), (r, c-1)]

            for x, y in around:

                if (x >= ROWS or y >= COLS or (x, y) in visited or x < 0 or y < 0):
                    continue
                if (self.isSymbol(self.input[x][y])):
                    return True

        for r in range(ROWS):
            for c in range(COLS):
                if (self.isNum(self.input[r][c]) and (r, c) not in visited):
                    cur = ""
                    toVisit = []
                    for i in range(c, COLS):
                        if (not self.isNum(self.input[r][i])):
                            break
                        cur += self.input[r][i]
                        toVisit.append((r, i))
                        visited.add((r, i))

                    while (toVisit):
                        x, y = toVisit.pop()
                        if (bfs(x, y)):
                            total += int(cur)
                            break
        print(total)

    def isNum(self, n):

        try:
            int(n)
            return True
        except:
            return False

    def isSymbol(self, n):

        if (self.isNum(n)):
            return False
        elif (n == "."):
            return False
        return True

    def answer(self):
        ROWS = len(self.input)
        COLS = len(self.input[0])

        total = 0

        def bfs(r, c):

            res = 1
            visited = set()
            around = [(r+1, c), (r+1, c-1), (r+1, c+1),
                      (r-1, c+1), (r-1, c), (r-1, c-1),
                      (r, c+1), (r, c-1)]
            count = 0
            for x, y in around:

                if (x >= ROWS or y >= COLS or x < 0 or y < 0 or (x, y) in visited):
                    continue

                if (self.isNum(self.input[x][y])):
                    count += 1
                    l, r = y-1, y+1
                    num = self.input[x][y]
                    visited.add((x, y))
                    while (l >= 0 and self.isNum(self.input[x][l])):
                        num = self.input[x][l] + num
                        visited.add((x, l))
                        l -= 1
                    while (r < COLS and self.isNum(self.input[x][r])):
                        num = num + self.input[x][r]
                        visited.add((x, r))
                        r += 1
                    res = res * int(num)
            if (count == 2):
                return res
            return 0

        for r in range(ROWS):
            for c in range(COLS):
                if (self.input[r][c] == "*"):
                    total += bfs(r, c)

        print(total)


if __name__ == "__main__":
    sol = Solution()
    sol.answer()
