<!-- <script>
    export let names;
	let id='',name='',email='';

	function editUser(user={id:'',name:'',email:''}) {
        id = user.id;
        name = user.name;
        email = user.email;
        console.log(id, name, email);
    }
</script>

<div
	class="mt-20 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>

	<div class="flex items-center justify-between mb-4">
		<div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center space-x-3">
					<div class="flex">
						 <p class="font-medium pt-1 leading-none">{user.id}</p> 
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>                        
					</div>
				</div>
                <form method="POST" action="/profiles?/delete">
                <input type="hidden" name="id" id="id" value={user.id}>
				
				<button type="button" on:click={() =>  {editUser(user)}}>
					<img class="w-4 mr-20 float-right" src="./edit.svg" alt="edit" />
				  </button>
                <button type="submit">
                    <img class="w-4 " src="./trash-can.svg" alt="delete"/>
                </button>
                </form>
			</div>
		{/each}
		<form action="/profiles?/update" method="post">
			<input type="hidden" name="id" id="id" bind:value={id}>
			<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
				Name: 
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
				type="text" name="name" id="name" bind:value={name} ></label>
			<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
				Email: 
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				type="text" name="email" id="email" bind:value={email} ></label>
			<button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-3 py-3 rounded " type="submit">Update User</button>
		</form>
	</div>

</div> -->

<script>
    export let names;
    let id = '';
    let name = '';
    let email = '';

    function editUser(user) {
        id = user.id;
        name = user.name;
        email = user.email;
        console.log(id, name, email);
    }

    function clearFields() {
        id = '';
        name = '';
        email = '';
    }
</script>

<div class="mt-20 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">

    <div class="flex items-center justify-between mb-4">
        <div class="space-y-1">
            <h2 class="text-xl font-semibold">List of Users</h2>
            <p class="text-sm text-gray-500">
                Fetched {names.length} users
            </p>
        </div>
    </div>

    <div class="divide-y divide-gray-900/5">
        {#each names as user (user.id)}
        <div class="flex items-center justify-between py-3">
            <div class="flex items-center space-x-3">
                <div class="flex">
                    <p class="font-medium pt-1 leading-none">{user.name}</p>
                    <p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>
                </div>
            </div>
            <form method="POST" action="/profiles?/delete">
                <input type="hidden" name="id" id="id" value={user.id}>
                <button type="button" on:click={() => editUser(user)}>
                    <img class="w-4 mr-20 float-right" src="./edit.svg" alt="edit" />
                </button>
                <button type="submit">
                    <img class="w-4" src="./trash-can.svg" alt="delete" />
                </button>
            </form>
        </div>
        {/each}

        {#if id !== ''}
        <form action="/profiles?/update" method="post">
            <input type="hidden" name="id" id="id" bind:value={id}>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name:
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text" name="name" id="name" bind:value={name}>
            </label>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email:
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text" name="email" id="email" bind:value={email}>
            </label>
            <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-3 py-3 rounded" type="submit">Update User</button>
            <button type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold mt-5 ml-2 px-3 py-3 rounded" on:click={clearFields}>Cancel</button>
        </form>
        {/if}
    </div>

</div>
