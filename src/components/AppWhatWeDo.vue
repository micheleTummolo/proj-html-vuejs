<script>
export default {

}
</script>
<template>
    <div class="my_container">
        <div class="row mb-2">
            <div class="col-12 text-center">
                <h5>PELICULA STUDIO</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <h1>THIS IS WHAT WE DO</h1>
            </div>
        </div>
        <div class="row row-cols-3 mt-4">
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <img src="/images/image_14.svg" alt="" class="mb-4">
                <h4>ARRAY OF EQUIPMENT</h4>
                <p class="text-center">Lorem ipsum dolor amet, consectetur adipiscing.
                    Pellentesque ultricies justo tellus.</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <img src="/images/image_16.svg" alt="" class="mb-4">
                <h4>NEW TECHNOLOGIES</h4>
                <p class="text-center">Lorem ipsum dolor amet, consectetur adipiscing.
                    Pellentesque ultricies justo tellus.</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <img src="/images/image_18.svg" alt="" class="mb-4">
                <h4>VERSITILE ACTORS</h4>
                <p class="text-center">Lorem ipsum dolor amet, consectetur adipiscing.
                    Pellentesque ultricies justo tellus.</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <img src="/images/image_15.svg" alt="" class="mb-4">
                <h4>TOP DIRECTORS</h4>
                <p class="text-center">Lorem ipsum dolor amet, consectetur adipiscing.
                    Pellentesque ultricies justo tellus.</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <img src="/images/image_17.svg" alt="" class="mb-4">
                <h4>MINUTE EDITING</h4>
                <p class="text-center">Lorem ipsum dolor amet, consectetur adipiscing.
                    Pellentesque ultricies justo tellus.</p>
            </div>
            <div class="col my_card d-flex flex-column align-items-center mb-3">
                <img src="/images/image_19.svg" alt="" class="mb-4">
                <h4>VERSITILE ACTORS</h4>
                <p class="text-center">Lorem ipsum dolor amet, consectetur adipiscing.
                    Pellentesque ultricies justo tellus.</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.my_container {
    margin-top: 85px;
    padding: 4rem 10rem;

    h5 {
        font-size: .7rem;
        font-weight: 700;
    }

    h1 {
        font-size: 2rem;
        font-weight: 800;
    }

    .my_card {

        &:hover img {
            transform: translate(0px, -10px);
        }

        img {
            height: 60px;
            width: 60px;
            transition: transform .5s;

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