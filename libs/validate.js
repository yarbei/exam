module.exports={
    isRequire(input){
        if(typeof input=='string'){
            input=input.replace(/\s/g,'');
        }
        if(typeof input==='undefined'||input===''){
            return false;
        }
        return true;
    }
}