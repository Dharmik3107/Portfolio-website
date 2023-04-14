const BACKEND = "https://portfolio-backend-cpvv.onrender.com";

const notify_API = `${BACKEND}/api/notify`;

export const notify = async (data) => {
	console.log(JSON.stringify(data));
	try {
		const response = await fetch(notify_API, {
			method: "POST",
			headers: { Accept: "application/json", "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		return await response.json();
	} catch (error) {
		console.error(error.message);
	}
};
