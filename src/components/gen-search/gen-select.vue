<template>
    <div>
        <!--远程数据-->
        <el-select v-if="value.remote" v-model="value.data" placeholder="请选择" remote clearable filterable :multiple="value.multiple"
                   :collapse-tags="value.collapseTags" class="gen-search-w" :remoteMethod="remoteMethod">
            <el-option
                    v-for="(item, index) in options"
                    :key="index"
                    :label="item[value.map && value.map['label'] ? value.map['label'] : 'label']"
                    :value="item[value.map && value.map['value'] ? value.map['value'] : 'value']">
            </el-option>
        </el-select>
        <!--本地数据-->
        <el-select v-else v-model="value.data" placeholder="请选择" clearable filterable :multiple="value.multiple"
                   :collapse-tags="value.collapseTags" class="gen-search-w">
            <el-option
                    v-for="(item, index) in value.options"
                    :key="index"
                    :label="item[value.map && value.map['label'] ? value.map['label'] : 'label']"
                    :value="item[value.map && value.map['value'] ? value.map['value'] : 'value']">
            </el-option>
        </el-select>

    </div>
</template>

<script>
    export default {
        name: "gen-select",

        props: {
            value: {
                type: Object,
                default(){
                    return {
                        data: "",
                        type: "select",
                        options: [],
                        map: {
                            label: "label",
                            value: "value"
                        }
                    };
                }
            }
        },

        data(){
          return {
              loading: false,
              options: []
          }
        },

        created(){
            this.$nextTick(()=>{
                if (this.value.remote){
                    this.remoteMethod();
                }
            })
        },

        methods: {
            remoteMethod(query) {
                this.loading = true;
                this.value.remoteMethod(query).then((res)=>{
                    this.options = res;
                    this.loading = false;
                }).catch((err)=>{
                    this.options = [];
                })
            }
        }
    }
</script>

<style scoped>

</style>