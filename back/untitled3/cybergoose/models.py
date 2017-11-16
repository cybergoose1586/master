from django.db import models

# Create your models here.
class Substance(models.Model):
    name = models.CharField(max_length=30)
    c = models.FloatField(default=0)
    qBurn = models.FloatField(default=0)
    Q = models.FloatField(default=0)
    TCond = models.FloatField(default=0)
    THeat = models.FloatField(default=0)

    def __str__(self):
        return ' '.join([
            self.name,

            str(self.c),
        ])

class Atmosphere(models.Model):
    pAtm = models.FloatField(default=0)
    TAtm = models.FloatField(default=0)


