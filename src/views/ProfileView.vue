<script setup></script>

<template>
  <div class="wrapper">
    <div class="user-header d-f">
      <div class="avatar-data d-f">
        <div class="photo"></div>
        <div class="container">
          <p>Дьяченко</p>
          <p>Олексій</p>
          <p>Володимирович</p>
        </div>
      </div>

      <div class="roles d-f col r-g-15">
        <div class="role">Художник</div>
        <div class="role">Менеджер</div>
      </div>

      <div class="contacts d-f c-g-40">
        <div class="contact">
          <h3>Telegram</h3>
          <p>_diachenko_oleksii</p>
        </div>
        <div class="contact">
          <h3>Номер телефону</h3>
          <p>+380957315912</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 40px;
}

.user-header {
  align-items: center;
  justify-content: space-around;
}

.avatar-data {
  align-items: center;
}

.photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fff;
}
</style>
