<template>
    <Header></Header>
    <router-view />
    <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
}
body {
    font-family: "Martel Sans", sans-serif;
    background-color: #ffffff;
    color: #4e4f4f;
}
.wrapper {
    max-width: 1240px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
</style>
