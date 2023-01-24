<script>
export default {

}
</script>
<template>
    <div class="footer_container pt-5">
        <div class="row row-cols-4 pt-5 mb-5 footer_top">
            <div class="col">
                <h4 class="mb-3">CONTACT INFO</h4>
                <ul class="p-0">
                    <li class="d-flex"><img src="../assets/images/footer-location-dot-solid.svg"
                            alt="footer-location-dot-solid.svg">
                        2/45 Tower Street. New York USA</li>
                    <li class="d-flex"><img src="../assets/images/footer-phone-solid.svg"
                            alt="footer-phone-solid.svg">Call Us On 0800 840 1010</li>
                    <li class="d-flex"><img src="../assets/images/footer-envelope-soli.svg"
                            alt="footer-envelope-soli.svg">Demo@Example.Com</li>
                </ul>
            </div>
            <div class="col">
                <h4 class="mb-3">INFORMATION</h4>
                <ul class="p-0">
                    <li>Product Support</li>
                    <li>Checkout</li>
                    <li>Report Abuse</li>
                    <li>Redeem Voucher</li>
                    <li>Order Status</li>
                </ul>
            </div>
            <div class="col">
                <h4 class="mb-3">USEFUL LINKS</h4>
                <ul class="p-0">
                    <li>Policies & Rules</li>
                    <li>Privacy Policy</li>
                    <li>License Policy</li>
                    <li>My Account</li>
                    <li>Locality</li>
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
                <h5 class="m-0 pt-3">@ 2023 All Rights Reserved. Developed By TemplateMela</h5>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.footer_container {
    background-color: #111111;
    padding: 0 10rem;

    .footer_top {

        h4 {
            color: #ffffff;
            font-size: .8rem;
        }

        .mail_input {
            background-color: #1c1c1c;
            border: 0;
            padding: .6rem 1rem;
            color: #f2f2f2;
            font-size: .7rem;
        }

        .mail_button {
            padding: .5rem 1.3rem;
            border: 0;
            background-color: #ffffff;
            font-size: 0.7rem;
            color: #111111;
            font-weight: 600;
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