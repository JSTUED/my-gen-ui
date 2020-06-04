<template>
  <div class="home">
    <gen-form ref="genForm" v-model="filters.rules" :hi="hi" label-width="100px" @search="search"></gen-form>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import axios from "axios";

  /**
   * filters=
   {
      groupOp:"AND",
      rules:[
      {field: "fieldName", op: "cn", data: "满赛"}
      {field: "fieldDateTime", op: "ge", data: "2020/05/07"}
      {field: "fieldDateTime", op: "le", data: "2020/05/13"}
    ]
    sort:[
      {field: "fieldName", order: "desc"},
      {field: "fieldName", order: "desc"}
    ],
    "pagination": {
          "pageSize": 10,
          "currentPage": 1
      }
    }
   */
  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    data(){
      return {
        filters: {
          groupOp:"AND",
          rules:[
            {field: "fieldName", op: "cn", data: "满赛", type: "input", label: "姓名："},
            {
              field: "dept",
              data: "",
              type: "cascader",
              label: "部门：",
              options: [
                { name: "部门1", id: 1},
                { name: "部门2", id: 2},
              ],
              props: {
                label: "name",
                value: "id",
                // multiple: true,
              }
            },
            {field: "isActive", data: 20, type: "switch", label: "状态：", activeValue: 10, inactiveValue: 20, activeText: "激活", inactiveText: "禁用"},
            {
              field: "reduction",
              data: "",
              type: "select",
              label: "减速机：",
              remote: true,
              options: [
                { name: "张三", id: 1},
                { name: "李四", id: 2},
              ],
              remoteMethod(){
                return new Promise(((resolve, reject) => {
                  axios({
                    url: "http://admin.tsuntien.com/tsuntien_api/web/reduction/getCategory",
                    method: "post",
                    data: {
                      active: true,
                      language: "zh-cn",
                      sortName: "sort"
                    }
                  }).then((res)=>{
                      resolve(res.data.data)
                  })
                }))
              },
              map: {
                label: "name",
                value: "id"
              },
              multiple: true,
              collapseTags: true
            },
            {field: "orderDate", data: "", type: "daterange", label: "下单时间："},
            {field: "createDate", data: "2020/05/13", type: "date", label: "创建时间："},
            // {field: "fieldDateTime", op: "ge", data: "2020/05/07", type: "input"},
            // {field: "fieldDateTime", op: "le", data: "2020/05/13", type: "input"},
            // {field: "fieldDateTime", op: "le", data: "2020/05/13", type: "input"},
            // {field: "fieldDateTime", op: "le", data: "2020/05/13", type: "input"},
            {field: "sex", data: 1, type: "radio", label: "性别：", options: [{label: "男", value: 1}, { label: "女", value: 0}]},
          ],
          sort:[
            {field: "fieldName", order: "desc"},
            {field: "fieldName", order: "desc"}
          ],
          pagination: {
            pageSize: 10,
            currentPage: 1
          }
        },
        hi: "xx"
      }
    },
    created(){
      setTimeout(()=>{
        console.log("5000");
        // this.filters.rules = [
        //   {field: "fieldName", op: "cn", data: "满赛22", type: "input"},
        //   {field: "fieldDateTime", op: "ge", data: "2020/05/07", type: "daterange"},
        //   {field: "fieldDateTime", op: "le", data: "2020/05/13", type: "input"},
        //   {field: "fieldDateTime", op: "le", data: "2020/05/13", type: "input"}
        // ]

        this.filters.rules[1].options.push({
          id: 3,
          name: "部门3",
          children: [
            {
              id: 4,
              name: "子部门1"
            }
          ]
        })
      }, 5000)
    },
    methods: {
      search(data){
        console.log(data);
      }
    }
  }
</script>
