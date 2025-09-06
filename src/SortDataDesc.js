function SortDataDesc(params) {
    let result = [];
    
    for (let index = 0; index < params.length; index++) {
        for (let number = 0; number < params.length - index; number++) {
        if (params[number] < params[number + 1]) {
            let temp = params[number];
            params[number] = params[number + 1];
            params[number + 1] = temp;
        }

        result = params;
        }
    }

    return result || [];
  }
  
  module.exports = SortDataDesc;