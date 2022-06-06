
// const Stripe = require("stripe");
// const stripe = Stripe(/*STRIPE API KEY GOES HERE */)

// for the transfer of funds to the holder of the task //

// const stripePayment = async() => {

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: 10000,
//         currency: 'usd',
//         transfer_group: '{ORDER10}',
//       });

//       const transfer = await stripe.transfers.create({
//         amount: 7000,
//         currency: 'usd',
//         destination: '{{CONNECTED_STRIPE_ACCOUNT_ID}}',
//         transfer_group: '{ORDER10}',
//       });

//       const secondTransfer = await stripe.transfers.create({
//         amount: 2000,
//         currency: 'usd',
//         destination: '{{OTHER_CONNECTED_STRIPE_ACCOUNT_ID}}',
//         transfer_group: '{ORDER10}',
//       });
// }
