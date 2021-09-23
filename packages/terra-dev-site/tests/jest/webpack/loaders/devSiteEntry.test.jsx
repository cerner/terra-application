const path = require('path');
const { runLoaders } = require('loader-runner');

describe('devSiteEntry', () => {
  it('It sets up the query param', (done) => {
    runLoaders({
      resource: `${path.resolve(__dirname, '..', '..', '..', '..', 'src', 'webpack', 'templates', 'entry.template')}?query`,
      loaders: [
        {
          loader: path.resolve(__dirname, '../../../../src/webpack/loaders/devSiteEntry'),
          options: {
            entryMapping: {
              '?query': '?bootstrapQuery',
            },
          },
        },
      ],
    }, (err, result) => {
      if (err) return done(err);
      expect(result.result[0]).toMatchSnapshot();
      return done();
    });
  });
});
