<template>
    <div>
        <genSearchSet :value='filters' :list='list' :fieldOptions='fieldOptions' :rulesOptions='rulesOptions'></genSearchSet>
    </div>
</template>

<script>

export default {
    data() {
        return {
            filters: {
                groupOp: "",
                rulesName: '',
                isPrivate: false,
                rules: [
                    {
                        field: "",
                        op: "",
                        data: ""
                    }
                ],
            },
            fieldOptions: [
                { label: "工单发起人", value: 1 },
                { label: "工单状态", value: 2 },
                { label: "工单主题", value: 3 },
                { label: "创建日期", value: 4 }
            ],
            rulesOptions: [
                { label: "等于", value: 'eq'},
                { label: "不等", value: 'ne'},
                { label: "开始于", value: 'bw'},
                { label: "结束于", value: 'ew' },
                { label: "包含", value: 'cn' },
                { label: "属于", value: 'in' },
                { label: "不属于", value:'ni' },
                { label: "小于", value: 'lt' },
                { label: "小于等于", value:'le' },
                { label: "大于", value: 'gt'},
                { label: "大于等于", value: 'ge'},
                { label: "空值或null", value: 'nu' },
                { label: "非空", value: 'nn' }
            ],
            list: [
                {
                    id: 1,
                    name: '搜索方案一',
                    groupOp: "AND",
                    rulesName: '搜索条件一',
                    isPrivate: true,
                    rules: [
                        {
                            field: 1,
                            op: "eq",
                            data: "asdfasd"
                        }
                    ],
                },
                {
                    id: 2,
                    name: '搜索方案二',
                    groupOp: "OR",
                    rulesName: '搜索条件二',
                    isPrivate: false,
                    rules: [
                        {
                            field: 2,
                            op: "bw",
                            data: "cccc"
                        }
                    ],
                },
                {
                    id: 3,
                    name: '搜索方案三',
                    groupOp: "AND",
                    rulesName: '搜索条件三',
                    isPrivate: true,
                    rules: [
                        {
                            field: 3,
                            op: "gt",
                            data: "qwer"
                        }
                    ],
                }
            ]
        };
    },
    mounted() {},
    methods: {
    }
};
</script>

<style>
</style>