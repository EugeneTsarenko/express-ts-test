import * as convict from 'convict';
import { NodeEnv } from '../src/models/enums/env';
 
const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port"
  },
});

if (config.get('env') === NodeEnv.DEV) {
  config.loadFile('./config/development.json');
}

export default config;