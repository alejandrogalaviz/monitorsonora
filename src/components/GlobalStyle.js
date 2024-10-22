import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: hsla(163, 72%, 48%, 1.0);
    --color-primary-5: hsla(163, 72%, 48%, 0.5);
    --color-secondary: hsla(167, 22%, 78%, 1.0);
    --color-warning: hsla(25, 100%, 67%, 1.0);
    --color-danger: hsla(0, 100%, 67%, 1.0);
    --color-background: hsla(229, 19%, 16%, 1.0);
    --color-black: hsla(223, 13%, 11%, 1.0);
    --color-yellow: hsla(59, 100%, 67%, 1.0);
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
    font-size: 20px;
    /* font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-primary);
    height: 100vh;
    width: 100vw;
  }

  h1 {
    font-size: 1.2rem;
    text-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.7), 0 -1px 0 hsla(0, 0%, 100%, 0.5);
    color: var(--color-secondary);
    font-weight: 900;
    text-transform: uppercase;

    > small {
      font-size: .6rem;
      font-weight: 400;
      letter-spacing: normal;
      text-shadow: none;
      color: var(--color-danger);
    }

    @media (max-width: 960px) {
      font-size: .8rem;
    }
  }

  h2 {
    font-size: 1.2rem;
    color: var(--color-primary);
    border-radius: 1px;
    line-height: 1.7rem;
    margin-bottom: .2rem;
    opacity: .8;
    :first-of-type {
      margin-top: .5rem;
    }
    @media (max-width: 960px) {
      font-size: 1rem;
    }
  }

  a {
    color: var(--color-primary);
  }

  div > p, a {
    color: var(--color-primary-5);
    font-size: .9rem;
  }

  hr {
    margin: 2rem 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      #0000000d,
      rgba(0, 0, 0, 0)
    );
  }

  main {
    width: 100vw;
    height: 100vh;
    display: flex;

    padding: .5rem;
    border: 4px solid var(--color-black);

    @media(max-width: 960px) {
      padding: 0;
      height:unset;
    }
    

    > section {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      border: 1px solid var(--color-primary-5);
      flex: 1;
      margin: .5rem;
      animation: turn-on .3s linear;
      animation-fill-mode: forwards;

      :first-of-type {
        overflow-y: scroll;
      }

      :last-of-type {
        padding: 0;
        overflow-y: scroll;

      @media(max-width: 960px) {
        height:75vh;
      }


        > section {
          padding:0.2rem
        }
        
        > div {
          margin-top: 0;
          width: 100%;
          height: 100%;

        > * {
            margin-top: 0;
          }
        }
      }

      @media(max-width: 960px) {
        margin: 0;
        
        :first-of-type {
          flex: 2;
        }

        :last-of-type {
          flex: 3;
        }
      }
    }

    footer {
      padding-bottom: 1rem;
      display: block;
      justify-content: space-between;
    }

    .danger {
      color: var(--color-danger);
    }

    .warning {
      color: var(--color-warning);
    }
    .caution{
      color: var(--color-yellow);
    }
    .open-data{
      float:right;
      margin-top:3px;
    }
    .font-small{
      font-size:initial;
    }

    @media (max-width: 960px) {
     flex-direction: column;

     > section {
      :first-of-type {
        order: 1;
      }
     }
    }
  }

  @keyframes turn-on {
    0% {
      transform: scale(1, 0.8) translate3d(0, 0, 0);
      filter: brightness(30);
      opacity: 1;
    }
    3.5% {
      transform: scale(1, 0.8) translate3d(0, 100%, 0);
    }
    3.6% {
      transform: scale(1, 0.8) translate3d(0, -100%, 0);
      opacity: 1;
    }
    9% {
      transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
      filter: brightness(30);
      opacity: 0;
    }
    11% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: contrast(0) brightness(0);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: contrast(1) brightness(1.2) saturate(1.3);
      opacity: 1;
    }
  }
  .news-logo{
    width:28px;
    float:right;
  }
  .news-heading{
    margin-bottom:20px;
    display:inline-block;
  }

  .cards-container{
    padding:1rem;
  }
  .card{
    margin-bottom:27px;
    display: flex;

    @media(max-width: 960px) {
      box-shadow: 0 1px 1px hsla(163,72%,0%,0.7),0 -1px 0 var(--color-black);
      border: 1px solid var(--color-black);
      border-radius: 2px;
      padding: 5px 2px 10px;
    }
  }
  .card-content{
    margin-left:1rem;

    @media(max-width:960px){
      margin-left:0.5rem;
    }

    >h3{
      margin-bottom:5px;
      line-height:18px;
      @media(max-width: 960px) {
        line-height: 14px;
      }
    }
  }
  .card-title{
    font-size:15px;
    text-decoration:none;
    font-weight:600;
    margin-bottom:5px;
    @media(max-width:960px){
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height:18px;
    }
  }
  .card-title:hover{
    text-decoration:underline;
  }
  .card-source{
    font-size:13px;
    color: #dbfff7;
    margin-bottom:5px;
  }
  .card-description{
    font-size:13px;
    color: #dbfff7
  }
  @media(max-width:960px){
    .card-description{
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height:18px;
    }
  } 

  .share-button-2{
    background-image: url("share-button.png");
    width:20px;
    height:20px;
    float:right;
    margin-top:10px;
    margin-right:5px;
    background-size:cover;
    cursor:pointer;
  }
  @media (max-width: 960px) {
    .newsSection {
      height: auto !important;
    }
    .openNews {
      display: none;
    }
  }
  @media (min-width: 960px) {
    .hide-desktop {
      display: none;
    }
  }
  .nav__submenu {
    display: none;
  }

  .nav__menu-item:hover .nav__submenu {
    display: block;
  }
  nav ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .nav {
    float: right;
    margin-top: 5px;
    margin-right: 5px;
  }
  .nav a {
    display: block;
    padding: 0 16px;
    line-height: inherit;
    cursor: pointer;
  }

  .nav__menu-item {
    background-image: url("share-button.png");
    width: 20px;
    height: 20px;
    float: right;
    margin-top: 10px;
    margin-right: 5px;
    background-size: cover;
    cursor: pointer;
  }

  .nav__menu-item:hover .nav__submenu {
    display: inline-flex;
  }

  .nav__submenu {
    margin-top: 31px;
    display: none;
    position: absolute;
    width: 128px;
    right: 58px;
    margin-top: -9px;
    background-color: #1c1f29;
    // box-shadow: 0 1px 1px hsla(163,72%,0%,0.7), 0 -1px 0 var(--color-black);
    // border: 1px solid var(--color-black);
    padding-left: 4px;
      }
  .nav__submenu-item {
    margin-right: 10px;
    display:inline-block;
  }
  .nav__submenu-item:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  .card-img-cont img{
    height:100px;
    width:100px;
    object-fit:cover;
  }
  .facebook-icon{
    float:right;

    @media (max-width: 960px) {
      float:unset
    }

    > img{
      width:25px;
      border-radius:5px;

      @media (max-width: 960px) {
        width:30px;
      }
    }
  }
  .twitter-icon{
    float:right;

    @media (max-width: 960px) {
      float:unset;
      margin-top: 27px;
      display: inline-block;
    }

    > img{
      width:25px;
      border-radius:5px;
      margin-left:10px;
      @media (max-width: 960px) {
        width:30px;
        margin-right:20px;
        margin-left:0;
      }
    }
  }  
`;
