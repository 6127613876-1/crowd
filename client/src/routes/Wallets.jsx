import React from 'react';
import { base } from "thirdweb/chains";
import { ThirdwebProvider, PayEmbed,getDefaultToken } from "thirdweb/react";
import { Navbar } from '../components';


const Wallets = () => {
    return (

        <div className='gradient-bg-welcome'>
            <Navbar/>
            <div className='mt-36 ' style={{marginLeft:"950px"}}>
                <ThirdwebProvider>
                <PayEmbed
      client="e8728f2c1b6533ca646a30892feb4b07"
      theme={"dark"}
      payOptions={{
        mode: "direct_payment",
        paymentInfo: {
          amount: "35",
          chain: base,
          token: getDefaultToken(base, "USDC"),
          sellerAddress:
            "0xEb0effdFB4dC5b3d5d3aC6ce29F3ED213E95d675",
        },
        metadata: {
          name: "Black Hoodie (Size L)",
          image: "/drip-hoodie.png",
        },
      }}
    />                </ThirdwebProvider>
            </div>
            <br />
            <br/>
            <div>

            </div>
        </div>
    );
};

export default Wallets;

