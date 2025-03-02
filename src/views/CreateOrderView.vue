<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import VoucherListView from './VoucherListView.vue';

</script>

<template>
  <main>
    <div class="flex border rounded-lg min-h-[calc(100vh-4rem)]">
      <div class="w-64 font-semibold p-4 ">
        <p>Dashboard</p>
        <p>Orders</p>
        <p>Voucher Managers</p>
      </div>
      <div class="w-full border-l ">
        <VoucherListView/>
      </div>
    </div>
  </main>
</template>
