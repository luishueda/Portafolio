from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        # Only fields rendered by the public portfolio are exposed by the API.
        fields = (
            'id',
            'title',
            'description',
            'technologies',
            'image',
            'link_github',
            'link_live',
        )
