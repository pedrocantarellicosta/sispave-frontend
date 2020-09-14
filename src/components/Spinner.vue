<template>
  <div class="spinner spring-spinner">
    <div class="spring-spinner-part top">
      <div class="spring-spinner-rotator"></div>
    </div>
    <div class="spring-spinner-part bottom">
      <div class="spring-spinner-rotator"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .spinner {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
  .spring-spinner, .spring-spinner * {
      box-sizing: border-box;
    }
    .spring-spinner {
      height: 100px;
      width: 100px;
    }
    .spring-spinner .spring-spinner-part {
      overflow: hidden;
      height: calc(100px / 2);
      width: 100px;
    }
    .spring-spinner  .spring-spinner-part.bottom {
       transform: rotate(180deg) scale(-1, 1);
     }
    .spring-spinner .spring-spinner-rotator {
      width: 100px;
      height: 100px;
      border: calc(100px / 7) solid transparent;
      border-right-color: #fb6340 ;
      border-top-color: #fb6340 ;
      border-radius: 50%;
      box-sizing: border-box;
      animation: spring-spinner-animation 3s ease-in-out infinite;
      transform: rotate(-200deg);
    }
    @keyframes spring-spinner-animation {
      0% {
        border-width: calc(100px / 7);
      }
      25% {
        border-width: calc(100px / 23.33);
      }
      50% {
        transform: rotate(115deg);
        border-width: calc(100px / 7);
      }
      75% {
        border-width: calc(100px / 23.33);
      }
      100% {
        border-width: calc(100px / 7);
      }
    }
</style>