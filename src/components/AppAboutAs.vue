<script>
export default {

}
</script>
<template>
    <div class="container_about_us">
        <div class="row d-flex justify-content-end">
            <div class="col-6 my-3">
                <h5 class="mb-3">ABOUT US</h5>
                <h1>HIGH QUALITY CINEMATICS</h1>
                <p>Orci varius penatibus et magnis dis parturient In the montes, nascetur ridiculus mus. Nulla
                    A nisi ut mi efficitur hendrerit. nunc urna. quisque a partr hendrerit purus erat, nec dapibus
                    sem sed. phasellus sed eli molestie, porttitor ligula of the egestas, mattis augue. quisque et
                    rhoncus justo. suspendisse luctus pharetra eleme tcondimentum.</p>
                <button>READ MORE</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/mixins' as *;

.container_about_us {
    padding: 4rem 10rem;
    background-image: url('/images/About-Us.jpg');
    background-size: cover;
    color: #ffffff;

    h5 {
        font-size: .7rem;
        font-weight: 700;
    }

    h1 {
        font-size: 2rem;
        font-weight: 800;
    }

    p {
        font-size: .7rem;
        font-weight: 400;
        line-height: 2;
    }

    button {
        @include button_white;
    }
}
</style>