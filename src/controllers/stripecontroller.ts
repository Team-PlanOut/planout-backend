import dotenv from "dotenv";
import { Request, Response } from "express";

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

dotenv.config();

const getStripePayment = async (req: Request, res: Response) => {
  const service = await stripe ; // what parameters
  res.send(service);
}; 

const domain =
  process.env.ENVIRONMENT === "production"
    ? "https://planout-one.vercel.app/"
    : "localhost:3000";

const postStripePayment = async (req: Request, res: Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: req.params.price,
      },
    ],
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${domain}/#/success`, // task home? or event home?
    cancel_url: `${domain}/#/cancel`, // same as above?
  });
  res.json({ url: session.url });
};

export { postStripePayment, getStripePayment };
