import re

def add_egg(s):
    temp = list(s)
    print(temp)
    for i in range(0,len(temp)):
        if(re.match('[aeiuo]',temp[i]) != None):
            temp[i] = "egg"+temp[i]
        
    return "".join(temp)


def remove_egg(s):
    temp = s.split()
    for i in range(len(temp)):
        if("eggegg".lower() in temp[i].lower()):
            temp[i] = re.sub('eggegg','egg',temp[i])
        else:
            temp[i] = re.sub("egg",'',temp[i])
        
    return " ".join(temp)

add_egg("Hiii how are you eggegg")