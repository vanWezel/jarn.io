Voor de nieuwe GPS hardware heb ik een nieuwe socket service ontworpen en ontwikkeld.

Wat resulteerde in meerdere kleinere services:
- De socket service zelf met decoder (go);
- Een berichten backup mechanisme (go, s3);
- Een console-interface zodat je met het gps device kan communiceren (go);
- Een app om een scooter aan te kunnen zetten (React Native);
- Een berichten verwerker (go, dynamo);
- De stress testen (python);
- Een simulator gps unit (go);

De socket service is ontworpen om zo licht mogelijk te zijn. Om dit te realiseren heb ik stresstesten geschreven met verschillende timers en variabelen, zodat alle mogelijke situaties nagebootst kunnen worden. Daarnaast heb ik een simulator unit gemaakt, die berichten opnieuw kan afspelen met de oorspronkelijke intervals.