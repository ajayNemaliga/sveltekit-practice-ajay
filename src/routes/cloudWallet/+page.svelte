<!-- import { Error } from "@sveltejs/kit"; -->
<script lang="ts">
  
  export let form: { loged: any;payed:any; balance: any; error: any; payment: any;
   } ;
</script>

 <div
  class="mt-10 pt-10 w-full  max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
<form method="POST" action="?/login">
  <div class="flex">
    <div class="w-full  md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="email"
      >
        Email
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="email"
        type="text"
        placeholder="Enter email"
        name="email"
      />
    </div>
    <div class="flex -mx-3 mb-2 ">
      <div class="w-full md-w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="passord"
          type="password"
          placeholder="Enter password"
          name="password"
        />
      </div>
      
      <button
        type="submit"
        class="bg-yellow-500  hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-5 py-3 rounded "
      >
        Login
      </button>
    </div>
  </div>
  </form>
  {#if form?.loged}
  <p class="pt-2">Logged In! Your balance is {form.balance}</p>
{:else if form?.error}
  <p class="pt-2">Login unsuccessful: {form.error}</p>
{/if}
  
</div>
 

<div
  class="mt-10 pt-10 w-full  max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
<form method="POST" action="?/pay">
  <div class="flex flex-wrap">
    <div class="w-full  md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="email"
      >
        Email
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="email"
        type="text"
        placeholder="Enter email"
        name="email"
      />
    </div>
    <div class="flex -mx-3 mb-2 ">
      <div class="w-full md-w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="passord"
          type="password"
          placeholder="Enter password"
          name="password"
        />
      </div>
    <div class="w-full  md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="paymail"
      >
        paymail
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="payemail"
        type="text"
        placeholder="Enter paymail"
        name="paymail"
      />
    </div>
    <div class="flex -mx-3 mb-2 ">
      <div class="w-full md-w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="amount"
        >
          Amount
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="amount"
          type="amount"
          placeholder="Enter amount"
          name="amount"
        />
      </div>
      
      <button
        type="submit"
        class="bg-yellow-500  hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-5 py-3 rounded "
      >
        pay
      </button>
    </div>
  </div>
  </form>
  {#if form?.payed}
  <p class="pt-2">The pament was successfull <a target="_blank" class="text-blue-500 hover:text-blue-700"  href="https://whatsonchain.com/tx/{form?.payment}">trancation</a></p>
  {:else if form?.error}
  <p>{form?.error}</p>
{/if}
  
</div>