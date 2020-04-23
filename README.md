# Co-Ping (Browser Client) [![Netlify Status](https://api.netlify.com/api/v1/badges/14e6c98a-62dd-4802-ac16-fe1649b36d37/deploy-status)](https://app.netlify.com/sites/co-ping/deploys)

![Co-ping image](public/copingWide.png)

### So what is Co-Ping?

Co-Ping is the cooperative shopping app for amazing neighbor's. With it you can announce when you'll go shopping so that a neighbor who may need a few items can request you pick it up for them. Next time, when they go shopping, you may be out of something and they can return the favour. This app is about bringing people in a co-operative or neighborhood closer - one kind gesture at a time (while saving time, money and reducing consumption).

### Let's get started

##### Fork & clone
To start working on this project you will need to fork [this Repo](https://github.com/CraftAcademy/co_ping_client), the [API Repo](https://github.com/CraftAcademy/co_ping_api) and the [mobile client Repo](https://github.com/CraftAcademy/co_ping_mobile). Clone it down to your local workspace, if more than two Repos we recommend that you start with the API. Make sure you have a text editor, we recommend [VSCode](https://code.visualstudio.com/) but there are many to choose from.

##### This app was built with...

* [React](https://reactjs.org/)
* [Ruby on Rails](https://rubyonrails.org/)

##### ... and tested using

* [Cypress](https://www.cypress.io/)
* [RSpec](https://rspec.info/)

##### ... additional packages and gems includes
* [Axios](https://www.npmjs.com/package/axios)
* [J-tockAuth](https://www.npmjs.com/package/j-tockauth)
* [Grommet](https://v2.grommet.io/)
* [React Redux](https://react-redux.js.org/)

##### we love to deploy with...

* [Netlify](https://www.netlify.com/)
* [Heroku](https://www.heroku.com/)

##### ... and don't forget to monitor your test coverage...

* [Semaphore](https://semaphoreci.com/)
* [Coveralls](https://coveralls.io/)


##### Installments
Now let's get to it shall we?
... get the gems needed

```
bundle install
```
... get RSpec for testing
```
rspec-rails
```
... start the server
```
rails s
```
Awesome! Now you should be good to go on the back-end, let's continue on the front end...

... get [Yarn](https://yarnpkg.com/)
```
yarn install
```
... start Cypress to run some tests
```
yarn run cy:open
```
... start the React application and run it on your local host
```
yarn start
```
**... There, now you should be good to go. make some coder magic!**

### Updates and improvements
This application as a whole has endless possibilities and we would like to list some of them to get you as excited about Co-Ping as wer are.

##### Image Upload
A big part of this application involves trust as it should, but we also want to offer features for administrative parts such as providing your Ponger with a copy of your receipt. This could be uploaded when you've closed your shopping trip and want to send the total amount back to your neighbor. The total amount would then be delivered to the Ponger's account together with the image of the receipt.

##### Monetization
Our monetization plan for this app starts with cooperatives and community organizations paying a yearly subscription fee. This would ultimately be paid online by submitting details through third party API's such as Paypal or Klarna B2B.

##### Points and ratings
At the moment the person who needs something benefits more from this application than the shopper, should the favour not be returned. Therefor we would like to implement a ratings system where the person doing favours gets points and comments from their neighbors. This way a person who is doing favours gets something back that inspires them to keep going.

##### Geo Location
The app started out targeting cooperations, clusters of people living super close to each other but never really talking or getting to know each other. They would be connected through a co-op manager or board member and allowed access to the building account. Our next step is to let these people widen their network by choosing how many houses in their close proximity they want to be accessible to for pings and pongs. This we more people can help each other, save time, money and reduce overall consumption by co-shopPing.

##### Coop- Chat and Contact List
Apart from the shopping features we would like to inspire people to keep communicating by offering a chat for the entire building as well as a contact list to easily get in touch with one another and start conversations.

### Authors
These are the people behind this amazing application:
* [Emma-Maria Thalen](https://github.com/emtalen)
* [Philip Gaunitz](https://github.com/pgaunitz)
* [Kayla Woodbury](https://github.com/kaylawoodbury)
* [Johan Bons](https://github.com/johanbounce)
* [Karolina Frostare](https://github.com/kaylawoodbury)

### Acknowledgements
We would like to show our appreciation to the following people and places
* [Thomas Ochman](https://github.com/tochman) for helping us out with bug hunts
* [Aditya Naik](https://github.com/kianaditya) for supporting us during our swish implementation phase

### License
We operate under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
