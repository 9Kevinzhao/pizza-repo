class pizza{
  //type constructor below
constructor(S,MT,VT){
  this.size = s; // array["s","m","l","xl"]
  this.meatToppings = mt; //
  this.veggieToppings = vt;
}


  //type instance functions below
sizeCost(){
  let cost=0;
  if(this.size == "s"){}
    return cost=7.99;
  }
  if(this.size == "m"){
    return cost = 9.99
  }
  if(this.size == "l"){
    return cost = 12.99
  }
  if(this.size == "xl"){
    return cost = 15.99
  }
}

toppingCost(top){
  let toppingCost=0
  if(top == "meat"){
    toppingCost = this.meatToppings.length*0.99
    return toppingCost
  }

  if(top == "veggie"){
    toppingCost=this.veggieToppings.length*0.50
    return 0.50
    }
}

price(){
  let totalCost=cost+toppingCost
  return totalCost
}


  //type class functions below
static promotion(pizza,percent)
{
  let finalcost=totalCost*percent
  return finalcost
}
