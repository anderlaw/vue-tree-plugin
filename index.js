/*
 * @author Andrew
 * Date: 20/12/29
 */
import Vtree from "./tree/index";

const components = [Vtree];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => Vue.component(component.name, component));
};

export default {
  install
};