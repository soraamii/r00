import styled from "styled-components";

const BlueDiv = styled.div`
  background-color: white;
`
const Imge = styled.img`
  width: 100px;
  height: 100px;
`

const ProductDetail = ({product}) => {

  const {pno, pname, price, image} = product

  return ( 
    <li>
      <BlueDiv>PNO {pno}</BlueDiv>
      <div>PNAME {pname}</div>
      <div>PRICE {price}</div>
      <div>
        <Imge src={require(`../../image/${image}`)} alt=""/>
      </div>
      <button>BUY</button>
    </li>
   );
}
 
export default ProductDetail;