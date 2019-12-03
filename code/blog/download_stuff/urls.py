from django.urls import path
from download_stuff.views import DownloadViewset


urlpatterns = [
    path('resume', DownloadViewset.as_view())
]
