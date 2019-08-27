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

		fetchDoggos: function (autoDisplay) {
			let url  = 'https://data.sunshinecoast.qld.gov.au/resource/7f87-i6kx.json'
			let root = this

			axios.get(url)
			.then((response) => {
				console.log('API response', response)
				root.doggos = response.data
				root.maxDoggos = response.data.length
				if (autoDisplay) root.randomDoggo()
			})
		},

		randomDoggo: function () {
			this.index = Math.floor(Math.random() * this.maxDoggos) + 1
			this.doggo.name = this.doggos[this.index].name
			this.doggo.age = (this.doggos[this.index].age / 7).toFixed(2)
			this.doggo.gender = this.doggos[this.index].gender == 'F' ? 'Female' : 'Male'
			this.doggo.locality = this.doggos[this.index].locality.toLowerCase()
			this.doggo.photo = 'https://placedog.net/1280/720?random&' + this.index
		}

	},

	created() {

		this.fetchDoggos(true)

	}

})