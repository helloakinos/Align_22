# Align

## Description

Align is a proprietary connection platform, developed with Vincent Besuyen and Claire Lai, which targets people looking to make a difference in the world and connects them with opportunities to do so.
We ensure that all jobs visible on our website have been posted by companies that have been strictly vetted and are proven to truly make a positve difference in the world.

## Technologies

@azure/msal-node
assert-plus": "^1.0.0",
axios"
bcrypt
body-parser
bunyan
connect-mongo
cookie-parser
ejs
express
express-flash
express-handlebars
express-session
knex
method-override
mongoose
morgan
passport
passport-azure-ad
passport-facebook
passport-google-oauth
passport-local
pg

```
## Usage

Align should be used with the aim to connect like minded individuals who are looking to make a positive difference in the world.
Special attention should be payed to
```

## Key Features

### Personalization

We understand that people care about different causes and seek to make a difference in different areas. With this in mind, we sought to provide a platform where Seekers can create and edit their profiles according to what you are looking for and what they want to showcase.

### Job Board

Our interactive job board enables users view information on roles/opportunities they may be interested in, with an option to view more about the company as well. We ensure that users can visibly see whether or not a company has been vetted and connect with Finders in peace.

### Connection

We successfully implemented a connect feature. Bringing a wrap to the core features we aimed to implement.
Now, Seekers (those who are looking to make a difference) can choose to connect with Finder (those who have found ways to make a difference and are open to collaborators). This feature provides a view wherein the Finder can view seekers who have sought to connect and the Seeker's name becomes a direct link to the Seeker's profile
As a safety feature, we ensure that you need to make a seeker profile first and log in before the connect button would work.

### Authentication/Security

A key feature in building trust is to ensure that Finder's and Seeker's data is secured. Providing multiple Oauth options, Microsoft, Google and Facebook, Seekers are afforded secure ways to create a profile and join our platform.

Furthermore, passwords are effectively hashed with a salt element, ensuring that even in the case of a data breach, their passwords remain secure

The use of Knex ensures that Align is protected from threats like SQL injections.

## Contributing

The modular design makes the code easier to understand and delevop further
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and acknowledgment

Akin, Claire and Vincent would like to thank Sam Oshaughnessy, Bibek Rajbhandari, Siddarth Salins Mudaliar and Stack Overflow for their contributions to Align

## Project status

Align is in development at this stage and will be workied on sparingly

## Further Development

- isCurrentUser middleware is merged for both Finders and Seekers now. This results in the side-effect that Finder and Seeker being able to edit eachothers profile if they have the same ID number. This can be solved by seperating the conditional inside the isCurrentUser function. Adding a isCurrentFinder & isCurrentSeeker boolean to the res.locals and proceeding to use those variables where needed throughout the appropriate views in handlebars.

- We are looking to ensure that after a seeker connects on a job, we need to make it so that the connect button changes into a checkmark. as currently, it can be clicked again and will return a console.log which will. make it visible for a seeker to see if they have already responde to the job.
  We suggest overhauling the middleware (see the second bulletpoint), or using "current user type" to check against seeker ID and if that ID shows up, add it as a template in the front end job file so it renders immediately.

- Overhauling the middleware functions. Currently we are using multiple authentication and usertype middleware functions. These could be merged into one that handles all needed checks and returns the needed variables. This would simplify the routers and make it easier to add variables in the future if needed.

- Flash messages are currently not visible due to the login/signup form changing back to its original state. Displaying the failureflash on the original form would be ideal, if possible.

- Expand "Connect" feature to include both Finder and Seeker profiles on top of the current Job functionality. Include safeguards to ensure that those who did not create their profile yet, are not able to click on connect.
