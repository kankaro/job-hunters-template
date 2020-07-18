module.exports = {
	gifsicle: {
    colors: 10,
    interlaced: false,
    optimizationLevel: 2,
  },
	jpegtran: {
    arithmetic: false,
    progressive: true,
  },
	pngquant: {
    quality: [0.25, 0.5]
  },
	svgo: {
		plugins: [
      {
        removeViewBox: false
      },
      {
        cleanupIDs: true
      }
    ]
	},
	webp: {
    quality: 10
  }
};
