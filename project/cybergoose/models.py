from django.db import models


class Substance(models.Model):
    name = models.CharField(max_length=30)
    cSolid = models.FloatField(default=0)
    cLiquid = models.FloatField(default=0)
    QCond = models.FloatField(default=0)
    TCond = models.FloatField(default=0)
    THeat = models.FloatField(default=0)
    QHeat = models.FloatField(default=0)
    Key = models.FloatField(default=0)

    def __str__(self):
        return ' '.join([
            self.name,

            str(self.Key),
        ])


class Atmosphere(models.Model):
    pAtm = models.FloatField(default=0)
    TAtm = models.FloatField(default=0)

class User(models.Model):
    Name = models.CharField(max_length=100)
    Surname = models.FloatField(max_length=100, default=0)
    Mail = models.FloatField(max_length=150, default=0)
    Login = models.FloatField(max_length=100, default=0)
    Password = models.FloatField(max_length=150, default=0)
    Category = models.FloatField(max_length=2, default=8)

    def __str__(self):
        return ' '.join([
            self.name,

            str(self.Surname),
        ])


class Experiments(models.Model):
    ValuesSubstance = models.FloatField(default=0)
    User = models.CharField(max_length=100)
    T1 = models.FloatField(default=0)
    T2 = models.FloatField(default=0)
    Nheater = models.FloatField(default=0)
    KPDheater = models.FloatField(default=0)

    def __str__(self):
        return ' '.join([
            str(self.ValuesSubstance),

            self.User,
        ])


'''class Profile(models.Model):
    user = models.OneToOneField(User)
    Substance = models.IntegerField(choices=SUBSTANCE_CHOICES, default=1)'''