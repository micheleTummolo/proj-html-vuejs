<script>
export default {

}
</script>
<template>
    <div class="container_collaborate">
        <div class="row d-flex justify-content-end">
            <div class="col-6 my-2 px-4">
                <h5 class="mb-3">COLLABORATE</h5>
                <h1 class="m-0">WANT TO WORK WITH US?</h1>
                <h1>LEAVE US A MESSAGE!</h1>
                <p>Duis sit amet congue ipsum_ Nulla maximus My venenatis posuere_T0 The Mauris
                    ut tempus Suspendisse porta tincidunt lectus non of me pellentesque. At A Sed
                    blandit at diam sit amet Orci varius natoque penatibus et dis dis parturient
                    montes. My Car nascetur ridiculus Sed feugiat lacus in erat egestas. quis eleifend
                    lacus imperdiet.</p>
            </div>
            <div class="col-6 my-4 px-4">
                <form name="contact" method="POST" data-netlify="true">
                    <div class="row mb-4">
                        <div class="col-6">
                            <input type="text" name="" id="" placeholder="Your Name">
                        </div>
                        <div class="col-6">
                            <input type="email" name="" id="" placeholder="Your Email">
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-6">
                            <input type="text" name="" id="" placeholder="Mobile Number">
                        </div>
                        <div class="col-6">
                            <input type="email" name="" id="" placeholder="Your Pincode">
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-12">
                            <textarea name="" id="" cols="30" rows="7" placeholder="Enter Your Message"></textarea>
                        </div>
                    </div>
                    <button>SUBMIT NOW</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/mixins' as *;

.container_collaborate {
    padding: 4rem 10rem;

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
        color: #666666;
        text-align: justify;
    }

    button {
        @include button_black;
    }

    input,
    textarea {
        @include input;
    }
}
</style>