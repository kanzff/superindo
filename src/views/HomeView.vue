<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import OrderListView from './OrderListView.vue';
import logo from "../assets/superindo.png"

</script>

<template>
  <main>
    <div class="flex border rounded-lg min-h-[calc(100vh-4rem)]">
      <div class="w-64 font-semibold">
        <div class="w-full h-[200px] border-b border-slate-500 mb-8">
          <img :src="logo">
        </div>
        <div class="p-4">
          <p class="border-b border-slate-500 py-2"><v-icon name="fa-home"/> <span class="ml-2">Dashboard</span></p>
          <p class="border-b border-slate-500 py-2"><v-icon name="oi-package"/> <span class="ml-2">Orders</span></p>
          <p class="border-b border-slate-500 py-2"><v-icon name="bi-list-check"/> <span class="ml-2">Voucher Manager</span></p>
        </div>
      </div>
      <div class="w-full border-l ">
        <OrderListView/>
      </div>
    </div>
  </main>
</template>
