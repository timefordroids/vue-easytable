(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b01f334"],{2832:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.virtualScrollOption.data,columns:e.db.virtualScrollOption.columns}})],1)},r=[],l=n("3ef3"),o=n("d890"),i={components:{tpl:l["a"]},props:{anchor:{type:String,default:"虚拟滚动配置"},desc:{type:String,default:"virtualScrollOption"}},data:function(){return{db:o["a"]}}},c=i,d=n("2877"),s=Object(d["a"])(c,a,r,!1,null,null,null);t["a"]=s.exports},4746:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("虚拟滚动")]),n("Explain"),n("Base"),n("AutoHeight"),n("RowCheckbox"),n("RowRadio"),n("RowExpand"),n("ColumnFixed"),n("FooterSummary"),n("API",{attrs:{title:"API",anchor:"API",desc:"virtualScrollOption 虚拟滚动配置"}})],1)},r=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、属性"),n("code",[e._v("virtualScrollOption")]),e._v("开启虚拟滚动。建议当一次性需要展示 "),n("strong",[e._v("1000 以上")]),e._v(" 数据时使用，可以支撑 "),n("strong",[e._v("20 万以上")]),e._v("数据"),n("br"),e._v(" 2、属性"),n("code",[e._v("maxHeight")]),e._v("设置虚拟滚动区域的最大高度。"),n("code",[e._v("maxHeight")]),e._v("为必传属性"),n("br"),e._v(" 3、如果需要结合"),n("strong",[e._v("行展开")]),e._v("、"),n("strong",[e._v("行单选")]),e._v("、"),n("strong",[e._v("行多选")]),e._v("还需要指定属性"),n("code",[e._v("rowKeyFieldName")]),e._v("。"),n("code",[e._v("rowKeyFieldName")]),e._v("属性对应行数据的列名"),n("br"),e._v(" 4、"),n("strong",[e._v("开启虚拟滚动功能后，其他功能依然可用")])])])])}],i=n("2877"),c={},d=Object(i["a"])(c,l,o,!1,null,null,null),s=d.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"基础功能",fileName:"base.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      :max-height="500"\n      :virtual-scroll-option="virtualScrollOption"\n      :columns="columns"\n      :table-data="tableData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        virtualScrollOption: {\n          // 是否开启\n          enable: true,\n        },\n        columns: [\n          { field: "index", key: "a", title: "#", width: 100, align: "left" },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initData() {\n        let data = [];\n        for (let i = 0; i < 10000; i++) {\n          data.push({\n            rowKey: i,\n            index: i,\n            name: `name${i}`,\n            hobby: `hobby${i}`,\n            address:`address${i}`,\n          });\n        }\n\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},b=[];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},t=[],n={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],t=0;t<1e4;t++)e.push({rowKey:t,index:t,name:"name".concat(t),hobby:"hobby".concat(t),address:"address".concat(t)});this.tableData=e}},created:function(){this.initData()}};return p({render:e,staticRenderFns:t},n)}()}},y=h,v=Object(i["a"])(y,u,b,!1,null,null,null),w=v.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"任意行高",fileName:"auto-height.md"}}),n("demo-block",[n("div",[n("p",[e._v("支持非固定行高")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      fixed-header\n      :max-height="500"\n      :virtual-scroll-option="virtualScrollOption"\n      :columns="columns"\n      :table-data="tableData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        virtualScrollOption: {\n          // 是否开启\n          enable: true,\n        },\n        columns: [\n          { field: "index", key: "a", title: "#", width: 100, align: "left" },\n          {\n            field: "name",\n            key: "b",\n            title: "Name",\n            width: 200,\n            align: "left",\n            renderBodyCell: ({ row }, h) => {\n              return <span domPropsInnerHTML={row.name}></span>;\n            },\n          },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      getRandom(min, max) {\n        return Math.floor(Math.random() * (max - min) + min);\n      },\n      initData() {\n        let data = [];\n        for (let i = 0; i < 10000; i++) {\n          let value = "";\n          if (i % 2 === 0) {\n            const rowCount = this.getRandom(3, 5);\n\n            for (let i = 0; i < rowCount; i++) {\n              value += `this is the long word.<br />`;\n            }\n          } else {\n            value = `name${i}`;\n          }\n\n          data.push({\n            rowKey: i,\n            index: i,\n            name: value,\n            hobby: `hobby${i}`,\n            address: `address${i}`,\n          });\n        }\n\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},g=[];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},t=[],n={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,t){var n=e.row;return t("span",{domProps:{innerHTML:n.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{getRandom:function(e,t){return Math.floor(Math.random()*(t-e)+e)},initData:function(){for(var e=[],t=0;t<1e4;t++){var n="";if(t%2===0)for(var a=this.getRandom(3,5),r=0;r<a;r++)n+="this is the long word.<br />";else n="name".concat(t);e.push({rowKey:t,index:t,name:n,hobby:"hobby".concat(t),address:"address".concat(t)})}this.tableData=e}},created:function(){this.initData()}};return x({render:e,staticRenderFns:t},n)}()}},_=j,P=Object(i["a"])(_,O,g,!1,null,null,null),S=P.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"结合行多选",fileName:"row-checkbox.md"}}),n("demo-block",[n("div",[n("p",[e._v("行多选，要指定属性"),n("code",[e._v("rowKeyFieldName")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      fixed-header\n      :max-height="500"\n      :virtual-scroll-option="virtualScrollOption"\n      :checkbox-optipon="checkboxOptipon"\n      :columns="columns"\n      :table-data="tableData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        virtualScrollOption: {\n          // 是否开启\n          enable: true,\n        },\n        checkboxOptipon: {\n          // 行选择改变事件\n          selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {\n            console.log(row, isSelected, selectedRowKeys);\n          },\n          // 全选改变事件\n          selectedAllChange: ({ isSelected, selectedRowKeys }) => {\n            console.log(isSelected, selectedRowKeys);\n          },\n        },\n\n        columns: [\n          {\n            field: "",\n            key: "a",\n            // type=checkbox\n            type: "checkbox",\n            title: "",\n            width: 50,\n            align: "center",\n          },\n          {\n            field: "name",\n            key: "b",\n            title: "Name",\n            width: 200,\n            align: "left",\n            renderBodyCell: ({ row }, h) => {\n              return <span domPropsInnerHTML={row.name}></span>;\n            },\n          },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initData() {\n        let data = [];\n        for (let i = 0; i < 10000; i++) {\n          data.push({\n            rowKey: i,\n            name: `name${i}`,\n            hobby: `hobby${i}`,\n            address: `address${i}`,\n          });\n        }\n\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},E=[];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"checkbox-optipon":e.checkboxOptipon,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},t=[],n={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},checkboxOptipon:{selectedRowChange:function(e){var t=e.row,n=e.isSelected,a=e.selectedRowKeys;console.log(t,n,a)},selectedAllChange:function(e){var t=e.isSelected,n=e.selectedRowKeys;console.log(t,n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,t){var n=e.row;return t("span",{domProps:{innerHTML:n.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],t=0;t<1e4;t++)e.push({rowKey:t,name:"name".concat(t),hobby:"hobby".concat(t),address:"address".concat(t)});this.tableData=e}},created:function(){this.initData()}};return C({render:e,staticRenderFns:t},n)}()}},N=H,A=Object(i["a"])(N,K,E,!1,null,null,null),F=A.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"结合行单选",fileName:"row-radio.md"}}),n("demo-block",[n("div",[n("p",[e._v("行单选，要指定属性"),n("code",[e._v("rowKeyFieldName")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      fixed-header\n      :max-height="500"\n      :virtual-scroll-option="virtualScrollOption"\n      :radio-option="radioOption"\n      :columns="columns"\n      :table-data="tableData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        virtualScrollOption: {\n          // 是否开启\n          enable: true,\n        },\n        radioOption: {\n          // 行选择改变事件\n          selectedRowChange: ({ row }) => {\n            console.log(row);\n          },\n        },\n\n        columns: [\n          {\n            field: "",\n            key: "a",\n            // type=radio\n            type: "radio",\n            title: "",\n            width: 50,\n            align: "center",\n          },\n          {\n            field: "name",\n            key: "b",\n            title: "Name",\n            width: 200,\n            align: "left",\n            renderBodyCell: ({ row }, h) => {\n              return <span domPropsInnerHTML={row.name}></span>;\n            },\n          },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initData() {\n        let data = [];\n        for (let i = 0; i < 10000; i++) {\n          data.push({\n            rowKey: i,\n            name: `name${i}`,\n            hobby: `hobby${i}`,\n            address: `address${i}`,\n          });\n        }\n\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},I=[];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"radio-option":e.radioOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},t=[],n={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},radioOption:{selectedRowChange:function(e){var t=e.row;console.log(t)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,t){var n=e.row;return t("span",{domProps:{innerHTML:n.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],t=0;t<1e4;t++)e.push({rowKey:t,name:"name".concat(t),hobby:"hobby".concat(t),address:"address".concat(t)});this.tableData=e}},created:function(){this.initData()}};return L({render:e,staticRenderFns:t},n)}()}},q=J,z=Object(i["a"])(q,M,I,!1,null,null,null),G=z.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"结合行展开",fileName:"row-expand.md"}}),n("demo-block",[n("div",[n("p",[e._v("行展开，要指定属性"),n("code",[e._v("rowKeyFieldName")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      fixed-header\n      :max-height="500"\n      :virtual-scroll-option="virtualScrollOption"\n      :expand-option="expandOption"\n      :columns="columns"\n      :table-data="tableData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        virtualScrollOption: {\n          // 是否开启\n          enable: true,\n        },\n        expandOption: {\n          render: ({ row, column, rowIndex }, h) => {\n            return (\n              <p>\n                My name is <span style="color:#1890ff;">{row.name}</span>,I\'m living in{" "}\n                {row.address}\n              </p>\n            );\n          },\n        },\n\n        columns: [\n          {\n            field: "",\n            key: "a",\n            // type=expand\n            type: "expand",\n            title: "",\n            width: 50,\n            align: "center",\n          },\n          {\n            field: "name",\n            key: "b",\n            title: "Name",\n            width: 200,\n            align: "left",\n            renderBodyCell: ({ row }, h) => {\n              return <span domPropsInnerHTML={row.name}></span>;\n            },\n          },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initData() {\n        let data = [];\n        for (let i = 0; i < 10000; i++) {\n          data.push({\n            rowKey: i,\n            name: `name${i}`,\n            hobby: `hobby${i}`,\n            address: `address${i}`,\n          });\n        }\n\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},U=[];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"expand-option":e.expandOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},t=[],n={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},expandOption:{render:function(e,t){var n=e.row;e.column,e.rowIndex;return t("p",["My name is ",t("span",{style:"color:#1890ff;"},[n.name]),",I'm living in"," ",n.address])}},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,t){var n=e.row;return t("span",{domProps:{innerHTML:n.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],t=0;t<1e4;t++)e.push({rowKey:t,name:"name".concat(t),hobby:"hobby".concat(t),address:"address".concat(t)});this.tableData=e}},created:function(){this.initData()}};return W({render:e,staticRenderFns:t},n)}()}},Z=Y,ee=Object(i["a"])(Z,Q,U,!1,null,null,null),te=ee.exports,ne=n("655f"),ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"结合固定列",fileName:"column-fixed.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      fixed-header\n      border-y\n      :max-height="500"\n      :scroll-width="1600"\n      :virtual-scroll-option="virtualScrollOption"\n      :columns="columns"\n      :table-data="tableData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        virtualScrollOption: {\n          // 是否开启\n          enable: true,\n        },\n        columns: [\n          { field: "col1", key: "a", title: "col1", width: 50, fixed: "left" },\n          {\n            title: "col2-col3",\n            fixed: "left",\n            children: [\n              {\n                field: "col2",\n                key: "b",\n                title: "col2",\n                width: 50,\n              },\n              {\n                field: "col3",\n                key: "c",\n                title: "col3",\n                width: 50,\n              },\n            ],\n          },\n          {\n            title: "col4-col5-col6",\n            children: [\n              {\n                title: "col4-col5",\n                children: [\n                  {\n                    field: "col4",\n                    key: "d",\n                    title: "col4",\n                    width: 130,\n                  },\n                  {\n                    field: "col5",\n                    key: "e",\n                    title: "col5",\n                    width: 140,\n                  },\n                ],\n              },\n              {\n                title: "col6",\n                field: "col6",\n                key: "f",\n                width: 140,\n              },\n            ],\n          },\n          { field: "col7", key: "g", title: "col7", width: 50, fixed: "right" },\n          { field: "col8", key: "h", title: "col8", width: 50, fixed: "right" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initData() {\n        let data = [];\n        for (let i = 0; i < 10000; i++) {\n          data.push({\n            rowKey: i,\n            col1: i,\n            col2: i,\n            col3: i,\n            col4: i,\n            col5: i,\n            col6: i,\n            col7: i,\n            col8: i,\n            col9: i,\n            col10: i,\n          });\n        }\n\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},re=[];function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ce={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"fixed-header":"","border-y":"","max-height":500,"scroll-width":1600,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},t=[],n={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:50,fixed:"right"},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initData:function(){for(var e=[],t=0;t<1e4;t++)e.push({rowKey:t,col1:t,col2:t,col3:t,col4:t,col5:t,col6:t,col7:t,col8:t,col9:t,col10:t});this.tableData=e}},created:function(){this.initData()}};return oe({render:e,staticRenderFns:t},n)}()}},de=ce,se=Object(i["a"])(de,ae,re,!1,null,null,null),ue=se.exports,be=n("2832"),fe={name:"basic-main",components:{Explain:s,Base:w,AutoHeight:S,RowCheckbox:F,RowRadio:G,RowExpand:te,ColumnFixed:ue,FooterSummary:ne["a"],API:be["a"]}},pe=fe,me=Object(i["a"])(pe,a,r,!1,null,null,null);t["default"]=me.exports},"655f":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"footer 结合虚拟滚动",fileName:"virtual-scroll.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、表格设置了虚拟滚动，footer 汇总自动支持，无需额外配置")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      fixed-header\n      :max-height="500"\n      :virtual-scroll-option="virtualScrollOption"\n      :columns="columns"\n      :table-data="tableData"\n      :footer-data="footerData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        virtualScrollOption: {\n          // 是否开启\n          enable: true,\n        },\n\n        columns: [\n          {\n            field: "name",\n            key: "b",\n            title: "Name",\n            width: 200,\n            align: "left",\n          },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initData() {\n        let data = [];\n        for (let i = 0; i < 10000; i++) {\n          data.push({\n            rowKey: i,\n            name: `name${i}`,\n            hobby: `hobby${i}`,\n            address: `address${i}`,\n          });\n        }\n\n        this.tableData = data;\n\n        this.footerData = [\n          {\n            rowKey: 0,\n            name: "平均值",\n            date: 1100,\n            hobby: 1200,\n            address: 1300,\n          },\n          {\n            rowKey: 1,\n            name: "汇总值",\n            date: 701000,\n            hobby: 801000,\n            address: 801000,\n          },\n        ];\n      },\n    },\n    created() {\n      this.initData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},r=[];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"footer-data":e.footerData,"row-key-field-name":"rowKey"}})],1)]],2)},t=[],n={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],t=0;t<1e4;t++)e.push({rowKey:t,name:"name".concat(t),hobby:"hobby".concat(t),address:"address".concat(t)});this.tableData=e,this.footerData=[{rowKey:0,name:"平均值",date:1100,hobby:1200,address:1300},{rowKey:1,name:"汇总值",date:701e3,hobby:801e3,address:801e3}]}},created:function(){this.initData()}};return o({render:e,staticRenderFns:t},n)}()}},d=c,s=n("2877"),u=Object(s["a"])(d,a,r,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-0b01f334.293b1404.js.map