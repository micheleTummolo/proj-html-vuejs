<script>
export default {

}
</script>
<template>
    <div class="container_carousel">
        <div class="row">
            <div class="col my-3">
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <div class="image_container p-2 mb-2">
                            <img src="../assets/images/image (20).svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-6">
                        <p class="text-center">Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi dui, id
                            Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue Pellentesque
                            fringilla egei mi eu mollis. Mauris commodo.</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-2 d-flex justify-content-end p-0">
                        <div>
                            <img src="../assets/images/01.jpg" alt="" class="profile_img">
                        </div>
                    </div>
                    <div class="col-2 d-flex align-items-center ms-2 p-0">
                        <div>
                            <h4>JOHN DOE</h4>
                            <h5 class="m-0">Designer</h5>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mt-4">
                    <div class="col-2 d-flex justify-content-center">
                        <div class="circle p-1 me-2"></div>
                        <div class="circle p-1 me-2"></div>
                        <div class="circle p-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/mixins' as *;

.container_carousel {
    padding: 4rem 10rem;
    background-image: url('../assets/images/Parallax-02.jpg');
    background-size: cover;
    color: #ffffff;

    .image_container {
        background-color: #ffffff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    .profile_img {
        border-radius: 50%;
    }

    .circle {
        border-radius: 50%;
        background-color: #ffffff;
        cursor: pointer;

        &:hover {
            background-color: #f2f2f2;
        }
    }

    p {
        font-size: .7rem;
        font-weight: 400;
        line-height: 2;
    }

    h4 {
        font-size: .7rem;
    }

    h5 {
        font-size: .5rem;
    }
}
</style>