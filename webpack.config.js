const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
  {
    path: '/',
    lastmod: new Date(),
    priority: 1,
    changefreq: 'daily'
  }
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://ennes.dev', paths }),
      new SitemapPlugin({ base: 'https://projects.feriapp.ennes.dev', paths }),
      new SitemapPlugin({ base: 'https://projects.kratodo.ennes.dev', paths }),
      new SitemapPlugin({ base: 'https://projects.vigilant.ennes.dev', paths }),
    ]
  }
};

  /*
  
  const SitemapPlugin = require('sitemap-webpack-plugin').default;

// Example of simple string paths
const paths = [
  '/foo/',
  '/bar/'
];

// Example of object paths
// Object paths must have a `path` attribute -- others are optional,
// and fall back to global config (if any)
const paths = [
  {
    path: '/foo/',
    lastmod: '2015-01-04',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    path: '/bar/',
    lastmod: '2018-02-05',
    priority: 0.5,
    changefreq: 'yearly'
  }
];

// Example webpack configuration -- input/output/etc. omitted for brevity.
export default {
  // Basic usage (output defaults to sitemap.xml)
  plugins: [
    new SitemapPlugin({ base: 'https://mysite.com', paths })
  ]

  // With custom output filename
  plugins: [
    new SitemapPlugin({
      base: 'https://mysite.com',
      paths,
      options: {
        filename: 'map.xml'
      }
    })
  ]

  // Skip generating a gzipped version of the sitemap
  plugins: [
    new SitemapPlugin({
      base: 'https://mysite.com',
      paths,
      options: {
        skipgzip: true
      }
    })
  ]

  // With global options
  plugins: [
    new SitemapPlugin({
      base: 'https://mysite.com',
      paths,
      options: {
        filename: 'map.xml',
        lastmod: true,
        changefreq: 'monthly',
        priority: 0.4
      }
    })
  ]
};

*/