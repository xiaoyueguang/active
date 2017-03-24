<template lang="pug">
  div
    h3 {{obj.title}}
    template(v-for = 'item in items')
      p(
        :class = 'item.className'
      ) 
        span.index.rule-cell {{item.index}}
        |{{item.text}}
</template>
<script>
  import fields from './field.js'

  export default {
    props: ['obj'],
    data () {
      return {
        fields
      }
    },
    computed: {
      items () {
        let items = []
        this.obj.items.forEach(({type, text, className, index}) => {
          type = Number(type || 0)
          items.push({
            text: text,
            type,
            index,
            className: fields[type].className + ' rule-cell'
          })
        })
        return items
      }
    }
  }
</script>

<style>
  .rule-cell.sub-title {
      font-size: 1.2em;
  }
  .rule-cell.content {
    color: #858585;
  }
  .rule-cell.tips {
    color: #fb6e52;
  }
  .rule-cell.index {
    display: inline-block;
    width: 32px;
  }
</style>