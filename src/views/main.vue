<template>
    <el-container class="el-container-big">
        <el-container>
            <el-header class="el-header top">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最新" name="first">


                    </el-tab-pane>
                    <el-tab-pane label="推荐" name="second">

                    </el-tab-pane>
                    <el-tab-pane label="最热" name="third">

                    </el-tab-pane>
                    <el-tab-pane label="消灭0回复" name="fourth">

                    </el-tab-pane>
                </el-tabs>
            </el-header>
            <el-main class="el-main center">
                <el-container style="width: 70%;">
                    <el-card shadow="hover">
                        <el-header class="box-top" style="height: 45px;">
                            <div>
                                <el-avatar class="nav-avatar" size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                            </div>
                            <div style="margin-left: 10px;">
                                <div style="font-size: 14px;">你的小白象</div>
                                <div style="font-size: 12px;color: #999999;">9月26 8:24</div>
                            </div>
                        </el-header>
                        <el-main class="box-mid">
                            <div>表白我老婆</div>
                            <div style="width: 100%;height: 100%;">
                                <img src="../assets/xyjy.jpg" style=" width: 100%;height: 100%; object-fit: contain;" >
                            </div>
                        </el-main>
                        <el-footer class="box-bot" style="height: 30px;">
                            <img class="bot-img" src="../assets/dz.png">
                            <span class="bot-text">1</span>
                            <el-divider direction="vertical"></el-divider>
                            <img class="bot-img" src="../assets/pl.png">
                            <span class="bot-text">1</span>
                            <el-divider direction="vertical"></el-divider>
                            <img class="bot-img" src="../assets/sc.png" >
                            <span class="bot-text">1</span>

                        </el-footer>
                    </el-card>
                </el-container>
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
            <el-container>
                <el-header>
                    公告
                </el-header>
                <el-main>
                    热门推荐
                </el-main>
                <el-main>
                    内容推广
                </el-main>
            </el-container>
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
        color: #000;

    }



    .box-top{
        width: 100%;

        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #ffffff;
    }
    .box-mid{
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #ffffff;

    }
    .box-bot{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        border-top: 1px solid #eee;
        background: #ffffff;
    }
    .bot-img{
        width: 20px;
        height: 20px;

    }
    .bot-text{
        color: #999;
        margin-left: 5px;
        margin-right: 20px;
        font-size: 12px;
    }



</style>