const HIDDEN_PANEL_FLOW = {
  step1: {
    price: 0,
    content: "3 frequency audit questions"
  },
  step2: {
    price: 11,
    content: "Case study: How billionaires use numerology in business",
    oneTime: true
  },
  step3: {
    price: 33,
    content: "33 Life Path lessons + Universal Timing Calendar",
    recurring: true
  }
}

// After questionnaire
<PricingCard 
  title="Unlock Billionaire Secrets"
  price={11}
  oneTime={true}
  cta="See How They Do It"
/>
