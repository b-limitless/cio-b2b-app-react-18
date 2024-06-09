const count = new Array(40).fill(0);
export default function Index() {
  const PrintIcons = () => {
    let result = [];
    result = count.map((_, i) => <><div className='icon-col'><span key={i} className={`shirt-icon icon-${39 + i}`}></span><span>{39 + i}</span></div></>);
    return result;
  }
  return (
    <div className="icons-container">
      <PrintIcons />
    </div>
  )
}
