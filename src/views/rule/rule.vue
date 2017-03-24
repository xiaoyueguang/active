<template lang="pug">
  div(style = 'margin: 24px auto;')
    el-row(:gutter = '24')
      el-col(:span = '12')
        el-input(v-model = 'title', placeholder = '请输入标题')
        cell(
          v-for = '(item, index) in items',
          :key = 'index',
          :item = 'item',
          @del = 'del(index)'
        )
        el-button(
          type = 'success',
          @click.native = 'add',
          :class = '$style.btn'
        ) 添加
        el-button(
          type = 'success',
          @click.native = 'save',
          :class = '$style.btn'
        ) 保存
        el-button(
          type = 'success',
          @click.native = 'load',
          :class = '$style.btn'
        ) 加载

      el-col(:span = '8')
        views(:obj = 'obj')

      el-col(:span = '4')
        json(:json = 'json')
</template>

<script>
  import Cell from './cell.vue'
  import Json from './json.vue'
  import Views from './views.vue'

  export default {
    components: {
      Cell, Json, Views
    },
    data () {
      return {
        title: '',
        items: []
      }
    },
    computed: {
      obj: {
        get () {
          return {
            title: this.title,
            items: this.items
          }
        },
        set ({title, items}) {
          this.title = title
          this.items = items
        }
      },
      json () {
        return JSON.stringify(this.obj)
      }
    },
    methods: {
      add () {
        this.items.push ({
          type: '',
          text: '',
          index: ''
        })
      },
      del (index) {
        this.items.splice(index, 1)
      },
      save () {
        localStorage.rule = JSON.stringify(this.obj)
      },
      load () {
        this.obj = JSON.parse(localStorage.rule)
      }
    }
  }

</script>

<style module>
  .btn {
    margin-top: 12px;
    width: 128px;
  }
</style>