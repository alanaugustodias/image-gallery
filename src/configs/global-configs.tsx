import EnvConfigs from './environment';
import config from 'react-global-configuration';

const currentEnvConfig = EnvConfigs[__ENVIRONMENT__.toString()];
const globalConfigs = {
    ...currentEnvConfig.Configs,
    ...currentEnvConfig.Endpoints,
};
config.set(globalConfigs);
