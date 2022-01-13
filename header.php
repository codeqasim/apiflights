<?php 
$whitelist = array(
    '127.0.0.1',
    '::1'
);

if(in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
    define('root','http://localhost/apiflights/');
    define('assets','http://localhost/apiflights/public/');
} else {
    define('root','https://apiflights.com/');
    define('assets','https://apiflights.com/');
}

?>

<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="content-type" content="text/html;charset=utf-8" />
      <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="64x64" href="images/favicon/favicon-64x64.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png"/>
      <title>API Flights - The best API to sell flights online</title>
      <meta name="description" content="We offer a powerful API that enables any travel business to search, book, and sell flights from a network of the world&#x27;s leading airlines in minutes, not months."/>
      <meta property="og:title" content="Duffel - The best API to sell flights online"/>
      <meta property="og:description" content="We offer a powerful API that enables any travel business to search, book, and sell flights from a network of the world&#x27;s leading airlines in minutes, not months."/>
      <meta property="og:url" content="./"/>
      <meta property="og:image" content="https://duffel.com/images/social/default-og.png"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content="https://duffel.com/images/social/default-og.png"/>
      <meta name="twitter:site" content="@duffelhq"/>
      <meta name="twitter:title" content="Duffel - The best API to sell flights online"/>
      <meta name="twitter:description" content="We offer a powerful API that enables any travel business to search, book, and sell flights from a network of the world&#x27;s leading airlines in minutes, not months."/>
      <meta name="next-head-count" content="13"/>
      <link rel="stylesheet" href="<?=assets?>css/app.css" />
    
      <style id="__jsx-4213353732">.ff-icon.jsx-4213353732{display:block;fill:currentColor;-webkit-transition:all 0.3s cubic-bezier(0.25,0.8,0.25,1);transition:all 0.3s cubic-bezier(0.25,0.8,0.25,1);}</style>
      <style id="__jsx-3626727052">.page.jsx-3626727052{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;min-height:100vh;}.page--purple.jsx-3626727052{background-color:#100024;}.page--top-padded.jsx-3626727052{padding-top:2rem;}body{background-color:#FFFFFF;color:#231323;undefined;}</style>
   </head>
   <body class="overflow-x-hidden">
      <div id="__next">
        <header data-selector="fs-show" class="Header_header__3-Q1o" role="banner">
        <nav class="LayoutGrid_layout-grid__40eRT" role="navigation">
        <div class="Header_header__lockup__2IzEg">
            <a href="<?=root?>">
             <img src="<?=assets?>img/logo.png" class="" />
            </a>
        </div>
        <ul class="HSpace_h-space__1C_k1 HSpace_h-space--lg__1G4Eg Header_header__nav--links__1aTYi">
            <li>
            <div>
                <a class="Anchor_anchor__u3Dra Anchor_anchor--white__3vXHo" href="<?=root?>product">Product</a>
                <div></div>
            </div>
            </li>
            <li>
            <div>
                <a class="Anchor_anchor__u3Dra Anchor_anchor--white__3vXHo" href="<?=root?>developers">Developers</a>
                <div></div>
            </div>
            </li>
            <li><a class="Anchor_anchor__u3Dra Anchor_anchor--white__3vXHo" href="<?=root?>pricing">Pricing</a></li>
            <li>
            <div>
                <a class="Anchor_anchor__u3Dra Anchor_anchor--white__3vXHo" href="<?=root?>contact-us">Contact</a>
                <div></div>
            </div>
            </li>
        </ul>
        <ul class="HSpace_h-space__1C_k1 HSpace_h-space--lg__1G4Eg Header_header__nav--cta__3QY_L">
            <li><a class="Anchor_anchor__u3Dra Anchor_anchor--white__3vXHo" href="https://app.duffel.com/sign-in">Log in</a></li>
            <li><a href="https://app.duffel.com/join" class="Header_header-link-button__3hbM0">Sign up</a></li>
        </ul>
        <ul class="HSpace_h-space__1C_k1 HSpace_h-space--md__1c4B3 Header_header__nav--mobile-links__3x3UE">
            <div class="Header_header__nav--mobile-menu-toggle__1UAld">
            <button type="button" class="Header_header__icon-button__3xvaD" aria-label="Open menu">
                <svg width="24" height="24" viewBox="0 0 24 24" class="jsx-4213353732 ff-icon">
                    <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
                </svg>
            </button>
            </div>
            <div class="Header_header__nav--single-cta__2fHvD"><a href="https://app.duffel.com/join" class="Header_header-link-button__3hbM0">Sign up</a></div>
        </ul>
        </nav>
        </header>