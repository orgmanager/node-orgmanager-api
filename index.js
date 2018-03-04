const request = require('request-promise-native')

const baseUrl = 'https://orgmanager.miguelpiedrafita.com'

function makeOptions(token, method, uri, formData) {
	if (token == false) {
		throw new Error('token not found!')
	}
	var options = {
		method: method,
		baseUrl: baseUrl,
		uri: uri,
		headers: {
			'user-agent': 'node-orgmanager-api',
			'authorization': `Bearer ${token}`
		},
		formData: formData,
		encoding: null,
		transform: function(body, response, resolveWithFullResponse) {
			var data = JSON.parse(body)
			return data
		}
	}
	return options
}

class orgmanager {
	constructor(token) {
		this.token = token || false
	}

	async getRoot() {
			var options = makeOptions(this.token, 'GET', '/api', {})
			return await request(options)
		}
		//getRoot()

	async getStats() {
			var options = makeOptions(this.token, 'GET', '/api/stats', {})
			return await request(options)
		}
		//getStats()

	async getUser() {
			var options = makeOptions(this.token, 'GET', '/api/user', {})
			return await request(options)
		}
		//getUser()

	async getOrgs() {
			var options = makeOptions(this.token, 'GET', '/api/user/orgs', {})
			return await request(options)
		}
		//getOrgs()

	async getOrg(id) {
			var options = makeOptions(this.token, 'GET', `/api/org/${id}`, {})
			return await request(options)
		}
		//getOrg(id)

	async regenerateToken() {
			var options = makeOptions(this.token, 'GET', '/api/token/regenerate', {})
			return await request(options)
		}
		//regenerateToken()

	async changeOrgPassword(id, password) {
			var options = makeOptions(this.token, 'POST', `/api/org/${id}`, {
				password: password
			})
			return await request(options)
		}
		//changeOrgPassword(id, password)

	async joinOrg(id, username) {
			var options = makeOptions(this.token, 'POST', `/api/join/${id}`, {
				username: username
			})
			return await request(options)
		}
		//joinOrg(id, username)

	async updateOrg(id) {
			var options = makeOptions(this.token, 'PUT', `/api/org/${id}`, {})
			return await request(options)
		}
		//updateOrg(id)

	async deleteOrg(id) {
			var options = makeOptions(this.token, 'DELETE', `/api/org/${id}`, {})
			return await request(options)
		}
		//deleteOrg(id)
}

module.exports = orgmanager
