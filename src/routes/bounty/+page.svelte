<script>
  export let form;
</script>

<div
class="mt-10 pt-10 mb-20 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
<form method="POST" action="?/deploy">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="bounty"
      >
        bounty amount
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="bounty"
        type="number"
        placeholder="Enter bounty amount"
        name="bounty"
        
      />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="square"
      >
        Enter the number
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="square"
        type="number"
        placeholder="Enter number"
        name="square"
      />
    </div>
  
    <button
      type="submit"
      class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded "
    >
      Deploy Bounty
    </button>
  </div>
</form>
{#if form?.deploy}
  <!-- this message is ephemeral; it exists because the page was rendered in
     response to a form submission. it will vanish if the user reloads -->
  <p class="pt-2">Bounty was deployed successfully <a class="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1" href="https://whatsonchain.com/tx/{form?.txid}">Trancation Id</a></p>
{:else if !form?.deploy}
 <p class="text-red-500 text-sm">{form?.error ===undefined ?'':form?.error}</p>

{/if}
</div>
<div
class="mt-10 pt-10 mb-20 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
<form method="POST" action="?/unlock">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="root"
      >
        root
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="root"
        type="number"
        placeholder="Enter root value"
        name="root"
      />
    </div>
  
    <button
      type="submit"
      class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded "
    >
      Unlock Bounty
    </button>
  </div>
</form>
{#if form?.unlock}
  <!-- this message is ephemeral; it exists because the page was rendered in
     response to a form submission. it will vanish if the user reloads -->
  <p class="pt-2">Bounty was unlocked successfully <a class="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1" href="https://whatsonchain.com/tx/{form?.txid}">Trancation Id</a></p>
  {:else if !form?.deploy}
 <p class="text-red-500 text-sm">{form?.error1 ===undefined ?'':form?.error1}</p>
{/if}
</div>