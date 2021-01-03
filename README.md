# A Vue.js Tree Plugin
## Support 
- Vue.js framework version:`2.x`
## Installation

`npm i vue-tree-plugin`

## Usage

### Configuartion

you need to import plugin in your `main.js`

```javascript
import Vue from "vue";
import vueTree from "vue-tree-plugin";
Vue.use(vueTree);
```
```html
<vue-tree-plugin/>
```
### Props

| name         | type                       | description                           |
| ------------ | -------------------------- | ------------------------------------- |
| data         | required:`Array<NodeItem>` | data to render Tree                   |

- `NodeItem`
```javascript
{
    iconClass: String,//the className of font icon that we want to dispaly about this node,egg:"iconfont icon-editor"
    name: String,//name of node we want to display
    desc: String,//description of node we want to display
    isLeaf: Boolean,// we can click arrow icon to expand a leaf node's children nodes
    children: Array<NodeItem>,//
}
```

### Events

| name         | params                       | description                           |
| ------------ | -------------------------- | ------------------------------------- |
| onNodeClick |  target node 's position,eg:`0-0-1` | when a node has been clicked                   |
| onAppendBtnClick |  target node 's position | when `add icon button` has been clicked  |
| onDeleteBtnClick |  target node 's position | when `delete icon button` has been clicked |
| onModifyBtnClick |  target node 's position | when `edit icon button` has been clicked |

## Examples

you can checkout [Demo](https://anderlaw.github.io/vue-tree-plugin/example/index.html) here
