import './total.css'

function Total() {
 
  return (
    <div className="total">
      <h2 className="total_summary">Order summary:</h2>
      <div>
        <p className="total__p">
          total (0 items) : <strong>0</strong> <small>PLN</small>
        </p>
      </div>
    </div>
  )
}

export default Total