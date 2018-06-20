var MyApp = san.defineComponent({
    template: `<div id="tableBox">
				<button on-click="add">添加</button><br>
				<table class="table table-bordered" id="table-wrapper">
					<tr>
						<th>姓名</th>
						<th>审核状态</th>
					    <th>操作</th>
					</tr>
					<tr s-for="p in persons">
						<td>{{ p.name }}</td>
						<td>{{ p.auditStatus }}</td>
						<td>
							<button s-if="p.auditStatus != '待审核'" on-click="del($index)">删除</button>
							<button s-else on-click="audit($index)">审核</button>
						</td>
					</tr>
				</table>
			</div>`,

    initData: function() {
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
        };
    },
    add: function() {
        let
           newname= prompt('请输入姓名', '');
        // 姓名验证
        let regName =  /^[\u4E00-\u9FA5A-Za-z0-9]{2,6}$/;
        if (!regName.test(newname)) {
            alert('请输入2~6位中文、英文字母或数字');
            return;
        }
        this.data.push('persons', { name: newname, auditStatus: '待审核' });
    },
    del: function(index) {

        this.data.removeAt('persons', index);
    },
    audit: function(index) {
        this.data.set('persons[' + index + '].auditStatus', '合格');
    }
});

var myApp = new MyApp();
myApp.attach(document.body);