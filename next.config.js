module.exports = {
	basePath: "/",
	assetPath: "/",
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/api": { page: "/api/story" },
		}
	},
}
