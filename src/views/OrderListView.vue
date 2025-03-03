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

import orders from "../data/order_list.json";
import { RouterLink } from "vue-router";
import { formatDate, formatNumber } from "@/helper/formatHelper";

// Reactive values for user input
const tempOrderId = ref("");
const tempStatus = ref(""); // Default empty (not filtering initially)
const tempDate = ref("");

// Reactive values for applied filters
const orderIdFilter = ref("");
const statusFilter = ref("");
const dateFilter = ref("");

// Apply function - updates the actual filters
const applyFilters = () => {
  orderIdFilter.value = tempOrderId.value;
  statusFilter.value = tempStatus.value;
  dateFilter.value = tempDate.value;
};

// Reset function - clears all filters
const resetFilters = () => {
  tempOrderId.value = "";
  tempStatus.value = "";
  tempDate.value = "";
  orderIdFilter.value = "";
  statusFilter.value = "";
  dateFilter.value = "";
};

// Computed property for filtered orders
const filteredOrders = computed(() => {
  return orders.filter((order) => {
    return (
      (orderIdFilter.value === "" || order.order_id.includes(orderIdFilter.value)) &&
      (statusFilter.value === "" || order.status === statusFilter.value) &&
      (dateFilter.value === "" || order.order_date.startsWith(dateFilter.value))
    );
  });
});
</script>

<template>
  <div>
    <div class="p-4 shadow-lg">
      <p class="text-2xl font-semibold">List Orders</p>
    </div>
    <div class="p-4 bg-slate-100 w-full">
      <div class="bg-white p-4 mb-4 rounded shadow-lg">
        <div class="flex gap-4 mb-4">
          <input
            v-model="tempOrderId"
            class="rounded w-60 border-slate-300 shadow-lg"
            type="text"
            placeholder="Order ID"
          />
          
          <!-- Dropdown for Status -->
          <select v-model="tempStatus" class="rounded w-60 border-slate-300 shadow-lg p-2">
            <option value="">All Status</option>
            <option value="Done">Done</option>
            <option value="Waiting for Payment">Waiting for Payment</option>
            <option value="Payment Rejected">Payment Rejected</option>
          </select>

          <input
            v-model="tempDate"
            class="rounded w-60 border-slate-300 shadow-lg"
            type="date"
          />
        </div>
        <div class="flex gap-4">
          <button @click="applyFilters" class="bg-blue-800 text-white px-4 py-2 rounded">Apply</button>
          <button @click="resetFilters" class="border border-blue-800 text-blue-800 px-4 py-2 rounded">Reset</button>
        </div>
      </div>
      <div class="bg-white p-4 rounded shadow-lg">
        <div class="flex justify-end mb-4">
          <RouterLink to="/create-order">
            <button class="bg-blue-800 text-white px-4 py-2 rounded">Create Order</button>
          </RouterLink>
        </div>
        <fwb-table>
          <fwb-table-head class="bg-slate-200">
            <fwb-table-head-cell>Status</fwb-table-head-cell>
            <fwb-table-head-cell>Order ID</fwb-table-head-cell>
            <fwb-table-head-cell>Order Date</fwb-table-head-cell>
            <fwb-table-head-cell>Total</fwb-table-head-cell>
          </fwb-table-head>
          <fwb-table-body>
            <fwb-table-row v-for="order in filteredOrders" :key="order.order_id">
              <fwb-table-cell>{{ order.status }}</fwb-table-cell>
              <fwb-table-cell class="text-slate-800 font-semibold">{{ order.order_id }}</fwb-table-cell>
              <fwb-table-cell class="text-slate-800 font-semibold">{{ formatDate(order.order_date) }}</fwb-table-cell>
              <fwb-table-cell class="text-slate-800 font-semibold">Rp {{ formatNumber(order.total) }},-</fwb-table-cell>
            </fwb-table-row>
          </fwb-table-body>
        </fwb-table>
      </div>
    </div>
  </div>
</template>
