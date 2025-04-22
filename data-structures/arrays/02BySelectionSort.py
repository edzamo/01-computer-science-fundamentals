def byBlueSort(list):
    print(list, "No sort")

    for i in range(len(list)):
        positionMin = i

        for j in range(i + 1, len(list)):
            if list[positionMin] > list[j]:
                positionMin = j
        list[i], list[positionMin] = list[positionMin], list[i]

    print(list, "sort")


listNumber = [10, 8, 21, 2, 23]
byBlueSort(listNumber)


