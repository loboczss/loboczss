<script setup lang="ts">
const loading = ref(false);
const submitted = ref(false);
const emit = defineEmits(['success']);

const form = reactive({
  email: '',
  reason: '',
  agreed: false
});

const handleSubmit = async () => {
  loading.value = true;
  // Simulated API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  loading.value = false;
  submitted.value = true;
  emit('success');
};
</script>

<template>
  <div v-if="!submitted">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-8">
      <!-- Email Input -->
      <div class="flex flex-col gap-3">
        <label class="text-[10px] font-bold uppercase tracking-widest text-surface-content/40">
          {{ $t('delete_account.email_label') }}
        </label>
        <input 
          v-model="form.email"
          type="email" 
          required
          class="w-full bg-surface-container/30 border border-surface-container/50 rounded-xl px-4 py-4 focus:border-primary/50 outline-none transition-all text-surface-content"
          placeholder="seu@email.com"
        />
      </div>

      <!-- Reason Input -->
      <div class="flex flex-col gap-3">
        <label class="text-[10px] font-bold uppercase tracking-widest text-surface-content/40">
           {{ $t('delete_account.reason_label') }}
        </label>
        <textarea 
          v-model="form.reason"
          rows="4"
          class="w-full bg-surface-container/30 border border-surface-container/50 rounded-xl px-4 py-4 focus:border-primary/50 outline-none transition-all text-surface-content resize-none uppercase text-[10px] tracking-widest"
          placeholder="..."
        ></textarea>
      </div>

      <!-- Checkbox -->
      <label class="flex items-start gap-4 cursor-pointer group">
        <div class="mt-1 relative flex items-center justify-center">
           <input 
             v-model="form.agreed"
             type="checkbox" 
             required
             class="peer w-5 h-5 opacity-0 absolute" 
           />
           <div class="w-5 h-5 bg-surface-container border border-surface-container/80 rounded transition-all peer-checked:bg-primary peer-checked:border-primary group-hover:border-primary/50"></div>
           <svg class="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span class="text-xs text-surface-content/40 select-none leading-relaxed italic">
           {{ $t('delete_account.confirm_label') }}
        </span>
      </label>

      <button 
        type="submit"
        :disabled="loading"
        class="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-[0.2em] py-5 rounded-2xl transition-all disabled:opacity-50 border border-primary/20 shadow-xl shadow-primary/10"
      >
        <span v-if="!loading">{{ $t('delete_account.submit_btn') }}</span>
        <span v-else class="animate-pulse">TRANSMITINDO...</span>
      </button>
    </form>
  </div>
</template>
