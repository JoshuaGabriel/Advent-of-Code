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
        # print(res)

        sumOfCards = len(res)

        # print(sumOfCards)

        def tally(n):

            queue = [n]
            # print("queue: ",queue)
            curTotal = 0
            while (queue):
                cur = queue.pop()
                # print("queue: ", queue)
                # print("cur: ", cur)
                curTotal += len(res[int(cur)-1])
                # print("curTotal: ", curTotal)
                for card in res[int(cur)-1]:
                    # print("cardy: ", card)
                    queue.append(card)

                # print("=============================")

            return curTotal
        
        # print("res: ", res)


        for setOfCard in res:
            for card in setOfCard:
                # print("card: ", card)
                sumOfCards += tally(card) + 1

        print(sumOfCards)


if __name__ == "__main__":
    sol = Solution()
    sol.answer()