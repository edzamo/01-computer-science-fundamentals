def findKeyNumbers(list):
    
    minor = 0
    major = 0
    total = 0
    avg = 0
    if len(list)>=1:
        minor = list[0]
        major = list[0]
        total = list[0]
    
    for i in range(1, len(list)):
        total = total + list[i]
        if list[i] < minor:
            minor = list[i]
        if list[i]>major:
            major = list[i]
    
    if total == 0:
        avg = 0
    else:
        avg = total/len(list)
    print(f"menor: {minor}")
    print(f"mayor: {major}")
    print(f"promedio: {avg}")


findKeyNumbers([10.1, 21.9, 23, -4])