/*
 * @Author: guanxy
 * @Date:   2018-06-06 12:06:34
 * @Last Modified by:   guanxy
 * @Last Modified time: 2018-06-12 22:55:59
 */

window.onload = function() {
    var selectRegionEle = document.getElementById('region-select');
    var selectProductEle = document.getElementById('product-select');
    var div_table_box = document.getElementById('table-wrapper');
    var list=[];
    change(selectRegionEle);
    change(selectProductEle);
    function change(ev){
        ev.onchange = function() {
         var region_selected = selectRegionEle.value;
          var product_selected = selectProductEle.value;
        getRegionSelectVal(region_selected,product_selected);
        div_table_box.innerHTML = null;
        div_table_box.appendChild(createTable(list));
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