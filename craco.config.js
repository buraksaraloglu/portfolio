const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
	plugins: [
		{
			plugin: CracoEsbuildPlugin,
			options: {
				enableSvgr: true,
				esbuildLoaderOptions: {
					loader: 'jsx',
					target: 'es2015',
				},
				skipEsbuildJest: false,
			},
		},
	],
};
