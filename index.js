const vm = new window.Vue({

	el: '#app',

	data() {
		return {
			doggos: [],
			maxDoggos: 0,
			doggo: {
				name: 'Test Doggo Name',
				age: 0,
				locality: 'Test Locality',
				gender: 'Female',
				photo: 'https://placedog.net/1280/720?random'
			},
			index: 0
		}
	},

	methods: {

		fetchDoggos: function () {
			let url  = 'https://data.sunshinecoast.qld.gov.au/resource/7f87-i6kx.json'
			let root = this

			axios.get(url)
			.then((response) => {
				console.log('API response', response)
				root.doggos = response.data
				root.maxDoggos = response.data.length
			})
		},

	},

	created() {

		this.fetchDoggos(true)
		
	}

})