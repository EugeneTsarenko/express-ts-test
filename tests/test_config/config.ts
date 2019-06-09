import { IConfig } from '../../src/models/interfaces/config';
import { configGlobal } from './config_global';

let configLocal;

try {
  configLocal = require('./config_local');
} catch (e) {
  configLocal = {};

  console.warn('create src/config/config_local.json file to override global config');
}

export const config: IConfig = { ...configGlobal, ...configLocal };