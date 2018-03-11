# Node OrgManager API [![npm version](https://badge.fury.io/js/%40orgmanager%2Fnode-orgmanager-api.svg)](https://www.npmjs.com/package/@orgmanager/node-orgmanager-api)

A Node.js client for the OrgManager API

# Use

```javascript
const orgmanager = require('@orgmanager/node-orgmanager-api')
const token = 'my-token' //https://orgmanager.miguelpiedrafita.com/token
const client = new orgmanager(token)

//Join Org
client.joinOrg('org-id', 'username')

//Get User info
client.getUser()

//Get User Orgs
client.getOrgs()

//Get Org info
client.getOrg('org-id')

//Change Org Password
client.changeOrgPassword('org-id', 'new-password')

//Update Org
client.updateOrg('org-id')

//Delete Org
client.deleteOrg('org-id')

//Get Stats
client.getStats()

//Renenerate Token
client.regenerateToken()

//Renenerate Token and Set new Token
client.regenerateToken(true)
```

# Proxy

```javascript
const orgmanager = require('@orgmanager/node-orgmanager-api')
const token = 'my-token' //https://orgmanager.miguelpiedrafita.com/toke
const client = new orgmanager(token, 'proxy-url ~> orgmanager')
```


# Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command line tools.

```sh
$ npm install @orgmanager/node-orgmanager-api
```

# Dependencies

- [request](https://ghub.io/request): Simplified HTTP request client.
- [request-promise-native](https://ghub.io/request-promise-native): The simplified HTTP request client &#39;request&#39; with Promise support. Powered by native ES6 promises.

# License

MIT
