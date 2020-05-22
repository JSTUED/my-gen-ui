<template>
    <div>
        <el-date-picker
                v-model="value.data"
                class="gen-search-w"
                clearable
                format="yyyy/MM/dd"
                value-format="yyyy/MM/dd"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: "gen-date",

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