<template>
  <transition name="fade">
    <div class="modal" v-if="showModal">
      <div class="mask"></div>
      <div class="ts-box">
        <div class="ts-header">
          <h1>{{title}}</h1>
          <span class="ts-close" @click="$emit('cancel')"></span>
        </div>
        <div class="ts-body">
        <slot name="body"></slot>
        </div>
        <div class="ts-footer">
          <div class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</div>
          <div class="btn btn-default" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</div>
          <div class="btn-group" v-if="btnType==3">
            <div class="btn" :click="$emit('submit')">{{sureText}}</div>
            <div class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script tyrpe="text/ecmascript-6">
export default {
  name:'modal',
  props:{
    ModalType:{
      type:String,
      default:'middle'
    },
    title:{
      type:String
    },
    btnType:{
      type:String,//1确定2取消3确定与取消
      default:'1'
    },
    sureText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    showModal:Boolean
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/modal.scss';
</style>