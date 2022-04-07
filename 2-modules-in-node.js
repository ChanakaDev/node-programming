// If we didn't have Modules
const harsha = "Harsha Bandara";
const kasun = "Kasun Harshana";
const kamal = "Kamal Wijethunga";

const sayAyubowan = (name) => {
  console.log(`Ayubowan, ${name}!!!`);
};

sayAyubowan(harsha);
sayAyubowan(kasun);
sayAyubowan(kamal);

/*
Problems
========================

(*) we cannot protect(or Encapsulate variables)
(*) there is no separation of inputs, processes and outputs(function calls)
(*) when code getting more lengthy, there is no readability will remain

So, we can devide this little program into 3 sections to demonstrate the modules in 'node'
*/
