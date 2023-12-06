

from os import path


class Solution:

    def __init__(self):

        self.input = []

        with open(path.join(path.dirname(__file__), "input.txt")) as f:
            for line in f:
                line = line.strip()
                self.input.append(line)

    def answer(self):
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


if __name__ == "__main__":
    sol = Solution()
    sol.answer()
