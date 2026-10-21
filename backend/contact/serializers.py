from rest_framework import serializers
from .models import Message

class PublicMessageSerializer(serializers.ModelSerializer):
    """Data accepted from the public contact form."""

    class Meta:
        model = Message
        fields = ('name', 'email', 'content')

    def validate_name(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError('El nombre es obligatorio.')
        return value

    def validate_content(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError('El mensaje es obligatorio.')
        if len(value) > 2_000:
            raise serializers.ValidationError('El mensaje no puede superar los 2000 caracteres.')
        return value


class AdminMessageSerializer(serializers.ModelSerializer):
    """Full message data, available only to authenticated administrators."""

    class Meta:
        model = Message
        fields = ('id', 'name', 'email', 'content', 'created_at', 'is_read')
        read_only_fields = ('id', 'created_at')
