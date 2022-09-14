<template>
    <div class="team">
        <div class="wrapper">
            <div class="our-team-container">
                <p class="our-team">Team Leaders</p>
            </div>
            <div class="team-members-container">
                <div class="team-member">
                    <img
                        src="@/assets/images/domingo.png"
                        alt="Domingo Galang"
                    />
                    <div class="intro-container">
                        <p class="title">PRESIDENT / CEO</p>
                        <p>
                            Domingo is an experienced church planter and trainer
                            with an educational background in Biblical Studies,
                            Theology, Leadership & Education. He is currently a
                            facilitator at Alphacrucis University College.
                        </p>
                    </div>
                </div>
                <div class="team-member">
                    <img src="@/assets/images/cherry.png" alt="Cherry Galang" />
                    <div class="intro-container">
                        <p class="title">VICE PRESIDENT</p>
                        <p>
                            Cherry is an experienced worship leader and
                            counsellor with an educational background in
                            counselling and social work. She currently holds the
                            position of Director for RTM's Slabs of Homelessness
                            project.
                        </p>
                    </div>
                </div>
                <div class="team-member">
                    <img src="@/assets/images/roland.png" alt="Roland Addun" />
                    <div class="intro-container">
                        <p class="title">TREASURER</p>
                        <p>
                            Roland has extensive experience in fields of
                            business & architecture. He is the current Treasurer
                            for RTM and continues his position as University
                            Lecturer in various Philippine Universities.
                        </p>
                    </div>
                </div>
                <div class="team-member">
                    <img
                        src="@/assets/images/janette.png"
                        alt="Janette Velasco"
                    />
                    <div class="intro-container">
                        <p class="title">HEAD EDUCATOR</p>
                        <p>
                            Janette has strong academic foundations in the
                            Philippine educational system along with extensive
                            experience as a Principal Educator. She currently
                            holds the position of Head Educator for RTM.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.team {
    min-height: 100vh;
    padding: 20px;
    margin-top: 70px;
}
.our-team-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: #ea5b4a;
    height: 200px;
    margin-bottom: 20px;
    color: #ffffff;
    font-size: 50px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding: 20px;
}
.our-team {
    text-align: center;
    margin: 0;
}
.team-members-container {
    display: flex;
    flex-wrap: wrap;
}
.team-member {
    display: flex;
    width: 50%;
    padding-bottom: 20px;
}
.team-member:nth-last-of-type(-n + 2) {
    padding-bottom: 0px;
}
.team-member > img {
    width: 200px;
    max-height: 333px;
    display: inline-block;
}
.intro-container {
    padding: 0 20px;
}
.title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
}

@media screen and (max-width: 1000px) {
    .team-member {
        width: 100%;
    }
}

@media screen and (max-width: 500px) {
    .team-member {
        flex-direction: column;
        align-items: center;
    }
    .team-member > img {
        margin-bottom: 20px;
    }
    .intro-container {
        padding: 0px;
    }
}
</style>
