<template>
    <el-select :value="value" placeholder="请选择" @change="changeOperate">
        <el-option v-for="(value, key, index) in OperateList" :label="value" :value="key" :key="index"></el-option>
    </el-select>
</template>

<script>
    import { OperateList } from "@/const/index";

    export default {
        name: "gen-operate",
        // model: {
        //     prop: 'operate',
        //     event: 'input'
        // },
        props: {
            value: {
                type: [String, Number],
                default: ""
            }
        },
        data(){
            return {
                OperateList: OperateList,
                // value: "",
            }
        },
        created(){
            this.$nextTick(()=>{

            })
        },
        methods: {
            changeOperate(val){
                this.$emit("input", val)
            },
        }

    }
</script>

<style lang="scss">

</style>