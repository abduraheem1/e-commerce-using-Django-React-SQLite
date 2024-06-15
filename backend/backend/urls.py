"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from base.views.csv_view import get_passenger_data
# from base.views.csv_view import FileUploadView
# from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('base.urls')),
    path('api/products/', include('base.urls.product_urls')),
    path('users/', include('base.urls.user_urls')),
    path('orders/', include('base.urls.order_urls')),
    path('upload/', include('base.urls.csv_urls')),
    # path('upload/', FileUploadView.as_view(), name='file_upload'),
    path('api/passenger-data/', get_passenger_data, name='passenger_data_api'),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

