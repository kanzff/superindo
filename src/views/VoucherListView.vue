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

</script>

<template>
  <div>
    <div class="p-4 shadow-lg">
      <p class="text-2xl font-semibold">Create Orders</p>
    </div>
    <div class="p-4 bg-slate-100 w-full flex gap-4">
      <div class="bg-white p-4 min-w-[640px] rounded">
        <p class="font-semibold text-xl">List Voucher Digital</p>
      </div>
      <div class="bg-white p-4 min-w-[540px] rounded">
        <p class="font-semibold text-xl">Order Summary</p>
      </div>
    </div>
  </div>
</template>
