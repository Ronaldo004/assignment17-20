//chapter 17-20// 
// //question 1//
// var array=[],[];
// //question 2//
// var arr1= new Array (3);
// for(let  i=0 ;i<3;i++)
// {
//     arr1[i] = new Array (3);
// }
// arr1[0][0]=0;
// arr1[0][1]=1;
// arr1[0][2]=2;
// arr1[1][0]=3;
// arr1[1][1]=4;
// arr1[1][2]=5;
// arr1[2][0]=6;
// arr1[2][1]=7;
// arr1[2][2]=8;
// for( i=0 ; i<3;i++)
// {
//     for(let j=0 ;j<3;j++)
//     {
//     document.write(arr1[i][j]+ "&nbsp &nbsp &nbsp");
// }
// document.write("<br>")
// }
// question 3
// for(let i=0;i<=10;i++)
// {
//  document.write(i+"<br>")
// }
// question 4
// var a=+prompt("Enter length");
// var b=+prompt("Enter no");

// document.write("Length &nbsp&nbsp&nbsp"+a);
// document.write("<br>"+"Table of &nbsp&nbsp&nbsp"+b)
// for(let i=1 ;i<=a ;i++)
// {
//  var c= b*i;
//  document.write("<br>"+`${b}*${i} =`+c);
// }
// question 5
// var fruits=["orange","mango","apple","bannana"]
// for(let i=0 ; i<fruits.length;i++)
// {
//     document.write(fruits[i]+"<br>");    
// }

// for(let j=0 ; j<fruits.length;j++)
// {
//     document.write("<br>"+"Element index of =&nbsp"+j+"&nbsp"+fruits[j]+"<br>");    
// }
// question 6
// document.write("Counting");
// for(let i=0;i<=15;i++)
// {
//     document.write("&nbsp"+i);    
// }
// document.write("<br>"+"Reverse counting");
// for(let j=10;j>=0;j--)
// {
//     document.write("&nbsp"+j);
// }
// document.write("<br>"+"Even");
    
// for(let j=1;j<=30;j++)
// {
//     if(j%2==0){
//     document.write("&nbsp"+j);
// }



// }

// document.write("<br>"+"Odd");
    
// for(let j=1;j<=30;j++)
// {
//     if(j%2!=0){
//     document.write("&nbsp"+j);
// }



// }
// document.write("<br>"+"series");
    
// for(let j=2;j<=30;j=j+2)
// {
// document.write("&nbsp&nbsp"+j);
// }
// question 7
// var lil=["cookie","chocolate","cake"]
// var b=prompt("enter what you want")
// var c=0;
// for(let i=0;i<=lil.length;i++)
// {
//     if(lil[i]===b)
//     {
//         c=1;
//         document.write("Cookie found at index "+i+"&nbsp"+lil[i]);
//     }


// }
//  if(c===0)
// {
//     document.write("not available right now")
// }
// question 8
//  var arr=[8,7,10,5,1]  
//  var max=arr[0] ;
// for(let i=0;i<=arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         document.write("max no in array"+arr[i]);
//     }
// }
// question 9
// var arr=[2,1,10,11,4,6,8]  
//   var min=arr[0] ;
//  for(let i=0;i<=arr.length;i++)
//  {
//      if(arr[i]<min)
//      {
//          document.write("min no is array"+arr[i]);
//      }
// }
// question 10
// for(let i=5;i<=100;i=i+5)
// {
//     document.write("&nbsp"+i);
// }

