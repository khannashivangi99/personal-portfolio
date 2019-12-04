from django.urls import path
from django.conf.urls import include
from home.views import HomeView
from CV.views import DownloadCV
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', HomeView.as_view()),
    path('cv/', DownloadCV.as_view()),
    path('download/', include('download_stuff.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
