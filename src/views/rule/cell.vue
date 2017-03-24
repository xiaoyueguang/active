<template lang="pug">
  el-row(:class = '$style.cell')
    el-col(:span = '18')

      el-row(:gutter = '24')
        el-col(:span = '2')
          el-input(v-model = 'item.index')
        el-col(:span = '16')
          el-input(v-model = 'item.text')
        el-col(:span = '6')
          el-button(type = 'danger', @click.native = 'del') 删除

    el-col(:span = '6')
      el-radio-group(v-model = 'item.type')
        el-radio-button(
          v-for = '(field, index) in fields',
          :key = 'index',
          :label = 'field.type'
        ) {{field.text}}
</template>

<script>
  import fields from './field'
  export default {
    data () {
      return {
        fields
      }
    },
    props: ['item'],
    methods: {
      del () {
        this.$emit('del')
      }
    }
  }
</script>

<style module>
  .cell {
    margin: 12px auto;
  }
</style>