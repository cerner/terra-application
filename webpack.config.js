const path = require("path");
const { merge } = require("webpack-merge");
const WebpackConfigTerra = require("@cerner/webpack-config-terra");
const fs = require("fs");
const TerraDevSite = require("./packages/terra-dev-site/src/webpack/plugin/TerraDevSite");

const html = fs.readFileSync(
  require.resolve("./tests/terra-dev-site/head.html"),
  "utf8"
);

const devSiteConfig = (env = {}, argv = { p: false }) => ({
  // temporary fix to enable live reloading.
  target: argv.p || argv.mode === "production" ? "browserslist" : "web",
  plugins: [
    new TerraDevSite({
      defaultLocale: env.defaultLocale,
      excludeChunks: ["terra-application-test/index"],
    }),
    new TerraDevSite({
      pathPrefix: "extended",
      contentDirectory: "dev-site-extended-test",
      primaryNavigationItems: [
        {
          path: "/home",
          label: "Home",
          contentExtension: "home",
          additionalContent: [
            {
              label: "Home",
              filePath: path.resolve(
                process.cwd(),
                "packages",
                "terra-dev-site",
                "README.md"
              ),
            },
          ],
        },
        {
          path: "/extended",
          label: "Extended",
          contentExtension: "extended",
        },
        {
          path: "/dev_tools",
          label: "Developer Tools",
          contentExtension: "tool",
        },
        {
          path: "/single-page-test",
          label: "Single Page Test",
          contentExtension: "spt",
        },
        {
          path: "/secondary-nav-test",
          label: "Secondary Nav Test",
          contentExtension: "snt",
        },
        {
          path: "/folder-first",
          label: "Folder First Test",
          contentExtension: "ff",
        },
        {
          path: "/empty",
          label: "Empty",
          contentExtension: "empty",
        },
        {
          path: "/components",
          label: "Components",
          contentExtension: "doc",
        },
        {
          path: "/test",
          label: "Test",
          contentExtension: "test",
        },
      ],
      titleConfig: {
        title: "Terra Dev Site - Extended",
      },
      additionalSearchDirectories: [
        path.resolve(
          process.cwd(),
          "packages",
          "terra-application-docs",
          "lib",
          "additionalSearchDirectory"
        ),
      ],
      headHtml: [
        '<script> console.log("Inline head html script") </script>',
        html,
      ],
      extensionItems: [
        {
          iconPath: "terra-icon/lib/icon/IconAllergy",
          key: "terra-application-docs.test-extension",
          text: "Test Extension",
          modalFilePath: path.resolve(
            process.cwd(),
            "tests",
            "terra-dev-site",
            "test-extension",
            "TestExtension"
          ),
        },
      ],
      excludeChunks: ["terra-application-test/index"],
    }),
  ],
  resolve: {
    extensions: [".jst"],
    /* 
    Added alias object due to errors, described here:
    https://jira2.cerner.com/browse/UXPLATFORM-6974?focusedCommentId=11435950&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-11435950
    */
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
});

const mergedConfig = (env, argv) =>
  merge(WebpackConfigTerra(env, argv), devSiteConfig());

module.exports = (env, argv) => {
  const config = mergedConfig(env, argv);
  // Brittle
  config.module.rules[0].oneOf[0].test = /\.(jsx|js|jst)$/;
  return config;
};
