<!--无人机动态信息表，主要需求：
    1. 动态展示无人机状态信息
    2. 动态展示执行时间进度条
    3. 按告警级别排序
    4. 告警解除
    5. 查看无人机详细信息
    6. 分页-->
<template>
    <div id="tab-harbour-in">
        <el-table
                :data="tableData"
                height="100%"
                :header-cell-style="{background:'#424242'}"
                :cell-class-name="tablebody">
            <!--表格的每列字段+宽度-->
            <el-table-column prop="number" label="编号" width="50%">
            </el-table-column>
            <el-table-column prop="flight" label="流水号" width="50%">
            </el-table-column>
            <el-table-column prop="type" label="机型">
            </el-table-column>
            <el-table-column prop="distance" label="距离/高度">
            </el-table-column>
            <el-table-column prop="location" label="起飞点">
            </el-table-column>
            <el-table-column prop="execute" label="执行">
              <template slot-scope="scope">
                <execute_box></execute_box>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Execute_box from "@/components/monitor/execute_box";
    export default {
        name: "harbour_io",
      components: {Execute_box},
      methods: {
            tablebody() {
                return 'cell-back'
            },
        },
        /*动态信息测试数据,实际数据由后台提供*/
        data() {
            return {
                tableData: [{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                }, {
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                },{
                    number: '7057',
                    flight: '001',
                    type: '981A',
                    distance: '30m/150m',
                    location: 'F1 | 01',
                    execute: '-----',
                }]
            }
        }
    }
</script>

<style>
    /*先将父组件大小占满整个布局框*/
    #tab-harbour-in {
        width: 100%;
        height: 100%;
    }
    .el-table .el-table__cell {
        color: #b0b0b0;   /*表格字体颜色*/
        border-radius: 1px;
        font-size: 2px;
        text-align: center;
        box-sizing: inherit;
        padding: 0; /*单元格左右padding设置为0*/
    }


    /*鼠标滑过颜色*/
    .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: rgba(38, 38, 38, 0.75) !important;
        color: white !important;
    }

    /*表头字体样式*/
    .el-table th > .cell {
        color: #b0b0b0;
        font-size: 1px;
        line-height: 18px;
    }
    /*表头padding*/
    .el-table th.el-table__cell>.cell {
        padding-right: 0;
        padding-left: 0;
    }


    /* 表格内边框样式 */
    .el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
        border: 1px solid #121212;
    }

    /* 表格体背景颜色 */
    .el-table .cell-back {
        background: #333333;
    }

    /*单元格等样式*/
    .el-table .cell {
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: keep-all;
        line-height: 18px;
        padding-left: 0;
        padding-right: 0;
    }


    /*!*固定表头，且加滚动条时，解决表头错位*!*/
    /*.el-table th.gutter, colgroup.gutter {*/
    /*    width: 1vh !important;*/
    /*}*/
    /*.el-table__header colgroup col[name="gutter"] {*/
    /*    display: table-cell !important;*/
    /*}*/


    /*!*滚动条凹槽的颜色，还可以设置边框属性 *!*/
    /*::-webkit-scrollbar-track-piece {*/
    /*    display: none;*/
    /*    -webkit-border-radius: 2em;*/
    /*    -moz-border-radius: 2em;*/
    /*    border-radius: 2em;*/
    /*}*/
    /*滚动条样式*/
    ::-webkit-scrollbar {
        display: none;
    }

    /*滚动条的滑块背景色*/
    ::-webkit-scrollbar-thumb {
        background: #424242;
        border-radius: 1vh;
    }
    /*滚动条的凹槽颜色*/
    ::-webkit-scrollbar-track {
        background: #121212;
    }
    /*去除表格底部的白线（不知道什么原理）*/
    .el-table::before {
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
    }

</style>
