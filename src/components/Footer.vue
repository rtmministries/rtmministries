<template>
    <div class="footer">
        <div class="wrapper">
            <div class="container">
                <div class="copyright">
                    <p class="copyright-text">
                        Copyright © {{ currentYear }}. All rights reserved.
                    </p>
                    <a class="email" href="mailto: contact@rtmministries.com"
                        >contact@rtmministries.com</a
                    >
                    <a
                        class="policies"
                        href="https://www.acci.org.au/policy-resources/"
                        target="_blank"
                        >ACCI Policies & Resources</a
                    >
                    <div class="logos">
                        <a
                            class="logo-container"
                            href="https://www.acci.org.au/our-global-reach/#field-workers"
                            target="_blank"
                            ><img src="@/assets/images/logo1.png" alt="Acci"
                        /></a>
                        <div class="logo-container">
                            <img src="@/assets/images/logo2.png" alt="Rtm" />
                        </div>
                    </div>
                </div>
                <div class="registration-numbers">
                    <p>Raising the Mighty PHBN: CN 201 520 552</p>
                    <p>ACCI Missions & Relief ABN: 66 077 367 223</p>
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
.container {
    padding: 10px;
}
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
}
.registration-numbers {
    display: flex;
    justify-content: center;
    align-items: center;
}
.registration-numbers > p {
    margin-right: 20px;
}
.registration-numbers > p:last-child {
    margin-right: 0px;
}
.copyright-text {
    margin: 0 20px 0 0;
}
.email {
    color: #ffffff;
    margin-right: 20px;
}
.policies {
    color: #ffffff;
}
.logos {
    display: flex;
    margin-left: 20px;
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
        margin-left: 0px;
        margin-bottom: 10px;
    }
    .registration-numbers {
        flex-direction: column;
    }
    .registration-numbers > p {
        margin-right: 0px;
        margin-bottom: 10px;
    }
    .registration-numbers > p:last-child {
        margin-bottom: 0px;
    }
    .policies {
        margin-bottom: 10px;
    }
}
</style>
