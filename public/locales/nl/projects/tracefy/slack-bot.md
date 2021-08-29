Voor diverse onderhouds gerelateerde taken heb ik een bot voor Slack ontwikkeld in Python. De bot kan via de Docker SDK zelf de nodige containers opspinnen om zijn taken uit te voeren. Een van die taken is het ophalen van berichten binnen een bepaald tijdvak uit de S3 bucket.

Deze bestaat uit de volgende onderdelen:
- De zoekmachine voor de bucket (go);
- De decoder voor het desbetreffende bericht (go of php);
- Een csv generator (python);

Als alle berichten gedownload en gecodeerd zijn, krijgt degene die het heeft aangevraagd een Slack berichtje met het het resultaat.