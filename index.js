function add(a, b){
    return a+b
}

function sub(a, b){
    if(!(a > b)) throw new Error("a should be greater than b")
    return a-b
    
}

function multiply(a, b){
    return a*b
}

add(2, 5)
add(10, 23)
add(56, 87)
add(45, 78)

sub(10, 5)


multiply(2, 5)
