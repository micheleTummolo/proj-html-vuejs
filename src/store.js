import { reactive } from 'vue';

export const store = reactive({
    header: [
        {
            link: "home",
            dropdown: false,
        },
        {
            link: "blog",
            dropdown: false,
        },
        {
            link: "pages",
            dropdown: true,
            sublink: [
                "service",
                "our work flow",
                "video thumbnail type",
            ]
        },
        {
            link: "about",
            dropdown: false,
        },
        {
            link: "contacts",
            dropdown: false,
        },
        {
            link: "gallery",
            dropdown: false,
        },
        {
            link: "shop",
            dropdown: true,
            sublink: [
                "shop pages",
                "product type",
            ]
        },
    ],
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
    ],
    socials: [
        "image (9).svg",
        "image (10).svg",
        "image (11).svg",
        "image (12).svg",
    ]
});