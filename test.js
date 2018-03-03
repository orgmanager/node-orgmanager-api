const orgmanager = require('./index.js')
const token = process.env.token || ''
const client = new orgmanager(token)
async function test() {
	await client.getRoot()
	await client.getStats()
}
test()
