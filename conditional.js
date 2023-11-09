function ifelsecondition(value)
{
    
    if(value=="A")
    {
        console.log("Apple");
    }
    else if(value=="B")
    {
        console.log("Banana");
    }
    else{
        console.log("I don't know");
    }
}
ifelsecondition("A");
ifelsecondition("B");
ifelsecondition("C");

function fizzbuzz(num)
{
    if(num%3==0)
    {
        console.log("fizz");
    }
    else if(num%5==0)
    {
        console.log("buzz");
    }
    else{
        console.log("fizz buzz");
    }
}
fizzbuzz(35);
fizzbuzz(15);
fizzbuzz(98);

function largestnum(num1,num2,num3,num4,num5)
{
    console.log(num1,num2,num3,num4,num5);
    if(num1>num2 && num1> num3 && num1>num4 && num1>num5)
    {
        console.log("largest number",num1);
    }
    else if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
    {
        console.log("largest number",num2);
    }
    else if(num3>num1 && num3>num2 && num3>num4 && num3>num5)
    {
        console.log("largest number",num3);
    }
    else if(num4>num1 && num4>num2 && num4>num3&& num4>num5)
    {
        console.log("largest number",num4);
    }
    else if(num5>num1 && num5>num2 && num5>num3&& num5>num4)
    {
        console.log("largest number",num5);
    }
    else{
        console.log("undefined");
    }
}
largestnum(100,23,43,89,90);

function speed(dist,time)
{
    let speed= (dist/time);
    if(speed>40)
    {
        console.log("Apply Brake");
    }
    else
    {
        console.log("Keep going");
    }
}
speed(2500,50);