<template>
  <div class="node-wrapper">
    <div class="node-layout">
      <div v-if="!nodeItem.isLeaf" class="node-arrow iconfont icon-arrow-right"></div>
      <div class="node-entity">
        <div class="node-info" :data-pos="pos">
          <span class="node-icon-box">
            <span :class="'iconfont ' + nodeItem.iconClass"></span>
          </span>
          <div class="node-name">{{ nodeItem.name }}</div>
          <div class="node-desc">{{ nodeItem.desc }}</div>
        </div>
        <div class="handle-btn-box" :data-pos="pos">
          <span  v-if="!nodeItem.isLeaf" class="iconfont icon-add"></span>
          <span class="iconfont icon-editor"></span>
          <span class="iconfont icon-trash"></span>
        </div>
      </div>
    </div>
    <div v-if="!nodeItem.isLeaf && nodeItem.children" class="children-layout">
        
      <tree-node v-for="(nodeChild,index) in nodeItem.children" 
      :key="index"
      :nodeItem="nodeChild"
      :pos="pos+'-'+index"
      class="node-wrapper">
      </tree-node>
    </div>
  </div>
</template>

<script>
export default {
    props:["nodeItem","pos"],
    name:"tree-node"
};
</script>

<style></style>
