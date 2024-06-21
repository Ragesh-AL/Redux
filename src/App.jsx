import React from "react";
import Cards from "./component/Cards";
import CheckOut from "./component/CheckOut";

function App() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Cards/>
            </div>

            <div className="col-md-4">
              <CheckOut/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
