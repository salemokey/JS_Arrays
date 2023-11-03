function task1 () {
    var arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    var result =arr.filter(index=>index%2==0).reduce(function(sum,current)
    {
        return sum + Math.sqrt(current);
    });
    console.log (Math.round(result))
}