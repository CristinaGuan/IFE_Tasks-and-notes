<template>
  <div id="tableBox">
    <button v-on:click="add" class="btn btn-warning btn-xs">添加</button>
    <br>
    <table class="table table-bordered" id="table-wrapper">
      <tr>
        <th>姓名</th>
        <th>审核状态</th>
        <th>操作</th>
      </tr>
      <tr v-for="(p,index) in persons">
        <td>{{ p.name }}</td>
        <td>{{ p.auditStatus }}</td>
        <td>
          <button v-if="p.auditStatus != '待审核'" v-on:click="del(index)" class="btn btn-danger btn-xs">删除</button>
          <button v-else v-on:click="audit(index)" class="btn btn-xs btn-info">审核</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  data() {
    return {
      persons: [{
          name: '张三',
          auditStatus: '合格'
        },
        {
          name: '李四',
          auditStatus: '不合格'

        },
        {
          name: '王五',
          auditStatus: '待审核'
        },
        {
          name: '官官',
          auditStatus: '待审核'
        }
      ]
    }
  },
  methods: {
    add: function() {
      let
        newname =prompt('请输入姓名', '');
      // 姓名验证
      let regName = /^[\u4E00-\u9FA5A-Za-z0-9]{2,6}$/;
      if (!regName.test(newname)) {
        alert('请输入2~6位中文、英文字母或数字，首字母不能为空格');
        return;
      }
      this.persons.push({ name: newname, auditStatus: '待审核' });
    },
    del: function(index) {

      this.persons.splice(index, 1);
    },
    audit: function(index) {
      // 第一个参数是要修改的数据, 第二个值是修改当前数组的哪一个字段,第三个是要修改为什么值
      // 要修改的数据: 根据索引值你可以拿到数组中的第 `index`条数据: `this.persons[index]`
      // 前数组的哪一个字段: `auditStatus`
      // 修改为 `合格`
      Vue.set(this.persons[index], 'auditStatus', '合格');

    }
  }
}

</script>
<style type="text/css" media="screen" scoped>
#tableBox{
  width: 50%;
  margin: 10px auto;
}
.btn{
  margin-bottom: 10px;
}
  button{
    cursor: pointer;
  }

</style>
