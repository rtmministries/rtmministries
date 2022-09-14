<template>
    <div class="soh">
        <div class="background-video-container">
            <video class="background-video" autoplay muted loop>
                <source
                    src="../assets/videos/soh-background-video.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="column">
                    <h1>Slabs Of Homelessness</h1>
                    <p>
                        Slabs of Homelessness is a project undertaken by Raising
                        the Mighty to empower children living in local
                        cemeteries to exit homelessness through education.
                    </p>
                </div>
                <div class="column">
                    <h1>Educating, Believing, Pursuing</h1>
                    <p>
                        Educating children through empowerment and cementing a
                        will to exit homelessness through achieving learning
                        goals, thorough knowledge of health and wellbeing and
                        the discovery of a hopeful future.
                    </p>
                    <p>
                        Believing that every child deserves life in a safe and
                        nurturing environment without the threat of permanent
                        homelessness, minimising risks of harm, abuse and
                        slavery.
                    </p>
                    <p>
                        Pursuing kindness, generosity and love; partnership and
                        sponsorship; holistic care and quality training via
                        safety procedures to protect both children, educators
                        and volunteers.
                    </p>
                </div>
            </div>
            <img
                class="soh-footer-image"
                src="@/assets/images/soh-footer-image.jpg"
                alt="Soh footer image"
            />
        </div>
    </div>
</template>

<style>
.soh {
    min-height: 100vh;
    margin-top: 70px;
}
.background-video-container {
    width: 100%;
}
.background-video {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
}
.soh-footer-image {
    display: block;
    width: 100%;
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
