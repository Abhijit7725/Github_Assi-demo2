//Problem : Print Prime Numbers from 1 to given limit


for(i=1;i<=50;i++)
  {
    let count_factors=0;

    for(let j=1; j<=i; j++)
    {
    if(i%j==0)
    {
      count_factors++;
    }
    }
  
if(count_factors==2)
{
  console.log(i, "is prime no:")
  
}
else
{
   console.log(i,"is not prime number")
}
    }