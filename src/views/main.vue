<template>
    <el-container class="el-container-big">
        <el-container>
            <el-header class="el-header">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最新" name="first">


                    </el-tab-pane>
                    <el-tab-pane label="一周最热" name="second">

                    </el-tab-pane>
                    <el-tab-pane label="最热" name="third">

                    </el-tab-pane>
                    <el-tab-pane label="消灭0回复" name="fourth">

                    </el-tab-pane>
                </el-tabs>
            </el-header>
            <el-main class="el-main">
                最新
            </el-main>
            <el-footer class="el-footer">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="pageSizes"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                </el-pagination>
            </el-footer>

        </el-container>
        <el-aside class="el-aside">
            侧边
        </el-aside>


    </el-container>
</template>

<script>
    export default {
        name: "main",
        data() {
            return {
                activeName: 'first',
                currentPage: 1,
                pageSizes:[10, 20, 30, 40,50,100,200],//每一页的条数
                totalCount:400,//总条数
            };
        },
        methods: {
            handleClick(tab) {
                console.log(tab.name);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
    .el-container-big{
        padding: 0 100px;
    }
    .el-header, .el-footer {
        color: #ffffff;
        line-height: 60px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height: 500px;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

</style>