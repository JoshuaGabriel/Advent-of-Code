

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
        nums_to_word = {"one": 1, "two": 2, "three": 3, "four": 4,
                        "five": 5, "six": 6, "seven": 7, 'eight': 8, "nine": 9, "zero": 0}

        for line in self.input:
            l = 0
            r = len(line)-1

            left = -1
            right = -1

            leftFound = False
            rightFound = False

            left_word = ""
            right_word = ""

            while (not leftFound or not rightFound):

                if (not leftFound):

                    try:
                        left = int(line[l])
                        leftFound = True
                    except:
                        left_word = left_word + line[l]
                        l += 1
                    filtered_digit = self.brute_word_checker(left_word)

                    if (filtered_digit != ""):
                        left = nums_to_word[filtered_digit]
                        leftFound = True

                if (not rightFound):

                    try:
                        right = int(line[r])
                        rightFound = True
                    except:
                        right_word = line[r] + right_word
                        r -= 1

                    filtered_digit = self.brute_word_checker(right_word)
                    if (filtered_digit != ""):
                        right = nums_to_word[filtered_digit]
                        rightFound = True

            res += int(str(left) + str(right))
        print(res)

    def brute_word_checker(self, word):

        digit_word = ["one", "two", "three", "four",
                      "five", "six", "seven", 'eight', "nine"]

        for w in digit_word:
            if (w in word):
                return w
        return ""


if __name__ == "__main__":
    sol = Solution()
    sol.answer()
