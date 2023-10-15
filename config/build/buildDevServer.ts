import { BuildOptions } from './types/config'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const buildDevServer = (
  optios: BuildOptions
): DevServerConfiguration => {
  const { port } = optios

  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
