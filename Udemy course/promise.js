var resolveHandler = function (res){
    console.log('Resolve Handler');
}

var rejectHandler = function (err){
    console.log('Error');
}

function myPromise(cb){
    this.then = function (thenCb){
        thenCb('1 resolved');
    };
    this.catch = function() {console.log('Error')};
}

var p = new myPromise(function(resolveHandler, rej){
    setTimeout(() => {
        res('2 reslove');
    }, 1000)
});

p.then((res) => {
    console.log(res);
})

