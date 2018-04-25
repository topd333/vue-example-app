<template>
  <div class="row">
    <div class="col-sm-12">
      <h2>Add New Grocery</h2>
    </div>

    <div class="col-md-8 m-t-20">
      <form action="#" method="post" class="subscribe-form" data-vv-scope="grocery-form">
        <div class="row">
          <div class="form-group col-md-12">
            <label for="name"> Name </label>
            <input type="text" id="name" class="form-control" v-model="grocery.name"/>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-12">
            <label for="amount"> Amount </label>
            <input type="text" id="amount" name="amount" class="form-control" v-model="grocery.amount" v-validate="'required|integer'" data-vv-as="amount" />
            <p class="vv-invalid" v-if="errors.has('grocery-form.amount')">
              {{ errors.first('grocery-form.amount') }}
            </p>
          </div>
        </div>
      </form>

      <button class="btn btn-primary" v-on:click="onCreategrocery">
        Create grocery
        <i class="fa fa-btn fa-spinner fa-spin" v-if="isSavingGrocery"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      grocery: {},
      // selectedUser: localStorage.getItem('selectedUser', null),
      isSavingGrocery: false
    }
  },
  methods: {
    onCreategrocery: function (event) {
      if (event) event.preventDefault()
      this.$validator.validateAll('deposit-form').then(() => {
        this.isSavingGrocery = true
      }).catch(() => {
      })
    }
  }
}
</script>
