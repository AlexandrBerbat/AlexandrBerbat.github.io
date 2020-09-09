const obj = 
{
    a: 5,
    b: 10,
    c: 7,
    sum: (x,y,z) => console.log(x+y+z),
    maxNum: (x,y,z) =>
    {
        if(x > y && x >z)
        {
            console.log(x);
        }
        else if(y > x && y > z)
        {
            console.log(y);
        }else
        {
            console.log(z);
        }
    },
}

obj.sum(obj.a, obj.b, obj.c);
obj.maxNum(obj.a, obj.b, obj.c);