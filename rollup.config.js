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
      sass: require('sass'),
      watch: ['./src/grid'],
    }),
  ],
};

export default config;
