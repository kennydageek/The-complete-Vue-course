<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">
        Name:
      </label>
      <input v-model="name" type="text" name="name" value />

      <label for="email">
        email:
      </label>
      <input v-model="email" type="text" name="email" value />

      <label for="password">
        password:
      </label>
      <input v-model="password" type="text" name="password" value />

      <button type="submit" name="button">Register</button>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
      <router-link to="/login"> Already have an account? Login. </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errors: null,
    };
  },

  methods: {
    register() {
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' });
        })
        .catch((err) => {
          console.log(err.response);
          this.errors = err.response.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
