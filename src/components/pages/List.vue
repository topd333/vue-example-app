<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" class="my-1">
        <h2>Grocery List</h2>
      </b-col>
    </b-row>

    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group class="mb-0">
          <router-link :to="'/add'" class="btn btn-sm btn-primary m-b-20" >
            <span class="fa fa-plus"></span> Add
          </router-link>
          <b-button class="m-b-20" :size="'sm'" variant="success" @click="showModal">
            Movement
          </b-button>

          <b-modal @ok="updateList" ref="listModal">
            <div class="form-group">
              <label> Fridge1 </label>
              <select class="mb-3 form-control custom-select" v-model="n_fridge1">
                <option v-for="option in list(1)" v-bind:key="option.id" v-bind:value="option.id" v-if="option.fridge===1">
                  {{ option.name }}
                </option>
              </select>
            </div>
            <b-button class="m-b-20" :size="'sm'" variant="success" @click="onUp()">
              Up
            </b-button>
            <b-button class="m-b-20" :size="'sm'" variant="success" @click="onDown()">
              Down
            </b-button>
            <div class="form-group">
              <label> Fridge2 </label>
              <select class="mb-3 form-control custom-select" v-model="n_fridge2">
                <option v-for="option in list(2)" v-bind:key="option.id" v-bind:value="option.id" v-if="option.fridge===2">
                  {{ option.name }}
                </option>
              </select>
            </div>
          </b-modal>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="groceries"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"
    >
      <template slot="fridge" slot-scope="row">{{'Fridge ' + row.item.fridge}}</template>
      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click="deleteGrocery(row.item.id)">
          Used up
        </b-button>
      </template>
    </b-table>

    <!-- User Interface controls -->
    <b-row>
      <b-col md="8" class="my-1">
        <b-pagination :total-rows="groceries.length" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
      <b-col md="4" class="my-1">
        <b-form-group horizontal label="Per page" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import draggable from 'vuedraggable'

export default {
  name: 'List',

  components: {
    draggable
  },

  data () {
    return {
      fields: [
        { key: 'name', label: 'Name', sortable: true },
        { key: 'amount', label: 'Amount', sortable: true, 'class': 'text-center' },
        { key: 'fridge', label: 'Fridge' },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 10,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      filter: null,
      n_fridge1: null,
      n_fridge2: null
    }
  },

  computed: {
    ...mapState({
      'groceries': state => {
        return state.list.groceries
      },
      'n_groceries': state => {
        return state.list.n_groceries
      }
    }),

    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },

  methods: {
    ...mapActions([
      'deleteGrocery',
      'updateFridge',
      'applyFridge',
      'initFridge'
    ]),

    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },

    showModal () {
      this.initFridge()
      this.$refs.listModal.show()
    },

    list (id) {
      let items = []
      for (var i = this.n_groceries.length - 1; i >= 0; i--) {
        if (this.n_groceries[i].fridge === id) {
          items.push(this.n_groceries[i])
        }
      }
      return items
    },

    updateList () {
      this.applyFridge()
    },

    onUp () {
      this.updateFridge({id: this.n_fridge2, fridge: 1})
      this.n_fridge2 = null
    },

    onDown () {
      this.updateFridge({id: this.n_fridge1, fridge: 2})
      this.n_fridge1 = null
    }
  }
}
</script>
