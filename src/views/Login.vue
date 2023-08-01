<template>
    <div class="login">

        <div class="login-pannel">

            <el-form-item label="用户名">
                <el-input placeholder="请输入用户名" clearable />
            </el-form-item>
            <el-form-item label="密码">
                <el-input placeholder="请输入密码" clearable />
            </el-form-item>

        </div>
    </div>
</template>

<script >

</script>

<style lang="scss">
.login {
    width: 100%;
    height: calc(100vh);
    background-size: cover;
    background-position: center;
    background-image: url(../assets/login-bg.jpg);
    text-align: center;
}

.login-pannel {
    border: 1px;
    display: inline-block;
    width: 300px;
    height: 300px;
    // background-color: black;
}
</style>