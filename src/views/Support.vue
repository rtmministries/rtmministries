<template>
    <div class="support">
        <div class="background-image-container">
            <img src="../assets/images/support-image.jpg" class="background-image" />
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="column">
                    <h1>DONATE TO RAISING THE MIGHTY</h1>
                    <p>After more than 26 years in Australia, God has called Domingo and Cherry to base their ministry in the Philippines and compelled them towards the path of becoming long-term missionaries. This is another adventure in their service to the community which will contribute to the growth of the church.</p>
                    <a class="donation-link" href="https://donate.acci.org.au/form-6383306/FW250-Galang">Click Here To Support Our Field Workers</a>
                    <p>Bus needed to transport homeless children! Your donation can help provide a way for a homeless child to access education.</p>
                    <a class="donation-link" href="https://projects.acci.org.au/donations/p23-fw250-1/?fbclid=IwAR0YLCaH8VNj164Tat53cPinAFMi1MZYCIXvTNCLCiLuia2H5qKpl55WvfE">Click Here To Donate To Vehicle Transportation for Homeless Children</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.support {
    min-height: 100vh;
    margin-top: 70px;
}
.background-image-container {
    width: 100%;
    height: calc(100vh - 70px);
    object-fit: contain;
}
.background-image {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
}
.content {
    display: flex;
    height: 100%;
    line-height: 38px;
}
.column {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
}
h1 {
    font-family: "Montserrat", sans-serif;
    margin-bottom: 20px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
p {
    margin-bottom: 10px;
}
.column > p > a {
    color: #ea5b4a;
}
.donation-link {
    margin-bottom: 40px;
}
.donation-link:last-child {
    margin-bottom: 0px;
}

@media screen and (min-width: 1100px) {
    .background-video-container {
        width: 100vw;
        max-width: 100%;
        height: calc(100vh - 70px);
    }
}

@media screen and (max-width: 700px) {
    .content {
        flex-direction: column;
    }
}
</style>
