/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s.niucache.com"
			},
			{
				protocol: "https",
				hostname: "download.niucache.com"
			}
		],
	}
};

module.exports = nextConfig;
