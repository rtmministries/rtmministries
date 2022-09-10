<template>
    <div class="header">
        <div class="wrapper">
            <div class="navigation">
                <router-link to="/">SOH</router-link>
                <a
                    href="https://donate.acci.org.au/form-4934698/galang-fw250-pledge-page"
                    target="_blank"
                    >Support Us</a
                >
                <a
                    href="https://form.jotform.com/222447905904055"
                    target="_blank"
                    >Contact</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.header {
    width: 100%;
    background-color: #333333;
    min-height: 70px;
}
.navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}
.navigation a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    padding: 20px;
    cursor: pointer;
    letter-spacing: 2px;
}
</style>
