import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import {
  Typography,
} from '@mui/material';
import { useMoralis } from "react-moralis";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51NV05cGc5cz7uc72xTzSNZNeg3dsIWX9hZo4Y7nZH5WnFF8nuEJJwhSGviE29JHXzm8zovxToQDDVjLzfND57MWj00NdjCWocu");
  }

  return stripePromise;
};

const Checkout3 = (props) => {
  const [stripeError, setStripeError] = useState(null);
  const {Moralis}=useMoralis()

  const [isLoading, setLoading] = useState(false);
  const item = [{
    price: "price_1NmmPXGc5cz7uc72lfGZECTc",
    quantity: 1,
  }
]


  const redirectToCheckout = async () => {
    setLoading(true);
    let user=await Moralis.User.current()
if(!user){ 
       setLoading(false);

  return
}
    console.log("redirectToCheckout "+props.title);

  if(props.title){
      
      
  
      const query = new Moralis.Query("_User");

      query.equalTo("planName",props.title)     
      query.equalTo("planActive",true)     
     let object= await query.find()
let numberSusbcription=object.length
console.log(numberSusbcription)
      if(props.title=="Explorador"){

        if(numberSusbcription>=5){
          console.log("Maximas Subscripciones")
          return 
        }
      } 
      if(props.title=="Emprendedor Express"){

        if(numberSusbcription>=5){
          console.log("Maximas Subscripciones")
          return 
        }

      }

      if(props.title=="Visionario Flexible"){
        
        if(numberSusbcription>=5){
          console.log("Maximas Subscripciones")
          return 
        }
        
      } 
      if(props.title=="Innovador Dedicado"){
        if(numberSusbcription>=6){
          console.log("Maximas Subscripciones")
          return 
        }
      }
      if(props.title=="Líder Elite"){
        if(numberSusbcription>=2){
          console.log("Maximas Subscripciones")
          return 
        }
      }
      if(props.title=="Corporativo Vanguardista"){
        if(numberSusbcription>=1){
          console.log("Maximas Subscripciones")
          return 
        }
      }
      
      if(props.title=="Titán del Éxito"){
        if(numberSusbcription>=3){
          console.log("Maximas Subscripciones")
          return 
        }
      } 

    const stripe = await getStripe();
    const { error,  } = await stripe.redirectToCheckout({
      lineItems:item ,
      mode: "subscription",
      successUrl: `${window.location.origin}/reservas?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/customers`,
      customerEmail: user?.get("email"),

    });





    
    if (error) {
      setStripeError(error.message);
       setLoading(false);
     } else{
      console.log("entro todo")
      setLoading(false);

     };
    }
      
  }
   if (stripeError) alert(stripeError);
    return (
      <div className="checkout">
        
        <button
          className="checkout-button"
          onClick={redirectToCheckout}
          disabled={isLoading}
        >
          <div className="grey-circle">
            <div className="purple-circle">
              <img className="icon" src={"https://bafkreibrxdw7vkfljus6emn45nbks2e4n3ge2h3dxki4dvhchhaap5eymi.ipfs.nftstorage.link/"} alt="credit-card-icon" />
            </div>
          </div>
          <div className="text-container">
          <Typography variant="h6">
          {isLoading ? "Cargando..." : "Comprar"}
                </Typography>
          </div>
        </button>
      </div>
    );
};

export default Checkout3;
