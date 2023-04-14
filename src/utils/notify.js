const notify_API = `${process.env.BACKEND_LINK}/api/notify`;

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
