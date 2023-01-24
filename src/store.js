import { reactive } from 'vue';

export const store = reactive({
    footer: [
        {
            heading: "contact info",
            items: [
                {
                    img: "footer-location-dot-solid.svg",
                    text: "2/45 Tower Street. New York USA"
                },
                {
                    img: "footer-phone-solid.svg",
                    text: "Call Us On 0800 840 1010"
                },
                {
                    img: "footer-envelope-soli.svg",
                    text: "Demo@Example.Com"
                },
            ]

        },
        {
            heading: "information",
            items: [
                "Product Support",
                "Checkout",
                "Report Abuse",
                "Redeem Voucher",
                "Order Status"
            ]
        },
        {
            heading: "useful links",
            items: [
                "Policies & Rules",
                "Privacy Policy",
                "License Policy",
                "My Account",
                "Locality"
            ]
        },
    ]
});