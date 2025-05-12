export const fetchVideosByQuery = async (query: string) => {
	const url = new URL("https://www.googleapis.com/youtube/v3/search");
	url.searchParams.set("part", "snippet");
	url.searchParams.set("q", query);
	url.searchParams.set("key", process.env.API_KEY ?? "");
	url.searchParams.set("maxResults", "10");
	url.searchParams.set("type", "video");

	const res = await fetch(url.toString());
	if (!res.ok) throw new Error("Failed to fetch videos");
	const data = await res.json();
	return data.items;
};
