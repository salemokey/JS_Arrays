function task1 () {
    var arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    var result =arr.filter(index=>index%2==0).reduce(function(sum,current)
    {
        return sum + Math.sqrt(current);
    });
    console.log (Math.round(result))
}
function task2 () {
    var arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    var result =arr.filter(index=>index>0&&index<10).reduce(function(sum,current)
    {
        return sum + current;
    });
    console.log (Math.round(result))
}
function task3 () {
    var arr=[];
    while(true)
    {
        var x=prompt("Введите число");
        if (!isNaN(x))
        {
            if (x>0)
                arr.push(Number(x));
        }
        else alert ("введите корректное значение");

        if (!confirm("Внести еще один элемент?")) {
            break; 
        }

        

    }
    var allEven = arr.every(index=>index%2==0);
    alert (allEven);
}
function task4 () {
        var arr=[];
        while(true)
        {
            var x=prompt("Введите число");
            if (!isNaN(x))
            {
                if (x>0)
                    arr.push(Number(x));
            }
            else alert ("введите корректное значение");
    
            if (!confirm("Внести еще один элемент?")) {
                break; 
            }
        }
        var allFive = arr.filter(index=>index%5==0);
        console.log (allFive.toString());
    }
    function task5 () {
        var arr=[1,2,4,5,8];
        var allNumbers = arr.reduce(function(sum,current) {
         return sum + current
        },0);
        allNumbers /= arr.length;
        console.log (allNumbers);
    }
    function task6 () {
        var arr=[];
        while(true)
        {
            var x=prompt("Введите число");
            if (!isNaN(x))
            {
                if (x>0)
                    arr.push(Number(x));
            }
            else alert ("введите корректное значение");
    
            if (!confirm("Внести еще один элемент?")) {
                break; 
            }
        }
        x = arr.shift(x);
        arr.push(x);
        console.log (arr.toString());
    }
    function task6 () {
        var arr=[];
        while(true)
        {
            var x=prompt("Введите число");
            if (!isNaN(x))
            {
                if (x>0)
                    arr.push(Number(x));
            }
            else alert ("введите корректное значение");
    
            if (!confirm("Внести еще один элемент?")) {
                break; 
            }
        }
        x = arr.shift(x);
        arr.push(x);
        console.log (arr.toString());
    }
    function task7 (length, min, max) {
        let randomArray = [];
        for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        console.log (randomArray);
        chetNum = randomArray.reduce (function(sum,current,index) {
            if (index%2==0) {
            sum += current}
            return sum;
        }
      ,0);
      console.log (chetNum);
      nechetNum = randomArray.reduce (function(sum,current,index) {
        if (index%2!=0) {
        sum += current}
        return sum;
    }
  ,0);
      console.log (nechetNum);
      console.log (Math.floor(chetNum / nechetNum));
    }