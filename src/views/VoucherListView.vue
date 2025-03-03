<script setup>
import { ref, computed } from "vue";
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";

import vouchersData from "../data/voucher_list.json";
import { formatNumber } from "@/helper/formatHelper";

// Reactive state for vouchers with quantity
const vouchers = ref(vouchersData.map(voucher => ({ ...voucher, quantity: 0 })));

// Function to increase quantity
const increaseQuantity = (voucher) => {
  voucher.quantity++;
};

// Function to decrease quantity (min 0)
const decreaseQuantity = (voucher) => {
  if (voucher.quantity > 0) {
    voucher.quantity--;
  }
};

// Computed property to get selected vouchers
const selectedVouchers = computed(() => {
  return vouchers.value.filter(voucher => voucher.quantity > 0);
});

// Computed property to get total price
const totalPrice = computed(() => {
  return selectedVouchers.value.reduce((sum, voucher) => sum + (voucher.denom * voucher.quantity), 0);
});
</script>

<template>
  <div>
    <div class="p-4 shadow-lg">
      <p class="text-2xl font-semibold">Create Orders</p>
    </div>
    <div class="p-4 bg-slate-100 w-full flex gap-4">
      <!-- Voucher List -->
      <div class="bg-white px-6 py-4 min-w-[640px] rounded">
        <p class="font-semibold text-xl mb-4 border-b border-slate-500 pb-4">List Voucher Digital</p>
        <div v-for="voucher in vouchers" :key="voucher.code" class="flex gap-4 mb-4">
          <div class="w-[250px] h-[200px] bg-slate-200 rounded">
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <p>{{ voucher.title }}</p>
              <p>Denom: {{ voucher.denom }}</p>
              <p>Code: {{ voucher.code }}</p>
            </div>
            <div class="mb-4 flex items-center">
              <button 
                @click="decreaseQuantity(voucher)" 
                class="mr-4 border border-slate-600 rounded-2xl w-[30px] h-[30px] flex items-center justify-center"
              >-</button>
              
              <input 
                v-model="voucher.quantity" 
                class="w-20 mr-4 rounded h-[30px] border border-slate-600 text-center"
                type="number" min="0" readonly
              >
              
              <button 
                @click="increaseQuantity(voucher)" 
                class="text-white bg-slate-600 rounded-2xl w-[30px] h-[30px] flex items-center justify-center"
              >+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-white px-6 py-4 min-w-[540px] rounded">
        <p class="font-semibold text-xl mb-4 border-b border-slate-500 pb-4">Order Summary</p>

        <div v-if="selectedVouchers.length">
          <div v-for="voucher in selectedVouchers" :key="voucher.code" class="mb-2">
            <p class="font-semibold">{{ voucher.title }}</p>
            <p class="text-gray-600">{{ formatNumber(voucher.denom) }} × {{ voucher.quantity }} = {{ formatNumber(voucher.denom * voucher.quantity) }}</p>
          </div>

          <hr class="my-4">
          <div class="flex justify-between">
            <p class="font-semibold text-lg">Total</p>
            <p class="font-semibold text-lg">Rp {{ formatNumber(totalPrice) }},-</p>
          </div>
          <div class="flex justify-center mt-12">
            <button class="px-6 py-4 w-60 bg-blue-800 text-white rounded">Place Order</button>
          </div>
        </div>
        <p v-else class="text-gray-500">No vouchers selected</p>
      </div>
    </div>
  </div>
</template>
