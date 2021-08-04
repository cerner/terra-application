const path = require('path');
const generatePagesConfig = require('../../../../src/webpack/loaderUtils/generateNavigationConfig');

describe('generateNavigationConfig', () => {
  it('test standard config + additional content', () => {
    const addContextDependency = jest.fn();
    const config = generatePagesConfig({
      siteConfig: {
        additionalSearchDirectories: [],
        primaryNavigationItems: [{
          path: '/test',
          label: 'Test',
          contentExtension: 'ext',
          additionalContent: [
            {
              label: 'add',
              filePath: path.resolve(__dirname, 'testContent', 'additionalContent.md'),
            },
          ],
        }, {
          path: '/findNothing',
          label: 'findNothing',
          contentExtension: 'findNothing',
        }],
        sourceFolder: 'tests/jest/webpack/loaderUtils/testContent',
        distributionFolder: '',
        enableDebugLogging: false,
        namespace: 'npm-package',
      },
      resolveExtensions: ['.js'],
      mode: 'development',
      contentDirectory: 'TestA',
      isLernaMonoRepo: true,
      addContextDependency,
      logger: () => {},
    });
    expect(addContextDependency).toHaveBeenCalledWith(`${path.resolve(__dirname, 'testContent', 'TestA')}/`);
    expect(config.navigationConfig).toMatchSnapshot();
    expect(config.routesMap).toMatchSnapshot();
    expect(config.pageConfig).toMatchSnapshot();
    expect(config.contentImports).toEqual({
      '/test/cerner-terra-dev-site/file': path.join(__dirname, '/testContent/TestA/ext/file.ext.js'),
      '/test/cerner-terra-dev-site/file-outside': path.join(__dirname, 'testContent/TestA/fileOutside.ext.md'),
      '/test/cerner-terra-dev-site/add': path.join(__dirname, 'testContent/additionalContent.md'),
    });
  });

  it('tests prod mode', () => {
    const addContextDependency = jest.fn();
    const config = generatePagesConfig({
      siteConfig: {
        additionalSearchDirectories: [],
        primaryNavigationItems: [{
          path: '/test',
          label: 'Test',
          contentExtension: 'ext',
        }],
        distributionFolder: 'tests/jest/webpack/loaderUtils/testContent',
        sourceFolder: '',
        enableDebugLogging: false,
        namespace: 'npm-package',
      },
      resolveExtensions: ['.js'],
      mode: 'production',
      contentDirectory: 'TestA',
      isLernaMonoRepo: true,
      addContextDependency,
      logger: () => {},
    });
    expect(addContextDependency).not.toHaveBeenCalled();
    expect(config.navigationConfig).toMatchSnapshot();
    expect(config.routesMap).toMatchSnapshot();
    expect(config.pageConfig).toMatchSnapshot();
    expect(config.contentImports).toEqual({
      '/test/cerner-terra-dev-site/file': path.join(__dirname, 'testContent/TestA/ext/file.ext.js'),
      '/test/cerner-terra-dev-site/file-outside': path.join(__dirname, 'testContent/TestA/fileOutside.ext.md'),
    });
  });

  it('tests sorting', () => {
    const addContextDependency = jest.fn();
    const config = generatePagesConfig({
      siteConfig: {
        additionalSearchDirectories: [],
        primaryNavigationItems: [{
          path: '/test',
          label: 'Test',
          contentExtension: 'ext',
        }],
        distributionFolder: '',
        sourceFolder: 'tests/jest/webpack/loaderUtils/testContent',
        enableDebugLogging: false,
        namespace: 'npm-package',
      },
      resolveExtensions: ['.js'],
      mode: 'development',
      contentDirectory: 'TestB',
      isLernaMonoRepo: true,
      addContextDependency,
      logger: () => {},
    });
    expect(addContextDependency).toHaveBeenCalledWith(`${path.resolve(__dirname, 'testContent', 'TestB')}/`);
    expect(config.navigationConfig).toMatchSnapshot();
    expect(config.routesMap).toMatchSnapshot();
    expect(config.pageConfig).toMatchSnapshot();
    expect(config.contentImports).toEqual({
      '/test/cerner-terra-dev-site/a': path.join(__dirname, 'testContent/TestB/ext/a.ext.js'),
      '/test/cerner-terra-dev-site/b/file': path.join(__dirname, 'testContent/TestB/ext/b/file.ext.js'),
      '/test/cerner-terra-dev-site/dir/file': path.join(__dirname, 'testContent/TestB/ext/dir.c/file.ext.js'),
      '/test/cerner-terra-dev-site/first-file': path.join(__dirname, 'testContent/TestB/ext/firstFile.a.ext.js'),
      '/test/cerner-terra-dev-site/second-file': path.join(__dirname, 'testContent/TestB/ext/secondFile.b.ext.js'),
    });
  });

  it('tests additionalSearchDirectories', () => {
    const addContextDependency = jest.fn();
    const config = generatePagesConfig({
      siteConfig: {
        additionalSearchDirectories: [
          path.resolve(__dirname, 'testContent', 'TestA'),
        ],
        primaryNavigationItems: [{
          path: '/test',
          label: 'Test',
          contentExtension: 'ext',
        }],
        distributionFolder: '',
        sourceFolder: 'tests/jest/webpack/loaderUtils/testContent',
        enableDebugLogging: false,
        namespace: 'npm-package',
      },
      resolveExtensions: ['.js'],
      mode: 'development',
      contentDirectory: 'Empty',
      isLernaMonoRepo: true,
      addContextDependency,
      logger: () => {},
    });
    expect(config.navigationConfig).toMatchSnapshot();
    expect(config.routesMap).toMatchSnapshot();
    expect(config.pageConfig).toMatchSnapshot();
    expect(config.contentImports).toEqual({
      '/test/cerner-terra-dev-site/file': path.join(__dirname, 'testContent/TestA/ext/file.ext.js'),
      '/test/cerner-terra-dev-site/file-outside': path.join(__dirname, 'testContent/TestA/fileOutside.ext.md'),
    });
  });

  it('tests multiple primary nav items', () => {
    const addContextDependency = jest.fn();
    const config = generatePagesConfig({
      siteConfig: {
        additionalSearchDirectories: [],
        primaryNavigationItems: [{
          path: '/test',
          label: 'Test',
          contentExtension: 'ext',
        }, {
          path: '/doc',
          label: 'Doc',
          contentExtension: 'doc',
        }],
        sourceFolder: 'tests/jest/webpack/loaderUtils/testContent',
        distributionFolder: '',
        enableDebugLogging: false,
        namespace: 'npm-package',
      },
      resolveExtensions: ['.js'],
      mode: 'development',
      contentDirectory: 'TestC',
      isLernaMonoRepo: true,
      addContextDependency,
      logger: () => {},
    });
    expect(addContextDependency).toHaveBeenCalledWith(`${path.resolve(__dirname, 'testContent', 'TestC')}/`);
    expect(config.navigationConfig).toMatchSnapshot();
    expect(config.routesMap).toMatchSnapshot();
    expect(config.pageConfig).toMatchSnapshot();
    expect(config.contentImports).toEqual({
      '/test/cerner-terra-dev-site/file': path.join(__dirname, 'testContent/TestC/ext/file.ext.js'),
      '/doc/cerner-terra-dev-site/file': path.join(__dirname, 'testContent/TestC/doc/file.doc.js'),
    });
  });
});
