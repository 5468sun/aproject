const upstreamTransformer = require('metro-react-native-babel-transformer');
const cssTransformer = require('react-native-css-transformer');
const lessTransformer = require('react-native-less-transformer');
// const sassTransformer = require('react-native-sass-transformer');
// const postCSSTransformer = require('react-native-postcss-transformer');

module.exports.transform = ({ src, filename, options }) => {
  if (filename.endsWith('.less')) {
    return lessTransformer
      .transform({ src, filename, options })
      // .then(css => postCSSTransformer.transform({ src: css, filename, options }));
  } else if (filename.endsWith('.scss')) {
    // return sassTransformer
      // .renderToCSS({ src, filename, options })
      // .then(css => postCSSTransformer.transform({ src: css, filename, options }));
  } else if (filename.endsWith('.css')) {
    return cssTransformer.transform({ src, filename, options });

    // return postCSSTransformer.transform({ src, filename, options });
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};
