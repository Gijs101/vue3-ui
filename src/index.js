import * as components from './components';
import {getOptions, Programmatic as ConfigProgrammatic, setOptions, setVueInstance} from './utils/config'
import {registerComponentProgrammatic, registerPlugin} from "./utils/plugin";
import {merge} from "lodash";


const Ui = {
    install(app, options = {}) {
        setVueInstance(app);
        const defaultConfig = getOptions();

        setOptions(merge(defaultConfig, options));

        for (const componentKey in components) {
            registerPlugin(app, components[componentKey]);
        }

        registerComponentProgrammatic(app, 'config', ConfigProgrammatic)
    }
}
export default Ui;
export * from './components'
export {Plugin as Config} from './utils/config';