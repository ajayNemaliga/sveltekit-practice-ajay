import NeucronSDK from "neucron-sdk";

/** type {import('./$types').Actions} **/
export const actions = {

    login: async ({request}) => {
	    const data = await request.formData();
        

    const neucron = new NeucronSDK();

    const authModule = neucron.authentication;
    const walletModule = neucron.wallet;

 //const signUpResponse = await authModule.signUp({ email: "sales@timechainlabs.io", password: "string" });
//console.log(signUpResponse);
 //const loginResponse = await authModule.login({ email: "sales@timechainlabs.io", password: "string" });
//console.log(loginResponse);
      const email= data.get('email');
      const password=data.get('password');
      console.log("Received form data:", { email, password });
      const loginResponse = await authModule.login({ email, password });
      console.log(loginResponse);
    // const walletKeys = await walletModule.getWalletKeys({});
    // console.log(walletKeys);

    // For Default wallet balance
    const DefaultWalletBalance = await walletModule.getWalletBalance({});
    console.log(DefaultWalletBalance);

    // const addresses = await walletModule.getAddressesByWalletId({});
    // console.log(addresses);


    // const walletHistory = await walletModule.getWalletHistory({ });
    // console.log(walletHistory);


// console.log('initiating wallet')
// const walletCreation1 = await walletModule.createWallet({ walletName: 'Hello tsoc1' });
// console.log(walletCreation1);

// const walletBalance = await walletModule.getWalletBalance({ walletId: walletCreation1.walletID });
// console.log(walletBalance);

// const addresses = await walletModule.getAddressesByWalletId({ walletId: walletCreation1.walletID });
// console.log(addresses);

// const mnemonic = await walletModule.getMnemonic({ walletId: walletCreation1.walletID });
// console.log(mnemonic);

// const allUtxos = await walletModule.getAllUtxos({ walletId: walletCreation1.walletID });
// console.log(allUtxos);

// const xPubKeys = await walletModule.getXPubKeys({ walletId: walletCreation1.walletID });
// console.log(xPubKeys);
        console.log(data);
        return { loged: true ,balance: DefaultWalletBalance.data.balance.summary };
	},
  pay:async ({request}) => {
    const data = await request.formData();
      

  const neucron = new NeucronSDK();

  const authModule = neucron.authentication;
  const walletModule = neucron.wallet;

    const email= data.get('email');
    const password=data.get('password');
    console.log("Received form data:", { email, password });
    const loginResponse = await authModule.login({ email, password });
    console.log(loginResponse);

    const options = {
      outputs: [
      {
          address: data.get('paymail'),
          note: 'gurudakshina',
          amount: Number(data.get('amount'))
      }
      ]
  };
  console.log(options);
  try {
    const payResponse = await neucron.pay.txSpend(options);
    console.log(payResponse);
    return { payed: true, payment: payResponse.data.txid };
} catch (error) {
    console.error('Pay request failed:', error);
    return { payed: false, error: error.message };
}
  }
}

  