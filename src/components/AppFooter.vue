<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },

}
</script>
<template>
    <div class="footer_container pt-5">
        <div class="row row-cols-4 pt-5 mb-5 footer_top">
            <div class="col">
                <h4 class="mb-3">{{ store.footer[0].heading }}</h4>
                <ul class="p-0">
                    <li v-for="(item, index) in store.footer[0].items" class="d-flex"><img :src="'/images/' + item.img"
                            :alt="item.img">
                        {{ item.text }}</li>
                </ul>
            </div>
            <div class="col">
                <h4 class="mb-3">{{ store.footer[1].heading }}</h4>
                <ul class="p-0">
                    <li v-for="(item, index) in store.footer[1].items">{{ item }}</li>
                </ul>
            </div>
            <div class="col">
                <h4 class="mb-3">{{ store.footer[2].heading }}</h4>
                <ul class="p-0">
                    <li v-for="(item, index) in store.footer[2].items">{{ item }}</li>
                </ul>
            </div>
            <div class="col">
                <h4 class="mb-3">NEWSLETTER</h4>
                <p>Subscribe To Receive Inspiration,
                    Ideas & News In Your lnbox.</p>
                <form action="">
                    <input type="email" name="" id="" class="mail_input mb-2" placeholder="Enter Your Email">
                    <button type="submit" class="mail_button">SUBSCRIBE</button>
                </form>
            </div>
        </div>
        <div class="row footer_bottom pb-4">
            <div class="col-12 text-center">
                <h5 class="m-0 pt-3">&copy; 2023 All Rights Reserved. Developed By TemplateMela</h5>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/mixins' as *;

.footer_container {
    background-color: #111111;
    padding: 0 10rem;

    .footer_top {

        h4 {
            color: #ffffff;
            font-size: .8rem;
            text-transform: uppercase;
        }

        .mail_input {
            background-color: #1c1c1c;
            border: 0;
            padding: .6rem 1rem;
            color: #f2f2f2;
            font-size: .7rem;
        }

        .mail_button {
            @include button_white;
        }

        p {
            color: #666666;
            font-size: .7rem;

        }

        li {
            list-style: none;
            color: #666666;
            font-size: .7rem;
            padding: 0;
            margin-bottom: .5rem;
            width: fit-content;
            cursor: pointer;

            &:hover {
                color: #f2f2f2;
            }

            img {
                width: 10px;
                margin-right: .7rem;
            }
        }
    }


    .footer_bottom {

        h5 {
            color: #666666;
            font-size: .7rem;
            border-top: 1px solid #666666;
        }
    }
}
</style>