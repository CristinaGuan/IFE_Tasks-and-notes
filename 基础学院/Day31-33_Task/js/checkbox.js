/*
* @Author: guanxy
* @Date:   2018-06-06 12:06:56
* @Last Modified by:   guanxy
* @Last Modified time: 2018-06-13 00:12:56
*/
window.onload = function() {
    var region_select_div = document.getElementById('region-select');
    var product_select_div = document.getElementById('product-select');
    var div_table_box = document.getElementById('table-wrapper');
    var list=[];
    var input =region_select_div.getElementsByTagName('input');
    for(var i=0;i<input.length;i++){
    	change(input[i]);
    	console.log(input[i]);
    }
    function change(ev){
        ev.onchange = function() {
        var selectVal=ev.value;
        if(ev.type==="checkbox"){
           var checkType=ev.getAttribute("checkbox-type");
           if(checkType==="all"){
           	  console.log("aaa");
           	  for(var i=1;i<input.length;i++){
           	  	input[i].checked="checked";
           	  }
           }else{
           	 console.log("bbb");
           	
           }
        }
     }
    }
    function getRegionSelectVal(region,product) {
        list=[];
        if(product.length!==0){
           for(var l = 0; l <sourceData.length; l++){
            if (sourceData[l].region === region && sourceData[l].product ===product) {
                    list.push(sourceData[l]);
            }
        } 
        }else{
            for(var l = 0; l <sourceData.length; l++){
            if (sourceData[l].region === region) {
               list.push(sourceData[l]);
            }
         }  
        }
        
        return list;
    }


    function createTable(data) {
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var th = document.createElement('th');
        var tr = document.createElement('tr');
        //表头数据
        var headers = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
        for (var i = 0; i < headers.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = headers[i];
            tr.appendChild(th);
        }
        table.appendChild(tr);
        for (var l = 0; l < data.length; l++) {
                var tbodyData = [];
                tbodyData.push(data[l].product);
                tbodyData.push(data[l].region);
                for (var k = 0; k < data[l].sale.length; k++) {
                    tbodyData.push(data[l].sale[k]);
                }
                var tr = document.createElement('tr');
                for (var j = 0; j < tbodyData.length; j++) {
                    var td = document.createElement("td");
                    td.innerHTML = tbodyData[j];
                    tr.appendChild(td);
                }

                table.appendChild(tr);
            

        }

        return table;
    }

}