import scss from 'rollup-plugin-scss';

const isProd = process.env.NODE_ENV === 'production';

const config = {
  input: 'src/index.js',
  output: {
    dir: './dist',
  },
  plugins: [
    scss({
      output: './dist/bundle.css',
      outputStyle: isProd ? 'compressed' : 'expanded',
      prefix: `
        @import "./src/config/_functions.scss";
        @import "./src/config/_variables.scss";
        @import "./src/mixins.scss";
        @import "./src/config/_mixins.scss";
      `,
      sass: require('sass'),
      watch: ['./src'],
    }),
  ],
};

export default config;
