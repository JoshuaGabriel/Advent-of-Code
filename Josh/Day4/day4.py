
from os import path


class Solution:

    def __init__(self):

        self.input = []

        with open(path.join(path.dirname(__file__), "input.txt")) as f:
            for line in f:
                line = line.strip()
                self.input.append(line)

    def answer(self):

        res = []
        for i, line in enumerate(self.input):
            winning = line.split(":")[1].split("|")[0].strip().split(" ")
            myCard = line.split(":")[1].split("|")[1].strip().split(" ")
            perm = []
            curCard = i+1
            for item in myCard:
                if (item == ""):
                    continue
                if (item in winning):
                    perm.append(curCard+1)
                    curCard += 1
            res.append(perm)
        print(res)

        sumOfCards = len(res)

        def tally(n):
            queue = [n]
            curTotal = 0
            while (queue):
                cur = queue.pop()
                curTotal += len(res[int(cur)-1])
                for card in res[int(cur)-1]:
                    queue.append(card)

            return curTotal

        for setOfCard in res:
            for card in setOfCard:
                sumOfCards += tally(card) + 1

        print(sumOfCards)


if __name__ == "__main__":
    sol = Solution()
    sol.answer()
