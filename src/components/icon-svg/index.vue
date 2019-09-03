<!--
 * @Description: svgicon
 * @Author: zy
 * @Date: 2019-09-03 20:45:11
 * @LastEditors: zy
 * @LastEditTime: 2019-09-03 23:09:35
 -->
<template>
  <svg
    :class="getClassName"
    :width="width"
    :height="height"
    :style="{'width': width || '1em','height': height || '1em'}"
    aria-hidden="true">
    <use :xlink:href="getName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'icon-svg',
    props: {
      name: {
        type: String,
        required: true
      },
      className: {
        type: String
      },
      width: {
        type: String
      },
      height: {
        type: String
      }
    },
    computed: {
      getName () {
        return `#icon-${this.name}`
      },
      getClassName () {
        return [
          'icon-svg',
          `icon-svg__${this.name}`,
          this.className && /\S/.test(this.className) ? `${this.className}` : ''
        ]
      }
    }
  }
</script>

<style>
  .icon-svg {
    fill: currentColor;
    overflow: hidden;
    border-left: none;
  }
</style>
