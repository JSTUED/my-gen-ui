<template>
    <div>
        <el-date-picker
                v-model="value.data"
                class="gen-search-w"
                clearable
                :editable="false"
                format="yyyy/MM/dd"
                value-format="yyyy/MM/dd"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: "gen-date-range",

        props: {
            value: {
                type: Object,
                default(){
                    return {
                        data: "",
                        type: "date"
                    };
                }
            }
        },

        created(){
            this.$nextTick(()=>{

            })
        },

        methods: {

        }
    }
</script>

<style scoped>

</style>