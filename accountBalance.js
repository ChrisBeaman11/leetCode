var accountBalanceAfterPurchase = function(purchaseAmount) {
    if(purchaseAmount!==100) return (100 - (Math.round(purchaseAmount/10)*10));
    return 0;
};
//fix
