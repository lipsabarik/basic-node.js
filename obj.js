
 const details ={
  fullname :"lipsa",
    age:20,
     cgp:7.9,
    id:2
 }
    details.id="3"
    console.log(details)
    const detailstwo={...details,ph:"546876",add:"bbsr"}
    console.log(detailstwo)
    const{id,add}=detailstwo;
    console.log(id)
    console.log(add);