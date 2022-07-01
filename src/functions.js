

function validateForm(obj,rules){
    let validated = {
        allValid: true
    };
    for(let r in rules){
        if((rules[r] == "required" || rules[r].isRequired ) &&
            obj[r] == undefined || obj[r] == '' ){
                validated[r] = 'empty';
        }else if((rules[r] != "required" || rules[r].isRequired ) &&
            obj[r] == undefined || obj[r] == '' ){
                validated[r] = true;  
        }else if(r != 'callback'){
            let emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            let intregex = /[0-9]+/;

            validated[r] = true;

            if(rules[r].isEmail == true &&  obj[r].toLowerCase().match(emailregex))
                validated[r] = true;
            else if (rules[r].isEmail == true )
                validated[r] = 'invalid email';

            if(rules[r].isInteger == true && obj[r].match(intregex))
                validated[r] = true;
            else if(rules[r].isInteger == true) 
                validated[r] = 'invalid number';
            
            if(typeof rules[r].minChars == 'number' && rules[r].minChars <= obj[r].length)
                validated[r] = true;
            else if(typeof rules[r].minChars == 'number') 
                validated[r] = 'invalid length';

            if(typeof rules[r].maxChars == 'number' && rules[r].maxChars >= obj[r].length)
                validated[r] = true;
            else if(typeof rules[r].minChars == 'number') 
                validated[r] = 'invalid length';
        }
    }

    let someEmpty = false;
    for(let v in validated){
        if(validated[v] === 'empty'){
            validated.allValid = false;
            rules.callback();
            someEmpty = true;
            break;
        }
    }
    if(!someEmpty){
        for(let v in validated){
            if(validated[v] != true){
                validated.allValid = false;
                rules[v].callback(validated[v]);
                break;
            }
        }
    }

    return validated;
}

function toFormData(obj){
    var fd = new FormData();
    for(var i in obj){
        fd.append(i,obj[i]);
    }
    return fd;
}


export { toFormData, validateForm };