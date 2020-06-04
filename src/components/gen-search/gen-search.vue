<template>
    <div>
        <el-form :inline="true" :label-width="labelWidth">
            <gen-search-box>
                <el-form-item v-for="(item, index) in value" v-if="index < count" :key="index" :label="item.label">
                    <gen-input v-model="value[index]" v-if="item.type=='input'"></gen-input>
                    <gen-radio v-model="value[index]" v-if="item.type=='radio'"></gen-radio>
                    <gen-date v-model="value[index]" v-if="item.type=='date'"></gen-date>
                    <gen-date-range v-model="value[index]" v-if="item.type=='daterange'"></gen-date-range>
                    <gen-select v-model="value[index]" v-if="item.type=='select'"></gen-select>
                    <gen-switch v-model="value[index]" v-if="item.type=='switch'"></gen-switch>
                    <gen-cascader v-model="value[index]" v-if="item.type=='cascader'"></gen-cascader>
                </el-form-item>
                <template v-slot:drop>
                    <el-form-item v-for="(item, index) in value" v-if="index >= count" :key="index" :label="item.label">
                        <gen-input v-model="value[index]" v-if="item.type=='input'"></gen-input>
                        <gen-radio v-model="value[index]" v-if="item.type=='radio'"></gen-radio>
                        <gen-date v-model="value[index]" v-if="item.type=='date'"></gen-date>
                        <gen-date-range v-model="value[index]" v-if="item.type=='daterange'"></gen-date-range>
                        <gen-select v-model="value[index]" v-if="item.type=='select'"></gen-select>
                        <gen-switch v-model="value[index]" v-if="item.type=='switch'"></gen-switch>
                        <gen-cascader v-model="value[index]" v-if="item.type=='cascader'"></gen-cascader>
                    </el-form-item>
                </template>
                <template v-slot:btn>
                    <el-form-item>
                        <el-button type="primary" @click="search()">搜 索</el-button>
                        <el-button type="default" @click="reset">重 置</el-button>
                    </el-form-item>
                </template>
            </gen-search-box>
        </el-form>
    </div>
</template>

<script>
    import _ from "lodash";
    import genOperate from "./gen-operate";
    import genSearchBox from "./../gen-search-box";
    import genInput from "./gen-input";
    import genRadio from "./gen-radio";
    import GenDate from "./gen-date";
    import GenDateRange from "./gen-date-range";
    import GenSelect from "./gen-select";
    import GenSwitch from "./gen-switch";
    import GenCascader from "./gen-cascader";

    export default {
        name: "gen-search",
        components: {
            genOperate,
            genSearchBox,
            genInput,
            genRadio,
            GenDate,
            GenDateRange,
            GenSelect,
            GenSwitch,
            GenCascader,
        },
        props: {
            // value 传入的搜索条件
            value: {
                type: [Array],
                default(){
                    return [];
                }
            },
            labelWidth: {
                type: String,
                default: "80px"
            },
            // 显示的个数 其余展示
            count: {
                type: Number,
                default: 2
            }
        },
        data(){
            return {
                orangeData: [],
            }
        },
        created() {
            this.$nextTick(()=>{
                this.orangeData = _.cloneDeep(this.value);
            })
        },
        methods: {
            // 设置搜索条件
            // setVal(value){
            //     this.list = _.cloneDeep(value);
            // },
            // 获取搜索条件
            // getVal(){
            //     let list = this.value.map((item)=>{
            //         return item;
            //     });
            //     return list;
            // },

            search(){
                this.$emit("search", this.formatData())
            },

            reset(){
                this.$emit("input", this.orangeData);
            },

            // 格式化数据
            formatData(){
                let rules = [];
                this.value.forEach((item)=>{
                   if(item.data){
                       if (item.type=='daterange' && Array.isArray(item.data) && item.data.length >=2){
                           // 时间区间
                           rules.push({
                               field: item.field,
                               op: 'le',
                               data: item.data[0]
                           });
                           rules.push({
                               field: item.field,
                               op: 'ge',
                               data: item.data[1]
                           });
                       }else if (item.type=='select' && item.multiple && Array.isArray(item.data)){
                           // select 多选
                           if (item.data.length>0){
                               rules.push({
                                   field: item.field,
                                   op: "in",
                                   data: item.data.join(",")
                               })
                           }

                       }else if(item.type=='cascader' && Array.isArray(item.data)){
                           // cascader 数据处理
                           rules.push({
                               field: item.field,
                               op: "in",
                               data: item.data.join(",")
                           })
                       }else {
                           rules.push({
                               field: item.field,
                               op: item.op || 'eq',
                               data: item.data
                           })
                       }

                   }
                });

                return rules;
            }
        }
    }
</script>

<style lang="scss">

</style>