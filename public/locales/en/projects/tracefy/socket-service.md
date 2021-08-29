For the new GPS hardware I designed and developed a new socket service.

Which resulted in several smaller services:
- The socket service itself including decoder (go);
- A message backup mechanism (go, s3);
- A console interface so that you are able to communicate with the GPS device (go);
- An app to turn on a scooter (React Native);
- A message processor (go, dynamo);
- Stress testing (python);
- A simulator GPS unit (go);

The socket service is designed to be as light as possible. To realize this, I wrote stress tests with different timers and variables, so that all possible situations can be simulated. In addition, I have created a simulator unit, which can replay messages at the original intervals