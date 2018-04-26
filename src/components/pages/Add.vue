<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="12" class="my-1">
        <h2>Add New Grocery</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="8" class="my-1">
        <form action="#" method="post" class="subscribe-form" data-vv-scope="grocery-form">
          <b-row>
            <b-col md="12" class="form-group">
              <label for="name"> Name </label>
              <b-form-input v-model="grocery.name"
                type="text" id="name" v-validate="'required'"
                placeholder="Enter your name" required></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" class="form-group">
              <label for="amount"> Fridge </label>
              <b-form-select v-model="grocery.fridge" :options="fridges" class="mb-3" />
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" class="form-group">
              <b-button @click="onAddGrocery(grocery)">
                Add
              </b-button>
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Add',

  data: () => {
    return {
      grocery: {
        name: '',
        fridge: 1
      }
    }
  },

  computed: {
    ...mapState({
      'fridges': state => {
        return state.list.fridges
      }
    })
  },

  methods: {
    ...mapActions([
      'addGrocery'
    ]),

    onAddGrocery (grocery) {
      if (!grocery.name) {
        return
      }
      this.addGrocery(grocery)
    }
  }
}
</script>
