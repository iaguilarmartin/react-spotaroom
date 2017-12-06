const baseUrl = 'http://localhost/SimpleProxy.php?url=https://www.spotahome.com/api/public/listings/search';

const API = {
	properties: {
		get(propertyType = '', city = 'madrid') {
			const urlParams = propertyType ? `?type[]=${propertyType}` : '';
			return fetch(`${baseUrl}/markers/${city}${urlParams}`)
				.then(requestHandler)
				.then(getPropertiesInformation)
				.catch(errorHandler);
		}
	}
};

function requestHandler(res) {
	if (res.status !== 200) {
		throw res.statusText;
	} else {
		return res.json();
	}
}

function errorHandler(err) {
	console.error('Error while doing request to the API: ' + err.message || err);
	return null;
}

function getPropertiesInformation({data}) {
	let ids = data.map(property => `ids[]=${property.id}`);
	if (ids.length > 30) {
		ids = ids.slice(0, 30);
	}

	return fetch(`${baseUrl}/homecards_ids?${ids.join('&')}`)
		.then(requestHandler)
		.then(({data}) => data.homecards);
}

export default API;

