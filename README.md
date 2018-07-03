### Simple node API to send notifications via mail or SMS

Simply run `npm i` then `npm run start` to start the service in the current running terminal

The service needs a few environment variables to work as expected. So don't forget to `cp .env.dev .env` and replace appropriate values.

To test SMS notifications you first need to setup a NEXMO test account and add authorized numbers, more details here: https://developer.nexmo.com/messaging/sms/overview

To interact with the API :
* POST `/notify/mail` with `{"mail": "email@example.com"}`
* POST `/notify/sms` with `{"phone": "33102030405"}` 