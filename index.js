const request = require('request-promise-native')

const baseUrl = 'https://orgmanager.miguelpiedrafita.com'

function makeOptions(params, method, uri, formData) {
	if (params.token == false) {
		throw new Error('token not found!')
	}
	var options = {
		method: method,
		baseUrl: params.baseUrl,
		uri: uri,
		headers: {
			'user-agent': 'node-orgmanager-api',
			'authorization': `Bearer ${params.token}`
		},
		formData: formData,
		encoding: null,
		transform: function(body, response, resolveWithFullResponse) {
			if (body.toString() == '') {
				body = '{}'
			}
			var data = JSON.parse(body)
			return data
		}
	}
	return options
}

class orgmanager {
	constructor(token, iBaseUrl) {
		this.token = token || false
		this.baseUrl = iBaseUrl || baseUrl
	}

	async getRoot() {
			var options = makeOptions(this, 'GET', '/api', {})
			return await request(options)
		}
		//getRoot()

	async getStats() {
			var options = makeOptions(this, 'GET', '/api/stats', {})
			return await request(options)
		}
		//getStats()

	async getUser() {
			var options = makeOptions(this, 'GET', '/api/user', {})
			return await request(options)
		}
		//getUser()

	async getOrgs() {
			var options = makeOptions(this, 'GET', '/api/user/orgs', {})
			return await request(options)
		}
		//getOrgs()

	async getOrg(id) {
			var options = makeOptions(this, 'GET', `/api/org/${id}`, {})
			return await request(options)
		}
		//getOrg(id)

	async regenerateToken(set) {
			var options = makeOptions(this, 'GET', '/api/token/regenerate', {})
			var data = await request(options)
			if (set == true) {
				this.token = data.newtoken
			}
			return response
		}
		//regenerateToken()

	async changeOrgPassword(id, password) {
			var options = makeOptions(this, 'POST', `/api/org/${id}`, {
				password: password
			})
			return await request(options)
		}
		//changeOrgPassword(id, password)

	async joinOrg(id, username) {
			var options = makeOptions(this, 'POST', `/api/join/${id}`, {
				username: username
			})
			return await request(options)
		}
		//joinOrg(id, username)

	async updateOrg(id) {
			var options = makeOptions(this, 'PUT', `/api/org/${id}`, {})
			return await request(options)
		}
		//updateOrg(id)

	async deleteOrg(id) {
			var options = makeOptions(this, 'DELETE', `/api/org/${id}`, {})
			return await request(options)
		}
		//deleteOrg(id)
}

module.exports = orgmanager
