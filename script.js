var chocolate = Number(
  prompt("How many chocolate pieces would you like choose 0 to 10")
);

var leftoverChocolate = 10 - chocolate;

if (leftoverChocolate === 10) {
  alert("You didn`t want any chocolate ?");
} else if (leftoverChocolate >= 6) {
  alert(
    `There are ${leftoverChocolate} pieces of chocolate left, still have lots !!`
  );
} else if (leftoverChocolate >= 1) {
  alert(
    `There is ${leftoverChocolate} pieces of chocolate left ..Getting low !`
  );
} else {
  alert(`You ate all the chocolate.. YUMMY !!`);
}
