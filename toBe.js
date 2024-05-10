var expect = function(val) {
    return {"toBe": (n) => {
        if(n===val){
            return true;
        } else {
                throw new Error("Not Equal");
            }
        },
            "notToBe": (n) => {
                if(n!==val){
                    return true;
                }
                else{
                    throw new Error("Equal");
                }
            }
    }
};
