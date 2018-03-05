const orgmanager = require('./index.js')
const token = process.env.token || ''
const id = process.env.id || 1
const password = process.env.password || ''
const brutal = process.env.brutal || false
const client = new orgmanager(token)
var n = 0
async function test() {
	n++
	console.log(`Test ${n}`)
	await client.getRoot()
	n++
	console.log(`Test ${n}`)
	await client.getStats()
	n++
	console.log(`Test ${n}`)
	await client.getUser()
	n++
	console.log(`Test ${n}`)
	await client.getOrgs()
	n++
	console.log(`Test ${n}`)
	await client.getOrg(id)
	n++
	console.log(`Test ${n}`)
	await client.updateOrg(id)
	n++
	console.log(`Test ${n}`)
	await client.changeOrgPassword(id, password)
	n++
	console.log(`Test ${n}`)
}
test()

async function functionName() {
	n++
	console.log(`Test ${n}`)
	await regenerateToken(true)
	n++
	console.log(`Test ${n}`)
	await deleteOrg(id)
}
if (brutal == true) {
	brutalTest()
}
