require('babel-register')({
  presets: ['es2015', 'react'],
});
const works = require('./fixtures/works.json');
//Import our routes
const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  const projectSlugs = [];
  works.map((project) => projectSlugs.push({ slug: project.slug }));

  const paramsConfig = {
    '/work/:slug': projectSlugs,
  };

  return new Sitemap(router())
    .applyParams(paramsConfig)
    .build('https://buraksaraloglu.com')
    .save('./public/sitemap.xml');
}

generateSitemap();
