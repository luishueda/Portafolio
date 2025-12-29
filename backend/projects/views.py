from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    # Ordenamos por 'order' de forma ascendente (1, 2, 3...)
    queryset = Project.objects.all().order_by('order')
    serializer_class = ProjectSerializer