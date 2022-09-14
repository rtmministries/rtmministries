<template>
    <div class="home">
        <div class="background-video-container">
            <video class="background-video" autoplay muted loop>
                <source
                    src="../assets/videos/home-background-video.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
        <div class="wrapper">
            <div class="content">
                <div class="column">
                    <h1>Raising the Mighty International Ministries</h1>
                    <p>
                        Raising the Mighty is a non-profit organisation founded
                        in Australia. Our vision is to raise educated leaders
                        who will empower disadvantaged children in developing
                        nations through love, hope, safety, and education.
                        Raising the Mighty is comprised of leaders, educators,
                        advocates and volunteers who tirelessly champion the
                        cause of quality training, human rights, social justice,
                        and holistic care.
                    </p>
                </div>
                <div class="column">
                    <h1>Projects</h1>
                    <p>
                        As of 2021, Raising the Mighty's main initiative is
                        Slabs of Homelessness, a project that aims to educate
                        and empower homeless children who are relegated to
                        living in Philippine cemeteries. Please click
                        <router-link to="/soh">here</router-link>
                        to read more about Slabs of Homelessness.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.home {
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
