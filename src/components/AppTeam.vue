<script>
export default {

}
</script>
<template>
    <div class="container_whatclist">
        <div class="row mb-2">
            <div class="col-12 text-center">
                <h5>THE PERICUROS</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <h1>MEET THE TEAM</h1>
            </div>
        </div>
        <div class="row row-cols-4 mt-4">
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Team-01.jpg" alt="">
                </div>
                <h4>FABRICIO GUERRA</h4>
                <p class="text-center">Main Director</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Team-02.jpg" alt="">
                </div>
                <h4>UMBERTO PAGODA</h4>
                <p class="text-center">Main Writer</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Team-03.jpg" alt="">
                </div>
                <h4>GLORIA RICCASSO</h4>
                <p class="text-center">Main Producer</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <div class="img_container mb-4">
                    <img src="../assets/images/Team-04.jpg" alt="">
                </div>
                <h4>LIO NAPOIN</h4>
                <p class="text-center">Cameraman</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.container_whatclist {
    padding: 4rem 10rem 2rem;

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