import React from "react";
import "./Button.css";

const Button =({name})  => {
  return (
    <table className="buttons">
      <tr>
        <td className="tdcss">
          <div class="boxbill">
            <div className="navMenu">
              <a href="/ComplaintsNew" color="black">
                {name}
              </a>
            </div>
          </div>
        </td>
      </tr>
    </table>
  );
}

export default Button;
