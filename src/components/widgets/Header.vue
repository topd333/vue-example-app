<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/#/"><img src="../../assets/logo.png" height="30"></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/#/">List</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>
