# Generated by Django 5.0.2 on 2024-03-18 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_bibliographicdata'),
    ]

    operations = [
        migrations.CreateModel(
            name='Standard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('identification_number', models.CharField(max_length=100)),
                ('source', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('document_link', models.URLField()),
            ],
        ),
    ]
