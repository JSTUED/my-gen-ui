<template>
    <el-radio-group v-model="value.data">
        <el-radio v-for="(item, index) in value.options" :label="item.value" :key="index" >{{item.label}}</el-radio>
    </el-radio-group>
</template>

<script>
    /**
     * value : { data: "xx", options: [ { label: "选项一", value: "值1"} ]}
     */
    export default {
        name: "gen-radio",
        props: {
          value: {
              type: Object,
              default(){
                  return {
                      data: "",
                      options: []
                  };
              }
          }
        },
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>