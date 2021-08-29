Voor de nieuwe GPS hardware moest een nieuwe socket service geschreven worden. Ik heb dit vanaf de grond aan zelf ontworpen en ontwikkeld.

Wat resulteerde in meerdere kleinere services:
- De socket service zelf met decoder (go);
- Een berichten backup mechanisme (go, s3);
- Een console-interface zodat je met het gps device kan communiceren (go);
- Een app om een scooter aan te kunnen zetten (React Native);
- Een berichten verwerker (go, dynamo);
- Een stresstest script (python);
- Een simulator gps unit (go);

De socket service is ontworpen dat hij goed schaalbaar is. Om dit zo goed mogelijk in kaart te brengen heb ik een stress script geschreven met verschillende timers en matrix zodat we elk mogelijke situatie na kunnen bootsen. Zo is er dus ook een simulator unit gemaakt. Deze kan berichten opnieuw afspelen met de oorspronkelijke bericht intervals.
