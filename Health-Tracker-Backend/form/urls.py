from django.urls import path
from . import views

urlpatterns = [
    path('api/data/', views.data_list),
    path('api/data/<int:pk>/', views.data_detail),
    path('api/data/published', views.data_list_published),
]