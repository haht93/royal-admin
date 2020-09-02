<template>
<div>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">Striped Table</h4>
            <p class="card-description">
            Add class <code>.table-striped</code>
            </p>
            <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in listUser" :key="item.id">
                    <td class="py-1"><img :src="item.avatar" alt="image"/></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    <footer class="footer">
        <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018 <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrapdash</a>. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="ti-heart text-danger ml-1"></i></span>
        </div>
    </footer>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'users',
    created () {
        this.getUsers()
    },
    computed: {
        ...mapGetters({
        listUser: 'users/listUser'
        })
    },
    methods: {
        ...mapActions({
            getUsers: 'users/getUsers'
        })
    }
}
</script>

<style>

</style>