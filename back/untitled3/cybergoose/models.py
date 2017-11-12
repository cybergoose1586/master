from django.db import models

# Create your models here.
class Substance(models.Model):
    name = models.CharField(max_length=30)
    c = models.FloatField


