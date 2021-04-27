<template>
  <div class="main_layout">
    <div class="main_layout__header">
      <div class="main_layout__sub-header">
        <div class="sub-header__logo">
          <img
            class="sub-header__log-img"
            src="@/assets/icon/Logo.svg"
            alt=""
          />
        </div>
        <button class="sub-header__info-store">О магазине</button>
        <button class="sub-header__regirter">Зарегистрироваться</button>
        <input type="text" placeholder="Поиск" class="sub-header__find-goods" />
        <button class="sub-header__info-store">Корзина</button>
        <button class="sub-header__cart">Корзина</button>
        <button class="sub-header__personal-office">Личный кабинет</button>
      </div>
      <div class="main_layout__nav-category"></div>
    </div>
    <div class="main_layout__aside"></div>
    <div class="main_layout__body"></div>
    <div class="main_layout__footer"></div>
  </div>
</template>
<script>
export default {
  name: "Main_Layout",
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main_layout {
  min-width: 1114px;
  background-color: #fff;
  font-family: "Inter";
}
.sub-header__info-store {
}
</style>
