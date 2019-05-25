const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withSass(
    withCSS(
        withTypescript({
            publicRuntimeConfig: {
                cdn_api: process.env.CDN_API,
            },
            webpack(config, options) {
                // Do not run type checking twice:
                if (options.isServer)
                    config.plugins.push(new ForkTsCheckerWebpackPlugin())

                return config
            },
        })
    )
)
