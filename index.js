const request = require('request-promise-native')

const baseUrl = 'https://orgmanager.miguelpiedrafita.com'


function makeOptions(token, method, uri, formData) {
	console.log(token)
	var options = {
		method: method,
		baseUrl: baseUrl,
		uri: uri,
		headers: {
			'user-agent': 'php-orgmanager-api',
			'authorization': `Bearer ${token}`
		},
		formData: formData,
		encoding: null,
		transform: function(body, response, resolveWithFullResponse) {
			//console.log(body)
			var data = JSON.parse(body)
			console.log(data)
			return data
		}
	}
	return options
}

async function getRoot() {
	var options = makeOptions('GET', '/api', {})
	return await request(options)
}
//getRoot()

async function getStats() {
	var options = makeOptions('GET', '/api/stats', {})
	return await request(options)
}
//getStats()

async function getUser() {
	var options = makeOptions('GET', '/api/user', {})
	return await request(options)
}
//getUser()

async function getOrgs() {
	var options = makeOptions('GET', '/api/user/orgs', {})
	return await request(options)
}
//getOrgs()

async function getOrg(id) {
	var options = makeOptions('GET', `/api/org/${id}`, {})
	return await request(options)
}
//getOrg(id)

async function regenerateToken() {
	var options = makeOptions('GET', '/api/token/regenerate', {})
	return await request(options)
}
//regenerateToken()

async function changeOrgPassword(id, password) {
	var options = makeOptions('POST', `/api/org/${id}`, {
		password: password
	})
	return await request(options)
}
//changeOrgPassword(id, password)

async function joinOrg(id, username) {
	var options = makeOptions('POST', `/api/join/${id}`, {
		username: username
	})
	return await request(options)
}
//joinOrg(id, username)

async function updateOrg(id) {
	var options = makeOptions('PUT', `/api/org/${id}`, {})
	return await request(options)
}
//updateOrg(id)

async function deleteOrg(id) {
	var options = makeOptions('DELETE', `/api/org/${id}`, {})
	return await request(options)
}
//deleteOrg(id)
