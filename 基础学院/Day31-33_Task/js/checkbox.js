/*
 * @Author: guanxy
 * @Date:   2018-06-06 12:06:56
 * @Last Modified by:   guanxy
 * @Last Modified time: 2018-06-15 00:18:16
 */
window.onload = function() {
    var region_select_div = document.getElementById('region-select');
    var product_select_div = document.getElementById('product-select');
    var div_table_box = document.getElementById('table-wrapper');
    var list = [],
        rCArr = [],
        pCArr = [],
        box = [];
    var regionInput = region_select_div.getElementsByTagName('input');
    var productInput = product_select_div.getElementsByTagName('input');
    eleChange(regionInput);
    eleChange(productInput);


    function eleChange(ele) {
        for (var i = 0; i < ele.length; i++) {
            change(ele[i], ele);
        }
    }

    function change(ev, input) {
        ev.onchange = function() {
            var selectVal = ev.value;
            if (ev.type === "checkbox") {
                var checkType = ev.getAttribute("checkbox-type");
                if (checkType === "all") {
                    if (ev.checked) {
                        for (var i = 1; i < input.length; i++) {
                            input[i].checked = "checked";
                        }
                        input == regionInput ? rCArr = getCheckVal(input, box) : pCArr = getCheckVal(input, box);
                        // createTable(setTableData());
                        div_table_box.innerHTML = null;
                        div_table_box.appendChild(createTable(setTableData()));
                    }

                } else {
                    var c = 0;
                    for (var i = 1; i < input.length; i++) {
                        if (input[i].checked) {
                            c++;
                        }
                    }
                    if (c == input.length - 1) {
                        input[0].checked = "checked";


                    } else {
                        input[0].checked = false;
                    }
                    input == regionInput ? rCArr = getCheckVal(input, box) : pCArr = getCheckVal(input, box);
                  
                    div_table_box.innerHTML = null;
                    div_table_box.appendChild(createTable(setTableData()));
                    
                }
            }
        }


    }

    function getCheckVal(arr, checkedArrlist) {
        checkedArrlist = [];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i].checked) {
                checkedArrlist.push(arr[i].value);
            }
        }
        return checkedArrlist;
    }

    function setTableData() {
        var data = [],
            databox = [];
        if (rCArr.length != 0) {
            if (pCArr.length != 0) {
                for (var r = 0; r < rCArr.length; r++) {
                    for (var s = 0; s < sourceData.length; s++) {
                        if (rCArr[r] == sourceData[s].region) {
                            databox.push(sourceData[s]);

                        }
                    }
                }
        
                for (var p = 0; p < pCArr.length; p++) {
                    for (var s = 0; s < databox.length; s++) {
                        if (pCArr[p] == databox[s].product) {
                            data.push(databox[s]);

                        }
                    }
                }
              
            }

        }
        return data;
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