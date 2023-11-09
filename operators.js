// let num=prompt("Enter number:");
function fizzbuzz(num)
{
    if(num%3==0)
    {
        console.log("Fizz");
    }
    else if(num%5==0)
    {
        console.log("buzz");
    }
    else if(num%3==0 && num%5==0)
    {
        console.log("fizz buzz");
    }
    else if(num%3==0 || num%5==0)
    {
        console.log("buzz Fizz");
    }
    else{
        console.log("undefined");
    }
}
fizzbuzz(9);
fizzbuzz(35);
fizzbuzz(15);
fizzbuzz(55);
fizzbuzz(91);

function operators(num)
{
    if(num<0)
    {
        console.log("Negative");
    }
    else if(num>0)
    {
        console.log("Positive");
    }
    else if(num==0)
    {
        console.log("number is zero");
    }
}
operators(87);
operators(0);
operators(-4);

let num1=prompt("Enter first number:");
let num2=prompt("Enter second number:");

function operators2(num1, num2){
    
 // when we take input from prompt that pass string, so we can convert string by using "Number" or "parseInt",
  //  it is only happen when we use "+" operator, not other arithmetic operator.
    let sum=(Number(num1) + Number(num2));   
    console.log("sum is:",sum);

    let sum1=(12+10);
    console.log("sum is:",sum1);

    let diff=num1-num2;
    console.log("differnce is:",diff);

    let mul=num1*num2;
    console.log("Product is:",mul);

    let quo=num1/num2;
    console.log("Quotient is:",quo);

    if(num1>num2)
    {
        console.log("number 1 is greater than number second");
    }
    else if(num1<num2)
    {
        console.log("number 1 is less than number second");
    }
    else if(num1==num2)
    {
        console.log("number 1 is equal to number second");
    }
}
operators2(num1,num2);

function sqr(num)
{
    if(num%3==0)
    {
        let sqrroot=num*num;
        console.log("sqaure root of",num,"is:",sqrroot);
    }
    else if(num%3!=0)
    {
        let rem=num%3;
        value=3-rem;
        console.log("number to be add to make it",num,"divisible by 3 is:",value);
    }
}
sqr(7);
sqr(9);