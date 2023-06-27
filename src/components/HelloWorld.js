
// sfc
// 구조 분해 할당
const HelloWorld = ({product}) => {

  //const {pno, pname, price} = product;

  const {pno, pname, price} = product || {pno:-1, pname:'', price:0}
  

  return ( 
  <div>
    <div>{pno}</div>
    <div>{pname}</div>
    <div>{price}</div>
  </div> );
}
 
export default HelloWorld;