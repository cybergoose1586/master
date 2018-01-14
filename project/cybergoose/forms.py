from django import forms

#from cybergoose.models import Substance


#class SubstanceModel(forms.Form):
    #class Meta:
        #model = Substance
        #fields = ('name', 'сSolid', 'cLiquid', 'QCond', 'TCond', 'THeat', 'QHeat')


from cybergoose.choices import *


'''class ChoiceSubstance(forms.Form):

    status = forms.ChoiceField(choices=SUBSTANCE_CHOICES, label="", initial='', widget=forms.Select(), required=True)'''