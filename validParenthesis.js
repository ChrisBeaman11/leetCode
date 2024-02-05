var isValid = function(s) {
    let stack = [];
    let openArr = [];
    let closeArr = [];
        for(let i = 0; i<s.length; i++){
            if(s[i] === "(" || s[i] === "{"|| s[i] === "["){
                stack.push(s[i]);
                openArr.push(s[i]);

            }
            if(s[i] === ")" || s[i] === "}"|| s[i] === "]"){
                closeArr.push(s[i]);
                let open = stack.pop();
                if(open === "(" && s[i] !== ")" || open === "[" && s[i]!== "]" || open === "{" && s[i]!== "}" || open === undefined){
                    return false;
                }
            }

        }
        if(openArr.length !== closeArr.length) return false;

        return true;
};
