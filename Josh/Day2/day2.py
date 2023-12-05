from os import path


class Solution:

    def __init__(self):

        self.input = []

        with open(path.join(path.dirname(__file__), "input.txt")) as f:
            for line in f:
                line = line.strip()
                self.input.append(line)

    def answer(self):

        cubeLimit = {"red": 12, "green": 13, "blue": 14}
        sumOfID = 0
        for line in self.input:
            gameID = line.split(":")[0].split(" ")[1]
            valid = True
            curGame = line.split(":")[1].split(";")

            maxRed = 0
            maxGreen = 0
            maxBlue = 0

            for game in curGame:
                curCube = game.split(",")

                totalRed = 0
                totalGreen = 0
                totalBlue = 0

                for cube in curCube:

                    cur = cube.strip().split(" ")
                    num_of_cube = cur[0]
                    color_of_cube = cur[1]

                    if (color_of_cube.lower() == "red"):
                        totalRed += int(num_of_cube)
                    if (color_of_cube.lower() == "blue"):
                        totalBlue += int(num_of_cube)
                    if (color_of_cube.lower() == "green"):
                        totalGreen += int(num_of_cube)

                if (totalRed > 12 or totalGreen > 13 or totalBlue > 14):
                    valid = False

                maxRed = max(totalRed, maxRed)
                maxGreen = max(totalGreen, maxGreen)
                maxBlue = max(totalBlue, maxBlue)

            sumOfID += maxRed*maxBlue*maxGreen

        print(sumOfID)


if __name__ == "__main__":
    sol = Solution()
    sol.answer()
