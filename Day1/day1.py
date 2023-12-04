

from os import path


class Solution:

    def __init__(self):

        self.input = []

        with open(path.join(path.dirname(__file__), "input.txt")) as f:
            for line in f:
                line = line.strip()
                self.input.append(line)

    def answer(self):
        """
        two pointer, left and right, traverse the string from start and end


        """

        res = 0  # sum of numbers

        for line in self.input:
            l = 0
            r = len(line)-1

            left = -1
            right = -1

            leftFound = False
            rightFound = False

            while (not leftFound or not rightFound):

                if (not leftFound):
                    try:
                        left = int(line[l])
                        leftFound = True
                    except:
                        l += 1
                if (not rightFound):
                    try:
                        right = int(line[r])
                        rightFound = True
                    except:
                        r -= 1

            res += int(str(left) + str(right))
        print(res)


if __name__ == "__main__":
    sol = Solution()
    sol.answer()
