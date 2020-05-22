<template>
    <el-input placeholder="请输入" v-model="value.data" class="gen-input gen-search-w" @change="change" clearable>
        <gen-operate v-model="value.op" slot="prepend" @input="change"></gen-operate>
    </el-input>
</template>

<script>
    import genOperate from "./gen-operate";

    export default {
        name: "gen-input",
        components: {
            genOperate,
        },
        props: {
            value: {
                type: Object,
                default() {
                    return {
                        data: "",
                        op: ""
                    };
                }
            }
        },
        data(){
            return {
                op: this.value.op,
                data: this.value.data
            }
        },
        methods: {
            change(){
                // let value = _.cloneDeep(this.value);
                // value.op = this.op;
                // value.data = this.data;
                // this.$emit("input", value)
            }
        }
    }
</script>

<style lang="scss">
    .gen-input{
        .el-input{
            width: 100px;
        }
        .el-input-group__prepend{
            background-color: #fff;
        }
    }

</style>