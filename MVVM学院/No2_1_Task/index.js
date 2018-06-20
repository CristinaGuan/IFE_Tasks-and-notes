    // import san, {DataTypes} from 'san';
    var MyApp = san.defineComponent({
        template: `<div id="inputBox">
        <input type = "text" name = "name" placeholder = "姓名" value="{=name=}">
        <input type = "number" name = "age" min="1" placeholder = "年龄" value="{=age=}" >
        <input type = "text" name = "des" placeholder = "简介" value="{=des=}">
        <div >
        <span> 信息： </span><button type = "button" on-click="submit"> 移除信息 </button> </div >
        <ul id = "show">
        <li> <span> 姓名: </span> <p> {{name}}</p> </li > 
        <li> <span> 年龄: </span> <p> {{age}}</p> </li > 
        <li> <span> 简介: </span> <p> {{des}}</p> </li > 
        </ul> </div > `,
        initData: function() {
            return {
                name: document.getElementsByName("name").value,
                age: document.getElementsByName("age").value,
                des: document.getElementsByName("des").value
            };
        },
        submit: function () {
          this.data.set('name', '');
          this.data.set('age', '');
          this.data.set('des', '');
        }

    
 
    });
    var myApp = new MyApp();
    myApp.attach(document.body);