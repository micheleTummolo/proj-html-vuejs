<script>
export default {

}
</script>
<template>
    <div class="container_whatclist">
        <div class="row mb-2">
            <div class="col-12 text-center">
                <h5>YOUR WATCHLIST</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <h1>BEST HITS MOVIES</h1>
            </div>
        </div>
        <div class="row row-cols-3 mt-4">
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Gallery-01.jpg" alt="">
                </div>
                <h4>SEVENTEENTH SUMMER</h4>
                <p class="text-center">Commercial, Music Video.</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Gallery-02.jpg" alt="">
                </div>
                <h4>A MESSAGE TO SPACE</h4>
                <p class="text-center">Short Film</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Gallery-03.jpg" alt="">
                </div>
                <h4>THE MOST BEAUTIFUL THING</h4>
                <p class="text-center">Music Video</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Gallery-04.jpg" alt="">
                </div>
                <h4>PERMISSION TO SPEAK</h4>
                <p class="text-center">Documentary</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Gallery-05.jpg" alt="">
                </div>
                <h4>EXPLORE OUR SPACE</h4>
                <p class="text-center">Film noir</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Gallery-06.jpg" alt="">
                </div>
                <h4>FILM PRODUCTION</h4>
                <p class="text-center">Blaxploitation</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.container_whatclist {
    padding: 6rem 10rem;

    h5 {
        font-size: .7rem;
        font-weight: 700;
    }

    h1 {
        font-size: 2rem;
        font-weight: 800;
    }

    .my_card {

        .img_container {
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                transition: transform .5s;
            }
        }

        &:hover img {
            transform: scale(1.1);
        }

    }

    h4 {
        font-size: .8rem;
        font-weight: 700;
    }

    p {
        font-size: .7rem;
        font-weight: 400;
        line-height: 2;
        color: #666666;
    }
}
</style>