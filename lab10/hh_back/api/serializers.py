from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializers(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializers(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.IntegerField()  # передаём company_id как число

    def create(self, validated_data):
        company_id = validated_data.pop('company')
        try:
            company = Company.objects.get(id=company_id)
        except Company.DoesNotExist:
            raise serializers.ValidationError("Company with this ID does not exist.")

        return Vacancy.objects.create(company=company, **validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.salary = validated_data.get('salary', instance.salary)
        company_id = validated_data.get('company', instance.company_id)
        try:
            company = Company.objects.get(id=company_id)
        except Company.DoesNotExist:
            raise serializers.ValidationError("Company with this ID does not exist.")
        instance.company = company
        instance.save()
        return instance

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'salary': instance.salary,
            'company': instance.company.id
        }
