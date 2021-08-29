For various maintenance related tasks I have developed a bot for Slack in Python. The bot can spin up the necessary containers to perform its tasks via the Docker SDK itself. One of those tasks is to retrieve messages from the S3 bucket within a certain time slot.

This consists of the following parts:
- The bucket search engine (go);
- The decoder for the message in question (go or php);
- A csv generator (python);

When all messages are downloaded and encrypted, the person who requested it will receive a Slack message with the result.