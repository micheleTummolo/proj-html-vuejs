<script>
export default {

}
</script>
<template lang="">
    <nav class="container-fluid py-4 px-4 d-flex justify-content-between">
        <div class="logo_container">
            <a href="#">
                <img src="../assets/images/logo.svg" alt="logo" class="logo_img">
            </a>
        </div>
        <div class="menu_container d-flex align-items-center justify-content-center">
            <ul class="d-flex p-0 m-0">
                <li class="me-4">
                    <a href="">Home</a>
                </li>
                <li class="me-4">
                    <a href="">Blog</a>
                </li>
                <!-- Dropdown -->
                <li class="me-4">
                    <div data-bs-toggle="dropdown" aria-expanded="false">
                        <a href="#">Pages</a>
                        <img src="../assets/images/image (7).svg" alt="#" class="d-inline-block arrow_dropdown">
                    </div>
                    <ul class="dropdown-menu dropdown_style p-0">
                        <li><a class="dropdown-item p-3" href="#">SERVICES</a></li>
                        <li><a class="dropdown-item p-3" href="#">OUR WORK FLOW</a></li>
                        <li><a class="dropdown-item p-3" href="#">VIDEO THUMBNAIL TYPE</a></li>
                    </ul>
                </li>

                <li class="me-4">
                    <a href="">About</a>
                </li>
                <li class="me-4">
                    <a href="">Contacts</a>
                </li>
                <li class="me-4">
                    <a href="">Gallery</a>
                </li>
                <!-- Dropdown -->
                <li class="me-4">
                    <div data-bs-toggle="dropdown" aria-expanded="false">
                        <a href="#">Shop</a>
                        <img src="../assets/images/image (7).svg" alt="#" class="d-inline-block arrow_dropdown">
                    </div>
                    <ul class="dropdown-menu dropdown_style p-0">
                        <li><a class="dropdown-item p-3" href="#">SHOP PAGES</a></li>
                        <li><a class="dropdown-item p-3" href="#">PRODUCT TYPE</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="social_container d-flex ">
            <div class="search d-flex align-items-center">
                <div class="search_icon_container">
                    <img src="../assets/images/image (8).svg" alt="#" class="social_icon">
                </div>
            </div>
            <div class="social_icons_container d-flex justify-content-between align-items-center ps-3">
                <img src="../assets/images/image (9).svg" alt="#" class="social_icon">
                <img src="../assets/images/image (10).svg" alt="#" class="social_icon">
                <img src="../assets/images/image (11).svg" alt="#" class="social_icon">
                <img src="../assets/images/image (12).svg" alt="#" class="social_icon">
            </div>
        </div>

    </nav>
</template>
<style lang="scss">
nav {
    height: 85pxpx;
    background-color: #ffffff;

    .logo_container {
        width: 15%;

        .logo_img {
            width: 100%;
        }
    }

    .menu_container {
        width: 70%;

        li {
            list-style-type: none;

            a {
                text-transform: uppercase;
                text-decoration: none;
                color: #111111;
                font-size: .8rem;
                font-weight: 700;
            }

            .arrow_dropdown {
                height: 10px;
                cursor: pointer;
            }

            .dropdown_style {
                background-color: #111111;
                border: 0;
                border-radius: 0;
                top: 28px;

                li {
                    border-bottom: 1px solid #666666;
                    padding-right: 2rem;

                    a {
                        color: #ffffff;

                        &:hover {
                            background-color: #111111;
                            color: #666666;
                        }
                    }
                }
            }
        }

    }

    .social_container {
        width: 15%;

        .search {
            width: 20%;

            .search_icon_container {
                width: 100%;
                border-right: 1px solid gray;

                img {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;

                    &:hover {
                        color: #666666;
                    }
                }
            }
        }

        .social_icons_container {
            width: 80%;

            .social_icon {
                width: 24px;
                height: 24px;
                cursor: pointer;

                &:hover {
                    color: #666666;
                }
            }
        }
    }
}
</style>