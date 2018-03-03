var orgmanager = require('./index.js')
var token = process.env.token || ''
var client = new orgmanager(token)
async function test() {
	await client.getRoot()
	await client.getStats()
}
test()
