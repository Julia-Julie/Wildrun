<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <!-- Header -->
    <header>
      <!-- Logo icon -->
      <img class="logo-icon" src="./assets/wildrun-logo.png" alt="logo" />

      <!-- main-menu -->
      <div class="main-menu">
        <ul class="main-menu__list">
          <li
            class="main-menu__item"
            v-for="menu_item in alldata.SiteData.MainMenu"
            :key="menu_item.TitleMenu"
          >
            <span
              class="main-menu__item--title"
              v-html="menu_item.TitleMenu"
            ></span>

            <span
              class="main-menu__item--caret"
              v-if="menu_item.TitleSubMenu.length"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"
                />
              </svg>
            </span>

            <!-- Dropdown -->
            <ul
              class="main-menu__dropdown-list"
              v-if="menu_item.TitleSubMenu.length"
            >
              <li
                class="main-menu__subitem"
                v-for="subitem in menu_item.TitleSubMenu"
                :key="subitem.SecondTitleMenu"
              >
                {{ subitem.SecondTitleMenu }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>

    <main>
      <!-- Section - B -->
      <section class="wildrun-b">
        <div class="container">
          <h2 class="custom-heading">new arrival</h2>
          <div class="arrival-wrapper">
            <!-- Arrival Block -->
            <div class="arrival-block">
              <div class="arrival-block__content">
                <h3 class="arrival-block__title">
                  {{ alldata.SiteData.ArrivalBlock.Title }}
                </h3>
                <div class="arrival-block__text">
                  {{ alldata.SiteData.ArrivalBlock.Text }}
                </div>
                <a
                  :href="alldata.SiteData.ArrivalBlock.Link"
                  class="arrival-block__link"
                >
                  {{ alldata.SiteData.ArrivalBlock.ButtonText }}
                </a>
              </div>

              <img
                class="arrival-block__img"
                :src="alldata.SiteData.ArrivalBlock.Img"
                alt="image"
              />
            </div>

            <!-- Companies list -->
            <nav>
              <ul class="companies-list">
                <li
                  class="companies-list__item"
                  v-for="company_name in alldata.SiteData.PartnersBlock
                    .CompaniesList"
                  :key="company_name.Name"
                >
                  <div class="companies-list__img">
                    <img :src="company_name.Img" alt="img" />
                    <div class="companies-list__more">
                      <div class="companies-list--icon">
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        >
                          <path
                            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
                          />
                        </svg>
                      </div>

                      <a class="companies-list--icon" :href="company_name.Url">
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        >
                          <path
                            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                          />
                        </svg>
                      </a>

                      <div class="companies-list--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <a class="companies-list__link" :href="company_name.Url">
                    <span class="companies-list__description">{{
                      company_name.Description
                    }}</span>
                    <span class="companies-list__price">{{
                      company_name.Price
                    }}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <div class="custom-divider"></div>

      <!-- Section - C -->
      <section class="wildrun-c">
        <div class="container">
          <ul class="partners-block">
            <li
              class="partners-block__item"
              v-for="partner in alldata.SiteData.PartnersBlock.CompaniesList"
              :key="partner.Name"
            >
              <!-- {{partner.Name}} -->

              <a :href="partner.Url" class="partners-block__link">
                <img
                  class="partners-block__img"
                  :src="partner.Logo"
                  alt="logo-img"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div class="custom-divider"></div>
    </main>
  </div>
</template>
<script>
import siteData from "../data/local_data.json";
export default {
  data() {
    return {
      alldata: siteData,
    };
  },

  created: function() {
    // alert('kdmc')
  },
};
</script>

<style lang="scss">
// Reset styles
*,
::after,
::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

// Variables declaration
$primary-color: rgb(255, 102, 0);
$secondary-color: rgb(95, 91, 91);

$light-color: beige;
$custom-transition: 0.3s;

@mixin align-flex($direction, $horizontal, $vertical) {
  display: flex;
  flex-direction: $direction;
  justify-content: $horizontal;
  align-items: $vertical;
}

%transitions {
  transition-timing-function: ease-in-out;
  transition-duration: $custom-transition;
}

.container {
  padding: 0 15px;
  margin: 0 auto;
}

// Main Menu
.main-menu {
  * {
    @extend %transitions;
  }
  &__list {
    @include align-flex(row, space-evenly, center);
    list-style: none;
  }

  &__item {
    @include align-flex(row, center, center);
    cursor: pointer;
    position: relative;
    font-size: 1.2rem;
    @extend %transitions;

    > * {
      display: block;
    }

    &--caret {
      margin-left: 1rem;
      @extend %transitions;
    }

    &:hover {
      .main-menu__item--caret {
        path {
          fill: $primary-color;
        }
      }

      .main-menu__item--title {
        color: $primary-color;
      }

      .main-menu__dropdown-list {
        display: block;
        z-index: 1;
      }
    }
  }

  &__dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 150px;
    padding: 15px 5px;
    list-style: none;
    box-shadow: 0 0 5px $secondary-color;
    display: none;
    background: rgba($color: $light-color, $alpha: 0.9);
  }

  &__subitem {
    padding: 10px 7px;
    border-radius: 15px;

    &:hover{
        background: rgba($color:$secondary-color, $alpha: 0.7);
        color: $light-color;
    }
  }
  &__subitem:not(:last-child) {
    margin-bottom: 1rem;
  }
}

// Custom classes
.custom-heading {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: $secondary-color;
  text-transform: uppercase;
}

// Custom divider
.custom-divider {
  height: 1px;
  width: 96%;
  box-shadow: 0 0 5px 0px #959595;
  margin: 3rem auto;
}

.logo-icon {
  display: block;
  height: 160px;
  width: auto;
  margin: 0 auto;
  object-fit: cover;
}

// Header
header {
  margin-bottom: 4rem;
}

// Section - B
.wildrun-b {
  // Arrival Block
  .arrival-wrapper {
    display: grid;
    grid-template-columns: 32% 65%;
    grid-column-gap: 1rem;
    justify-content: space-between;
  }
  .arrival-block {
    @include align-flex(column, center, center);
    // border: 1px solid red;
    padding: 1rem;
    position: relative;

    &__content {
      // z-index: 10;
      color: #fff;
      font-size: 1.5rem;
      @include align-flex(column, center, center);
      position: relative;
    }

    &__title {
      color: $primary-color;
      padding-bottom: 15px;
    }

    &__text {
      font-weight: bolder;
      font-size: 3rem;
      padding-bottom: 1.6rem;
    }

    &__link {
      display: block;
      padding: 1rem 1.5rem;
      border-radius: 26px;
      font-size: 1.7rem;
      font-weight: bolder;
      color: $secondary-color;
      background-color: $light-color;
      text-decoration: none;
      @extend %transitions;
      transition-property: background-color, color;
      &:hover {
        background-color: $secondary-color;
        color: $light-color;
      }
    }

    &__img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      right: 0;
      z-index: -1;
      filter: blur(3px);
    }
  }
  // Companies List
  .companies-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    justify-content: space-between;

    &__item {
      @include align-flex(column, center, center);
      box-shadow: 0 0 5px 2px $secondary-color;
      padding: 0.5rem 1rem;
      list-style: none;
      cursor: pointer;
      transition-property: box-shadow;
      @extend %transitions;

      &:hover {
        box-shadow: 0 0 10px 3px $secondary-color;

        .companies-list__more {
          opacity: 1;
        }
      }
    }

    &__img {
      position: relative;
      img {
        display: block;
        padding-bottom: 1.3rem;
        display: block;
        width: 230px;
        height: 220px;
      }
    }

    &__more {
      @include align-flex(row, space-around, center);
      position: absolute;
      width: 75%;
      margin: 0 auto;
      bottom: 2rem;
      left: 0;
      right: 0;
      padding: 1rem 0;
      @extend %transitions;
      opacity: 0;
      img {
        width: 30px;
        height: 30px;
      }
    }

    &--icon {
      @include align-flex(row, center, center);
      padding: 10px;
      background-color: $light-color;
      border-radius: 50%;
      transition-property: background-color, opacity;
      @extend %transitions;
      svg {
        path {
          fill: $secondary-color;
          @extend %transitions;
        }
      }

      &:hover {
        background-color: $secondary-color;

        svg {
          path {
            fill: $light-color;
          }
        }
      }
    }

    &__link {
      color: $secondary-color;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
    }

    &__description {
      display: block;
    }

    &__price {
      display: block;
      font-size: 1.3rem;
      font-weight: bolder;
    }
  }
}

// Section C
.wildrun-c {
  .partners-block {
    @include align-flex(row, space-evenly, center);
    list-style: none;

    &__item {
      @extend %transitions;
      transition-property: transform;
      &:hover {
        transform: scale(1.02);
      }
    }

    &__img {
      height: 130px;
      width: 130px;
      object-fit: cover;
    }
  }
}
</style>
