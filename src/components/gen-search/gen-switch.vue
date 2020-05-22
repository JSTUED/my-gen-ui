<template>
    <div>
        <el-switch
                v-model="value.data"
                :active-value="value.activeValue !== true ? value.activeValue : true"
                :inactive-value="value.inactiveValue !== false ? value.inactiveValue: false"
                :active-text="value.activeText"
                :inactive-text="value.inactiveText">
        </el-switch>
    </div>
</template>

<script>
    export default {
        name: "gen-switch",

        props: {
            value: {
                type: Object,
                default(){
                    return {
                        data: "",
                        type: "switch",
                        activeText: "",
                        inactiveText: "",
                        activeValue: true,
                        inactiveValue: false
                    };
                }
            }
        },

    }
</script>

<style scoped>

</style>