<template>
  <div class="container">
    <treeNode class="root-wrapper" :pos="index" :nodeItem="nodeItem" :key="index" v-for="(nodeItem,index) in data"/>
  </div>
</template>

<script>
import treeNode from './tree-node'
export default {
  name: "vue-tree-plugin",
  components:{treeNode},
  props: {
    data: Array
  },
  data() {
    return {
      lastActiveNodeRef: null,
      treeHtml: ""
    };
  },
  methods: {
  },
  watch:{
  },
  mounted() {
    console.log('mounted',this.data)
    //注册事件侦听
    this.$el.addEventListener("click", (event) => {
      const targetClassList = event.target.classList;
      //expand events
      if (targetClassList.contains("node-arrow")) {
        const childPanelEle = event.target.parentElement.parentElement;
        childPanelEle && childPanelEle.classList.toggle("expand");
      }
      //onSelect event
      if (targetClassList.contains("node-info")) {
        const targetEntityNode = event.target.parentElement;
        if(targetEntityNode.classList.contains("active")){
          targetEntityNode.classList.remove("active")
          this.lastActiveNodeRef = null;
          this.$emit("onNodeCancelClick");
        }else{
          this.lastActiveNodeRef &&
          this.lastActiveNodeRef.classList.remove("active");
          targetEntityNode.classList.add("active")
          
          this.lastActiveNodeRef = targetEntityNode;
          this.$emit("onNodeClick",event.target.dataset.pos);
        }
      }
      //node's btn clicked event
      if (targetClassList.contains("icon-editor")) {
        this.$emit("onModifyBtnClick",event.target.parentElement.dataset.pos);
      } else if (targetClassList.contains("icon-trash")) {
        this.$emit("onDeleteBtnClick",event.target.parentElement.dataset.pos);
      } else if (targetClassList.contains("icon-add")) {
        this.$emit("onAppendBtnClick",event.target.parentElement.dataset.pos);
      }
    });
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
}
@import url("./tree.css");
</style>
