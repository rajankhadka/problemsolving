function hextodec(number){
    let result = 0;
    // console.log(number.length)
    // console.log(Math.pow(16,0) * parseInt(number))
    for(let i = number.length -1 , j = 0 ; i >= 0 ;i--,j++){

        switch (number[j]) {
            case 'A':
                result = result + (10 * Math.pow(16,i) )
                break;
            
            case 'B':
                result = result + (11 * Math.pow(16,i) )
                break;

            case 'C':
                result = result + (12 * Math.pow(16,i) )
                break;

            case 'D':
                result = result + (13 * Math.pow(16,i) )
                break;

            case 'E':
                result = result + (14 * Math.pow(16,i) )
                break;
            
            case 'F':
                result = result + (15 * Math.pow(16,i) )
                break;
        
            default:
                result = result + (parseInt(number[j]) * Math.pow(16,i) )
        }

        
    }
    console.log(result)
}

function changing(data){
    let alpha = ""
    switch (data) {
        case 10:
            alpha = ("A")
            break;
        
        case 11:
            alpha = ("B")
            break;
        case 12:
            alpha = ("C")
            break;
        case 13:
            alpha = ("D")
            break;
        case 14:
            alpha=("E")
            break;
        case 15:
            alpha=("F")
            break;
        default:
            alpha = (data)
            break;
    }
    return alpha
}

function dectohex(number){
    const hexarray = [];

    number = parseInt(number);

    while(number > 15){
        let data = Math.floor(number/16);
        hexarray.push(changing(data))
        number= (number - (16* data))
    }
    hexarray.push(changing(number))
    console.log(hexarray)
    console.log(hexarray.join(""));
    
}
console.log("start")
hextodec("E1");
dectohex("205")
