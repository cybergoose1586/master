from cybergoose.models import Substance


class Obj:
    key = 0
    name = 'null'
    def __init__(self,key,name):
        self.key = key
        self.name = name
    def __str__(self):
        return str(self.key) + " " + self.name


def names():
    mas = []

    for i in Substance.objects.values():
        mas.append(Obj(i['Key'], i['name']))
    return mas




