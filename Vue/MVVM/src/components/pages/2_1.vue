<template>
   <div id="inputBox">
        <input type = "text" name = "name" placeholder = "姓名"  v-model.trim="person.name">
        <input type = "number" name = "age" min="1" placeholder = "年龄" v-model="person.age" >
        <input type = "text" name = "des" placeholder = "简介" v-model.trim="person.des">
        <div >
        <span> 信息： </span><button class="btn btn-warning btn-xs" type = "button" v-on:click="del"> 移除信息 </button> </div >
        <ul id = "show">
        <li> <span> 姓名: </span> <p> {{person.name}}</p> </li> 
        <li> <span> 年龄: </span> <p> {{person.age}}</p> </li> 
        <li> <span> 简介: </span> <p> {{person.des}}</p> </li> 
        </ul> 
    </div >
</template>

<script>
    export default {
       data() {
            return {
                person:{
                'name': document.getElementsByName("name").value,
                'age': document.getElementsByName("age").value,
                'des': document.getElementsByName("des").value
                }
               
            };
        },
        methods:{
         del:function() {
          this.person.name="";
          this.person.age="";
          this.person.des="";
          }
        }
        
    }
</script>

<style>
#inputBox{
  width: 50%;
  margin: 10px auto;
  text-align: left;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
}
    input{
        height: 30px;
        margin-bottom: 10px;
    }
    ul{
        padding: 0;
    }
    li{
      list-style-type: none;
        text-align: left;
        height: 30px;
        line-height: 30px;
        margin: 0;
        padding: 0;
    }
    span{
       width: 50px;
       display: inline-block;
       margin-top: 0;
       float: left;
    
    }

    p{
    display: inline-block;
    height: 100%;
    margin-top: 0 ;
    border-bottom:1px solid #aaa;
    width: 400px;
    }
</style>