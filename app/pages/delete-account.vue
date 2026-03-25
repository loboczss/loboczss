<template>
  <main class="min-h-screen bg-surface pt-32 pb-24 px-6 md:px-12 lg:px-24">
    <div class="max-w-2xl mx-auto">
      
      <!-- Back Link -->
      <NuxtLink to="/privacy" class="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity flex items-center gap-2 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ $t('privacy.back_home') }}
      </NuxtLink>

      <div v-if="!submitted" class="flex flex-col gap-10">
        <header class="flex flex-col gap-4">
          <h1 class="text-4xl font-bold tracking-tight text-surface-content">
            {{ $t('delete_account.title') }}
          </h1>
          <p class="text-surface-content/60 leading-relaxed">
            {{ $t('delete_account.desc') }}
          </p>
        </header>

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
              class="w-full bg-surface-container/30 border border-surface-container/50 rounded-xl px-4 py-4 focus:border-primary/50 outline-none transition-all text-surface-content resize-none"
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
            <span class="text-sm text-surface-content/40 select-none leading-relaxed">
               {{ $t('delete_account.confirm_label') }}
            </span>
          </label>

          <button 
            type="submit"
            :disabled="loading"
            class="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-[0.2em] py-5 rounded-2xl transition-all disabled:opacity-50"
          >
            <span v-if="!loading">{{ $t('delete_account.submit_btn') }}</span>
            <span v-else class="animate-pulse">PROCESSANDO...</span>
          </button>
        </form>
      </div>

      <!-- Success State -->
      <div v-else class="flex flex-col items-center text-center gap-6 py-12 animate-in fade-in zoom-in duration-500">
        <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h2 class="text-3xl font-bold text-surface-content">
           {{ $t('delete_account.success_title') }}
        </h2>
        <p class="text-surface-content/60 leading-relaxed max-w-md">
           {{ $t('delete_account.success_msg') }}
        </p>
        <NuxtLink to="/" class="mt-6 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary/20 pb-1">
           {{ $t('privacy.back_home') }}
        </NuxtLink>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
const loading = ref(false);
const submitted = ref(false);
const form = reactive({
  email: '',
  reason: '',
  agreed: false
});

const handleSubmit = async () => {
  loading.value = true;
  // Simular envio de API
  await new Promise(resolve => setTimeout(resolve, 1500));
  loading.value = false;
  submitted.value = true;
};

useSeoMeta({
  title: 'Excluir Conta // Loboczss',
  description: 'Solicitação de exclusão definitiva de dados.'
});
</script>
