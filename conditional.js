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