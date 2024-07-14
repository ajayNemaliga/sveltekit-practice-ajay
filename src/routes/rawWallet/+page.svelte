<script lang=ts>

  import { PrivateKey } from "@bsv/sdk";

  let WIF: string='';
  let address:string='';

  function createkeys(){
    const privKey=PrivateKey.fromRandom()
    WIF=privKey.toWif()
    console.log("Private Key WIF format is",WIF)
    address= privKey.toAddress()
    console.log("you bitcoin address : ",address)


  }

</script>
<section class="px-10 py-10">
    
    <button on:click={createkeys} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate New wallet Keys</button> <br><br>
    <p><span class="font-bold">Private Key WIF format is :  </span>{WIF}</p><br>
    <p><span class="font-bold">you bitcoin address :   </span>{ address}</p>
</section>