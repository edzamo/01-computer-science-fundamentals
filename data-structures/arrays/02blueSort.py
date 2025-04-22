def blueSort(list):
      print("The list no sort:", list)
      flag = False
      round=0


      while not flag:
        flag= True
        for index in range(len( list) -1):
          aux=0
          aux= list[index]
          if list[index] > list[index+1]:
              list[index], list[index+1] =  list[index+1],list[index]
              flag = False
          round +=1
      print("The list sort :", list ," number of round", round)
        

listNumber = [10, 8, 21, 2, 23]
blueSort(listNumber)     
    

  

