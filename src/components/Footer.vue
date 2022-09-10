<template>
    <div class="footer">
        <div class="wrapper">
            <div class="copyright">
                <p class="copyright-text">
                    Copyright © {{ currentYear }}. All rights reserved.
                </p>
                <a class="email" href="mailto: contact@rtmministries.com"
                    >contact@rtmministries.com</a
                >
                <div class="logos">
                    <div class="logo-container">
                        <img src="@/assets/images/logo1.png" alt="Acci" />
                    </div>
                    <div class="logo-container">
                        <img src="@/assets/images/logo2.png" alt="Rtm" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style>
.footer {
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #111111;
    min-height: 70px;
}
.copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.copyright-text {
    margin: 0 20px 0 0;
}
.email {
    color: #ffffff;
    margin-right: 20px;
}
.logos {
    display: flex;
}
.logo-container {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.logo-container img {
    width: 100%;
}

@media screen and (max-width: 700px) {
    .copyright {
        flex-direction: column;
    }
    .copyright-text {
        margin-right: 0px;
        margin-bottom: 10px;
    }
    .email {
        margin-right: 0px;
        margin-bottom: 10px;
    }
    .logos {
        margin-bottom: 10px;
    }
}
</style>
