// @flow
import PolyfillManager from './common/polyfills/polyfill-manager';
import './common/polyfills/all';
import getLogger, {getLogLevel, LogLevel, setLogLevel} from './common/utils/logger';
// Import core
import * as core from 'playkit-js';
// Import ui
import * as ui from 'playkit-js-ui';
// Import provider
import * as providers from 'playkit-js-providers';
// Import media source adapters
import 'playkit-js-hls';
import 'playkit-js-dash';
// Import analytics plugin
import 'playkit-js-analytics';
import 'playkit-js-kava';
// Import shaka-player
import * as shaka from 'shaka-player';
// Import setup method
import {setup} from './setup';

declare var __VERSION__: string;
declare var __NAME__: string;
declare var __PACKAGE_URL__: string;
declare var __PLAYER_TYPE__: string;

const currentLogLevel = getLogLevel();
setLogLevel(LogLevel.INFO);
getLogger().log(`%c ${__NAME__} ${__VERSION__}`, 'color: #ff98f9;  font-size: large');
getLogger().log(`%c For more details see ${__PACKAGE_URL__}`, 'color: #ff98f9;');
setLogLevel(currentLogLevel);

PolyfillManager.installAll();

export {core, ui, providers, setup, shaka, __PLAYER_TYPE__ as PLAYER_TYPE, __VERSION__ as VERSION, __NAME__ as PLAYER_NAME};
