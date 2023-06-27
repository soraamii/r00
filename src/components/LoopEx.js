const LoopEx = () => {
  
  const arr = [1, 2, 3, 4, 5, 6]
  const result = arr.map((ele, idx) => {

    if(ele % 2 === 0) {
      return <li key={idx}>{ele}</li>
    }

  })
  
  return ( 
    <> 
    {/* map 안에는 함수 */}
    <ul>
      {result}
    </ul>
    </>
  );
}
 
export default LoopEx;