<template>
  <div class="row">
    <div class="col-sm-12">
      <h2>Grocery List</h2>
      <router-link :to="'/add'" class="btn btn-sm btn-primary m-b-20" >
        <span class="fa fa-plus"></span> Add
      </router-link>
    </div>

    <div class="col-sm-12">
      <div class="table-responsive">
        <vuetable ref="vuetable"
          :api-mode="false"
          :data="mydata"
          :fields="fields"
          :css="css.table"
        >
          <template slot="actions" slot-scope="props">
            <div class="table-button-container">
              <button class="btn btn-sm btn-warning" @click="editRow(props.rowData)">
                <span class="fa fa-pencil"></span> Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteRow(props.rowData)">
                <span class="fa fa-trash"></span> Delete</button>
            </div>
          </template>
        </vuetable>
      </div>
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'List',
  components: {
    Vuetable
  },
  data () {
    return {
      fields: [
        'id',
        'name',
        'amount',
        {
          name: 'fridge',
          callback: 'formatFridge'
        },
        '__slot:actions'
      ],
      css: {
        table: {
          tableClass: 'table table-hovered',
          loadingClass: 'loading',
          ascendingIcon: 'fa fa-chevron-up',
          descendingIcon: 'fa fa-chevron-down',
          handleIcon: 'fa fa-bars'
        }
      },
      mydata: [
        {
          id: 1,
          name: 'Bread',
          amount: 10,
          fridge: 1,
          created_at: '2017-01-01 07:21:10',
          updated_at: '2017-01-01 07:21:10'
        },
        {
          id: 2,
          name: 'Cake',
          amount: 1,
          fridge: 1,
          created_at: '2017-01-01 07:21:10',
          updated_at: '2017-01-01 07:21:10'
        },
        {
          id: 3,
          name: 'Apple',
          amount: 1,
          fridge: 2,
          created_at: '2017-01-01 07:21:10',
          updated_at: '2017-01-01 07:21:10'
        },
        {
          id: 4,
          name: 'Strawberry',
          amount: 5,
          fridge: 2,
          created_at: '2017-01-01 07:21:10',
          updated_at: '2017-01-01 07:21:10'
        },
        {
          id: 5,
          name: 'Blueberry',
          amount: 8,
          fridge: 3,
          created_at: '2017-01-01 07:21:10',
          updated_at: '2017-01-01 07:21:10'
        }
      ]
    }
  },
  methods: {
    formatFridge (value) {
      return 'Fridge' + value
    },
    editRow (rowData) {
      alert('You clicked edit on' + JSON.stringify(rowData))
    },
    deleteRow (rowData) {
      alert('You clicked delete on' + JSON.stringify(rowData))
    }
  }
}
</script>
