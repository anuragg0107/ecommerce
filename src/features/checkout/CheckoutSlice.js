import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./CheckoutAPI";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;



// {/* <div class="gx tv cxm">
//         <h1 class="t">Checkout</h1>
//         <form class="cva cyr czt dkw">
//           <div>
//             <div>
//               <h2 class="avz awe axv">Contact information</h2>
//               <div class="lh">
//                 <label for="email-address" class="lu awa awe axt">
//                   Email address
//                 </label>
//                 <div class="ku">
//                   <input
//                     type="email"
//                     id="email-address"
//                     name="email-address"
//                     autocomplete="email"
//                     class="lu tn adu afv bbn bml bnq cid"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div class="kw afm afu auo">
//               <h2 class="avz awe axv">Shipping information</h2>
//               <div class="lh mb yg aau cat cby">
//                 <div>
//                   <label for="first-name" class="lu awa awe axt">
//                     First name
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       id="first-name"
//                       name="first-name"
//                       autocomplete="given-name"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label for="last-name" class="lu awa awe axt">
//                     Last name
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       id="last-name"
//                       name="last-name"
//                       autocomplete="family-name"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div class="buf">
//                   <label for="company" class="lu awa awe axt">
//                     Company
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="company"
//                       id="company"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div class="buf">
//                   <label for="address" class="lu awa awe axt">
//                     Address
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="address"
//                       id="address"
//                       autocomplete="street-address"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div class="buf">
//                   <label for="apartment" class="lu awa awe axt">
//                     Apartment, suite, etc.
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="apartment"
//                       id="apartment"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label for="city" class="lu awa awe axt">
//                     City
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="city"
//                       id="city"
//                       autocomplete="address-level2"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label for="country" class="lu awa awe axt">
//                     Country
//                   </label>
//                   <div class="ku">
//                     <select
//                       id="country"
//                       name="country"
//                       autocomplete="country-name"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     >
//                       <option>United States</option>
//                       <option>Canada</option>
//                       <option>Mexico</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label for="region" class="lu awa awe axt">
//                     State / Province
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="region"
//                       id="region"
//                       autocomplete="address-level1"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label for="postal-code" class="lu awa awe axt">
//                     Postal code
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="postal-code"
//                       id="postal-code"
//                       autocomplete="postal-code"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div class="buf">
//                   <label for="phone" class="lu awa awe axt">
//                     Phone
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="phone"
//                       id="phone"
//                       autocomplete="tel"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="kw afm afu auo">
//               <div
//                 id="headlessui-radiogroup-14"
//                 role="radiogroup"
//                 aria-labelledby="headlessui-label-5"
//               >
//                 <label class="avz awe axv" id="headlessui-label-5" role="none">
//                   Delivery method
//                 </label>
//                 <div class="lh mb yg aau cat cby" role="none">
//                   <div
//                     class="agy ab lx xq adt aez alo aqt bbn bmz"
//                     id="headlessui-radiogroup-option-9"
//                     role="radio"
//                     aria-checked="true"
//                     tabindex="0"
//                     data-headlessui-state="checked"
//                     aria-labelledby="headlessui-label-6"
//                     aria-describedby="headlessui-description-7 headlessui-description-8"
//                   >
//                     <span class="lx um">
//                       <span class="lx yr">
//                         <span class="lu awa awe axv" id="headlessui-label-6">
//                           Standard
//                         </span>
//                         <span
//                           class="ku lx yz awa axr"
//                           id="headlessui-description-7"
//                         >
//                           4–10 business days
//                         </span>
//                         <span
//                           class="lk awa awe axv"
//                           id="headlessui-description-8"
//                         >
//                           $5.00
//                         </span>
//                       </span>
//                     </span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       class="nz sb ayh"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
//                         clip-rule="evenodd"
//                       ></path>
//                     </svg>
//                     <span class="afb agg u aa aj adt" aria-hidden="true"></span>
//                   </div>
//                   <div
//                     class="afv ab lx xq adt aez alo aqt bbn bmz"
//                     id="headlessui-radiogroup-option-13"
//                     role="radio"
//                     aria-checked="false"
//                     tabindex="-1"
//                     data-headlessui-state=""
//                     aria-labelledby="headlessui-label-10"
//                     aria-describedby="headlessui-description-11 headlessui-description-12"
//                   >
//                     <span class="lx um">
//                       <span class="lx yr">
//                         <span class="lu awa awe axv" id="headlessui-label-10">
//                           Express
//                         </span>
//                         <span
//                           class="ku lx yz awa axr"
//                           id="headlessui-description-11"
//                         >
//                           2–5 business days
//                         </span>
//                         <span
//                           class="lk awa awe axv"
//                           id="headlessui-description-12"
//                         >
//                           $16.00
//                         </span>
//                       </span>
//                     </span>
//                     <span class="afb agy u aa aj adt" aria-hidden="true"></span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="kw afm afu auo">
//               <h2 class="avz awe axv">Payment</h2>
//               <fieldset class="lh">
//                 <legend class="t">Payment type</legend>
//                 <div class="abw bxr cbi cck ccr">
//                   <div class="lx yz">
//                     <input
//                       id="credit-card"
//                       name="payment-type"
//                       type="radio"
//                       class="nw rx afv ayh bnq"
//                       checked=""
//                     />
//                     <label for="credit-card" class="jw lu awa awe axt">
//                       Credit card
//                     </label>
//                   </div>
//                   <div class="lx yz">
//                     <input
//                       id="paypal"
//                       name="payment-type"
//                       type="radio"
//                       class="nw rx afv ayh bnq"
//                     />
//                     <label for="paypal" class="jw lu awa awe axt">
//                       PayPal
//                     </label>
//                   </div>
//                   <div class="lx yz">
//                     <input
//                       id="etransfer"
//                       name="payment-type"
//                       type="radio"
//                       class="nw rx afv ayh bnq"
//                     />
//                     <label for="etransfer" class="jw lu awa awe axt">
//                       eTransfer
//                     </label>
//                   </div>
//                 </div>
//               </fieldset>
//               <div class="lk mb yk aag aau">
//                 <div class="eu">
//                   <label for="card-number" class="lu awa awe axt">
//                     Card number
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       id="card-number"
//                       name="card-number"
//                       autocomplete="cc-number"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div class="eu">
//                   <label for="name-on-card" class="lu awa awe axt">
//                     Name on card
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       id="name-on-card"
//                       name="name-on-card"
//                       autocomplete="cc-name"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div class="et">
//                   <label for="expiration-date" class="lu awa awe axt">
//                     Expiration date (MM/YY)
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="expiration-date"
//                       id="expiration-date"
//                       autocomplete="cc-exp"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label for="cvc" class="lu awa awe axt">
//                     CVC
//                   </label>
//                   <div class="ku">
//                     <input
//                       type="text"
//                       name="cvc"
//                       id="cvc"
//                       autocomplete="csc"
//                       class="lu tn adu afv bbn bml bnq cid"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="kw cui">
//             <h2 class="avz awe axv">Order summary</h2>
//             <div class="lh adt aez afu alo bbn">
//               <h3 class="t">Items in your cart</h3>
//               <ul role="list" class="acc acg">
//                 <li class="lx ari ase cfc">
//                   <div class="up">
//                     <img
//                       src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg"
//                       alt="Front of men's Basic Tee in black."
//                       class="rq adu"
//                     />
//                   </div>
//                   <div class="jz lx um yr">
//                     <div class="lx">
//                       <div class="tq um">
//                         <h4 class="awa">
//                           <a href="#" class="awe axt bla">
//                             Basic Tee
//                           </a>
//                         </h4>
//                         <p class="ku awa axr">Black</p>
//                         <p class="ku awa axr">Large</p>
//                       </div>
//                       <div class="jx ma up">
//                         <button
//                           type="button"
//                           class="ft lx yz ze alo aqr axp bkx"
//                         >
//                           <span class="t">Remove</span>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             aria-hidden="true"
//                             class="nz sb"
//                           >
//                             <path
//                               fill-rule="evenodd"
//                               d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 
//           7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
//                               clip-rule="evenodd"
//                             ></path>
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                     <div class="lx um yy zf aut">
//                       <p class="ku awa awe axv">$32.00</p>
//                       <div class="jx">
//                         <label for="quantity" class="t">
//                           Quantity
//                         </label>
//                         <select
//                           id="quantity"
//                           name="quantity"
//                           class="adu aez afv avk avy awe axt bbn bml bmz bnd bnq cid"
//                         >
//                           <option value="1">1</option>
//                           <option value="2">2</option>
//                           <option value="3">3</option>
//                           <option value="4">4</option>
//                           <option value="5">5</option>
//                           <option value="6">6</option>
//                           <option value="7">7</option>
//                           <option value="8">8</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li class="lx ari ase cfc">
//                   <div class="up">
//                     <img
//                       src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-02.jpg"
//                       alt="Front of men's Basic Tee in sienna."
//                       class="rq adu"
//                     />
//                   </div>
//                   <div class="jz lx um yr">
//                     <div class="lx">
//                       <div class="tq um">
//                         <h4 class="awa">
//                           <a href="#" class="awe axt bla">
//                             Basic Tee
//                           </a>
//                         </h4>
//                         <p class="ku awa axr">Sienna</p>
//                         <p class="ku awa axr">Large</p>
//                       </div>
//                       <div class="jx ma up">
//                         <button
//                           type="button"
//                           class="ft lx yz ze alo aqr axp bkx"
//                         >
//                           <span class="t">Remove</span>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             aria-hidden="true"
//                             class="nz sb"
//                           >
//                             <path
//                               fill-rule="evenodd"
//                               d="M8.75 1A2.75 2.75 0 006 
//            3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 
//            19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75
//             2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25
//              1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0
//               10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
//                               clip-rule="evenodd"
//                             ></path>
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                     <div class="lx um yy zf aut">
//                       <p class="ku awa awe axv">$32.00</p>
//                       <div class="jx">
//                         <label for="quantity" class="t">
//                           Quantity
//                         </label>
//                         <select
//                           id="quantity"
//                           name="quantity"
//                           class="adu aez afv avk avy awe axt bbn bml 
//                bmz bnd bnq cid"
//                         >
//                           <option value="1">1</option>
//                           <option value="2">2</option>
//                           <option value="3">3</option>
//                           <option value="4">4</option>
//                           <option value="5">5</option>
//                           <option value="6">6</option>
//                           <option value="7">7</option>
//                           <option value="8">8</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//               <dl class="aby afm afu ari ase cfc">
//                 <div class="lx yz zf">
//                   <dt class="awa">Subtotal</dt>
//                   <dd class="awa awe axv">$64.00</dd>
//                 </div>
//                 <div class="lx yz zf">
//                   <dt class="awa">Shipping</dt>
//                   <dd class="awa awe axv">$5.00</dd>
//                 </div>
//                 <div class="lx yz zf">
//                   <dt class="awa">Taxes</dt>
//                   <dd class="awa awe axv">$5.52</dd>
//                 </div>
//                 <div class="lx yz zf afm afu ave">
//                   <dt class="avy awe">Total</dt>
//                   <dd class="avy awe axv">$75.52</dd>
//                 </div>
//               </dl>
//               <div class="afm afu ari ase cfc">
//                 <button
//                   type="submit"
//                   class="tn adu aez agy ajr ari arz avy
//                 awe bah bbn biv bmz bne bnq bog bok"
//                 >
//                   Confirm order
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div> */}
