// require("dotenv").config();
// const msal = require("@azure/msal-node");

// const microsoftoAuthconfig = {
//   auth: {
//     clientId: process.env.MICROSOFTCLIENTID,
//     authority: "https://login.microsoftonline.com/common",
//     clientSecret: process.env.MICROSOFTCLIENTSECRET,
//   },
//   system: {
//     loggerOptions: {
//       loggerCallback(loglevel, message, containsPii) {
//         console.log(message);
//       },
//       piiLoggingEnabled: false,
//       logLevel: msal.LogLevel.Verbose,
//     },

//     system: {
//         loggerOptions: {
//             loggerCallback(loglevel, message, containsPii) {
//                 console.log("cant miss it, message is: "+ message);
//             },
//             piiLoggingEnabled: false,
//             logLevel: msal.LogLevel.Verbose,
//         }
//     }

// }

// module.exports = microsoftoAuthconfig;
