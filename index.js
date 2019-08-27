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

	methods: {},

	created() {}

})