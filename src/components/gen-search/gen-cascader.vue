<template>
    <div>
        <el-cascader
                v-model="value.data"
                class="gen-search-w"
                :options="value.options"
                :props="value.props"
                :collapse-tags="value.collapseTags"
                filterable
                clearable>
        </el-cascader>
    </div>
</template>

<script>
    export default {
        name: "gen-cascader",

        props: {
            value: {
                type: Object,
                default(){
                    return {
                        data: "",
                        type: "cascader",
                        options: [],
                        props: {}
                    };
                }
            }
        },

    }
</script>

<style scoped>

</style>