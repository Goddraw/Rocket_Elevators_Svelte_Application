// export let testApi = async () => {
// 	fetch(
// 		'https://rocket-elevators-express-api.herokuapp.com/ERC20/balance/0x060dd253F5a1384392B96fBC9e13D9fAcFfDC6F3'
// 	)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log('API call response: ');
// 			console.log(data);
// 		});
// };

export function testApi2() {
	async () => {
		fetch(
			'https://rocket-elevators-express-api.herokuapp.com/ERC20/balance/0x060dd253F5a1384392B96fBC9e13D9fAcFfDC6F3'
		)
			.then((response) => response.json())
			.then((data) => {
				console.log('API call response: ');
				console.log(data);
			});
	};
}
