<template>
    <div class="header">
        <div class="wrapper">
            <div class="navigation">
                <img
                    class="hamburger-menu"
                    @click="hamburgerMenuToggled = !hamburgerMenuToggled"
                    src="@/assets/icons/hamburger-menu.svg"
                    alt="Hamburger Menu"
                />
                <router-link
                    :class="{ hidden: hamburgerMenuToggled }"
                    @click="hamburgerMenuToggled = false"
                    to="/"
                    >Home</router-link
                >
                <router-link
                    :class="{ hidden: hamburgerMenuToggled }"
                    @click="hamburgerMenuToggled = false"
                    to="/soh"
                    >SOH</router-link
                >
                <router-link
                    :class="{ hidden: hamburgerMenuToggled }"
                    @click="hamburgerMenuToggled = false"
                    to="/team"
                    >Our Team</router-link
                >
                <a
                    href="https://donate.acci.org.au/form-4934698/galang-fw250-pledge-page"
                    target="_blank"
                    :class="{ hidden: hamburgerMenuToggled }"
                    @click="hamburgerMenuToggled = false"
                    >Support Us</a
                >
                <a
                    href="https://form.jotform.com/222447905904055"
                    target="_blank"
                    :class="{ hidden: hamburgerMenuToggled }"
                    @click="hamburgerMenuToggled = false"
                    >Contact</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hamburgerMenuToggled: false,
        };
    },
};
</script>

<style>
.header {
    width: 100%;
    background-color: #333333;
    min-height: 70px;
    position: fixed;
    top: 0;
    z-index: 9999;
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
.navigation a:hover {
    background-color: #282828;
}
.hamburger-menu {
    width: 25px;
    cursor: pointer;
    display: none;
    margin: 20px;
    margin-left: auto;
}

@media screen and (max-width: 582px) {
    .navigation {
        flex-direction: column;
    }
    .navigation a {
        text-align: center;
        display: none;
        width: 100%;
    }
    .hamburger-menu {
        display: block;
    }
    .hidden {
        display: block !important;
    }
}
</style>
