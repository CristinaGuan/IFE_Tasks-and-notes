/*
 * @Author: guanxy
 * @Date:   2018-05-20 23:11:38
 * @Last Modified by:   guanxy
 * @Last Modified time: 2018-05-22 17:47:57
 */
window.onload = function() {
    //加 
    document.getElementById('add-btn').onclick = function() {
        var firstNum = document.getElementById("first-number").value;
        var secondNum = document.getElementById('second-number').value;
        if (isNaN(firstNum) || isNaN(secondNum)) {
            console.log("请输入数字类型");
            alert('请输入数字');

        } else {
            document.getElementById('result1').innerHTML = parseFloat(firstNum) + parseFloat(secondNum);
        }
    };
    //减
    document.getElementById('minus-btn').onclick = function() {
        var firstNum = document.getElementById("first-number").value;
        var secondNum = document.getElementById('second-number').value;
        if (isNaN(firstNum) || isNaN(secondNum)) {
            console.log("请输入数字类型");
            alert('请输入数字');

        } else {
            document.getElementById('result1').innerHTML = parseFloat(firstNum) - parseFloat(secondNum);
        }
    };
    //乘
    document.getElementById('times-btn').onclick = function() {
        var firstNum = document.getElementById("first-number").value;
        var secondNum = document.getElementById('second-number').value;
        if (isNaN(firstNum) || isNaN(secondNum)) {
            console.log("请输入数字类型");
            alert('请输入数字');

        } else {
            document.getElementById('result1').innerHTML = parseFloat(firstNum) * parseFloat(secondNum);
        }
    };
    //除
    document.getElementById('divide-btn').onclick = function() {
        var firstNum = document.getElementById("first-number").value;
        var secondNum = document.getElementById('second-number').value;
        if (isNaN(firstNum) || isNaN(secondNum)) {
            console.log("请输入数字类型");
            alert('请输入数字');

        } else if (parseFloat(secondNum) === 0) {
            console.log("除数不能为0");
            alert("除数不能为0");

        } else {
            document.getElementById('result1').innerHTML = parseFloat(firstNum) / parseFloat(secondNum);
        }
    };

    // 编码1结束********************************************

    document.getElementById('trans-btn2').onclick = function(event) {
        var tenNum = document.getElementById('dec-number2').value;
        if (tenNum < 0) {
            alert("不能为负数!");
        } else {
            document.getElementById('result2').innerHTML = dec2bin(tenNum);
        }
    }

    function dec2bin(decNumber) {
        var two = [];
        // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
        while (decNumber / 2 != 0) {
            var yu = parseInt(decNumber % 2);
            var shang = parseInt(decNumber / 2);
            decNumber = shang;
            two.unshift(yu);
        }
        for (var i = 0; i < two.length; i++) {
            two = two.toString().replace(',', '');
        }
        return two;
    }
    // 编码2结束********************************************

    function dec3bin(decNumber,decNumber_len) {
        var two = [];

        // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
        while (decNumber / 2 != 0) {
            var yu = parseInt(decNumber % 2);
            var shang = parseInt(decNumber / 2);
            decNumber = shang;
            two.unshift(yu);
         }
         //输入的数字宽度默认为空的情况下，默认输出全部转换后的
        if(decNumber_len.length===0){
            decNumber_len=two.length;
        }
        if(two.length<decNumber_len){
            console.log('要求输出的数字宽度大于实际转化后的字符宽度了哦');
            for (var i = 0; i <two.length; i++) {
               two = two.toString().replace(',', '');
             }
        }else{
            two=two.slice(0,decNumber_len);
            for (var i = 0; i< two.length; i++) {
               two = two.toString().replace(',', '');
             }
         }
        return two;
    }
    // 新的需求是，转化显示后的二进制数为bin-bit中输入的数字宽度，例如
    // dec-number为5，bin-bit为5，则转化后数字为00101
    // 如果bin-bit小于转化后的二进制本身位数，则使用原本的位数，如dec-number为5，bin-bit为2，依然输出101，但同时在console中报个错
    document.getElementById('trans-btn3').onclick = function(event) {
        var tenNum = document.getElementById('dec-number3').value;
        var bin_bit=document.getElementById('bin-bit3').value;
        if(tenNum.length===0){
            console.log('输入内容为空，无法转换！');
        }else if(tenNum < 0 || bin_bit<0 ){
               alert("不能为负数!");
          } else {
            document.getElementById('result3').innerHTML = dec3bin(tenNum,bin_bit);
        }
    }
// 编码3结束********************************************
   var part4Result=[];
   for(var i=1;i<=100;i++){
       var g=i/1%10;  //个位
       var s=i/10%10;  //十位
       var t=parseInt(i/10);

      if(i==3 || i%3==0 || g==3 || s==3 || t==3){
        part4Result.push('PA');
      }else{
          part4Result.push(i);
      }
   }
   document.getElementById('result4').innerHTML=part4Result.toString();
// 编码4束********************************************

   var date=new Date();
   var hour=date.getHours();
      console.log(hour);
      if(hour<8){
        document.getElementById('result6').innerHTML='早上好';
      }else if(hour<11){
        document.getElementById('result6').innerHTML='上午好';
      }
      else if(hour<13){
        document.getElementById('result6').innerHTML='中午好';
      }else if(hour<18){
        document.getElementById('result6').innerHTML='下午好';
      }else{
        document.getElementById('result6').innerHTML='晚上好';
      }
 

}