function receivesAFunction(spy){
    return spy();
}
receivesAFunction(function spy(){
    return spy
})

function returnsANamedFunction(){
    return function fn(){
        return;
    };
}
var fn = returnsANamedFunction()

let returnsAnAnonymousFunction= function fn(){
    return(function(){
        return
    })
}
fn();