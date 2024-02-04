const BASE_URL: string = "https://app-api-fk.niu.com";
const USER_AGENT: string = "manager/5.2.4 (android; IPHONE);lang=en-US;clientIdentifier=Overseas;timezone=ETC/GMT;model=Pro15;deviceName=IOS983;ostype=android";

export async function post(path: string, token: string, body: string | FormData, params?: string) {
	const response = await fetch(`${BASE_URL}/${path}`, {
		method: "POST",
		headers: {
			"User-Agent": USER_AGENT,
			"Token": token,
			"Content-Type": "application/json"
		},
		body: body
	});
	//const d = await response.text();
	const data = await response.json();
	return data;
}

export async function get(path: string, token: string) {
	const response = await fetch(`${BASE_URL}/${path}`, {
		method: "GET",
		headers: {
			"User-Agent": USER_AGENT,
			"Token": token,
			"Content-Type": "application/json"
		}
	});
	const data = await response.json();
	return data;
}