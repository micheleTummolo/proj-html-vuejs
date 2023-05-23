<script>
export default {

}
</script>
<template>
    <div class="container_news">
        <div class="row mb-2">
            <div class="col-12 text-center">
                <h5>LATEST NEWS</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <h1>ARTICLES UPDATED DAILY</h1>
            </div>
        </div>
        <div class="row row-cols-3 mt-4">
            <div class="col my_card mb-3">
                <div class="img_container mb-2">
                    <img src="/images/blog07.jpg" alt="">
                </div>
                <p class="mb-2">November 06 , 2021 By Admin</p>
                <h4>RECAP YOUR LATEST COMPANY EVENT</h4>
                <p>Suspendisse dictum dictum tempor. lJt non faucibus arcu,
                    id elementum est. Suspendisse sed</p>
            </div>
            <div class="col my_card mb-3">
                <div class="img_container mb-2">
                    <img src="/images/blog01.jpg" alt="">
                </div>
                <p class="mb-2">May 27 , 2022 By Admin</p>
                <h4>HOW TO EDIT A FILM SCORE TO SERVE</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut</p>
            </div>
            <div class="col my_card mb-3">
                <div class="img_container mb-2">
                    <img src="/images/blog02.jpg" alt="">
                </div>
                <p class="mb-2">May 07 , 2022 By Admin</p>
                <h4>ARE YOU READY TO MAKE IT AWESOME</h4>
                <p>Design is our playground. While we create an awesome
                    experience, we like having fun. No animals</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.container_news {
    padding: 5rem 10rem 3rem;

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