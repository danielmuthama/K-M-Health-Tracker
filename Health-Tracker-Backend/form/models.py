from django.db import models

# Create your models here.

class Data(models.Model):
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    age = models.IntegerField(blank=False, )
    gender = models.CharField(max_length=7, default='')
    signs_and_symptoms = models.CharField(max_length=255, default='')
    patient_type = models.CharField(max_length=10, default='')
    # condition = models.CharField(max_length=255, blank=False, default='')
    test = models.CharField(max_length=255, blank=False, default='')
    disease_found = models.CharField(max_length=255, blank=False, default='')
    published = models.BooleanField(default=False)
    
    def __str__(self): 
        return str(self.pk)
