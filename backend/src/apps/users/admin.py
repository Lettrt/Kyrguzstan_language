from django.contrib import admin

from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'avatar',)
    list_display_links = ('username',)
    search_fields = ('username', 'email',)
    list_filter = ('username', 'email',)
