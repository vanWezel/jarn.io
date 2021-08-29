Voor de onderhouds gerelateerde taken en checks heb ik een bot voor Slack geschreven in Python. De bot kon via de Docker SDK zelf de nodige containers op spinnen voor het daadwerkelijk uitvoeren van zijn taken. Een van die taken was het ophalen van berichten binnen een bepaald tijdvak uit de S3 bucket.

Deze bestond uit de volgende onderdelen:
- De zoekmachine voor de bucket (go);
- De decoder voor het desbetreffende bericht (go of php);
- Een csv generator (python);

Als alle berichten gedownload en gedecodeerd waren kreeg de gene die hem had aangevraagd een Slack berichtje met het het resultaat.
