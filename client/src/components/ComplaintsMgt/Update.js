import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../../ComplaintsPages/Updatepage'

function Update() {
  const [update, setupdate] = useState("");

  return (
    <form>
      <label>Enter Reply:
        <input type="text" value={update} onChange={(e) => setupdate(e.target.value)}
        />
      </label>
    <br />

      <Link to="/ComplaintsPgTwo">
      <button>
        Submit
      </button>
      </Link>
    </form>

  
  )
}

export default Update