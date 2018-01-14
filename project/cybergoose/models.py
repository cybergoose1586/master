from django.db import models

# Create your models here.
class Substance(models.Model):
    name = models.CharField(max_length=30)
    сSolid = models.FloatField(default=0)
    cLiquid = models.FloatField(default=0)
    QCond = models.FloatField(default=0)
    TCond = models.FloatField(default=0)
    THeat = models.FloatField(default=0)
    QHeat = models.FloatField(default=0)

    def __str__(self):
        return ' '.join([
            self.name,

            str(self.cSolid),
        ])

class Atmosphere(models.Model):
    pAtm = models.FloatField(default=0)
    TAtm = models.FloatField(default=0)

class User(models.Model):
    Name = models.CharField(max_length=100)
    Surname = models.CharField(max_length=100)
    Mail = models.CharField(max_length=150)
    Login = models.CharField(max_length=100)
    Password = models.CharField(max_length=150)
    Category = models.CharField(max_length=2)

    def __str__(self):
        return ' '.join([
            self.name,

            str(self.Surname),
        ])


class Experiments(models.Model):
    ValuesSubstance = models.FloatField(default=0)
    User = models.CharField(max_legth=100)
    T1 = models.FloatField(default=0)
    T2 = models.FloatField(default=0)
    Nheater = models.FloatField(default=0)
    KPDheater = models.FloatField(default=0)