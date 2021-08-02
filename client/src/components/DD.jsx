import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Cards from "./Cards";

export default function DD() {
  const [firstGroup, setFirstGroup] = useState([
    { heads: "GOOGL", id: "1", src: "img/GOOGL.png", alt: "Google", vals: "1515 USD" },
    { heads: "FB", id: "2", src: "img/FB.png", alt: "Facebook", vals: "266 USD" },
    { heads: "AMZN", id: "3", src: "img/AMZN.svg", alt: "Amazon", vals: "3116 USD" }
  ]);
 
  return (
<div className="container">
<div className="row">
        <ReactSortable
          list={firstGroup}
          setList={setFirstGroup}
          animation={150}
          onChange={(order, sortable, evt) => {}}
          onEnd={evt => {}}
          className="row"
        >
          {firstGroup.map(item => (
            <Cards key={item.id} item={item} />
 
          ))}
        </ReactSortable>
        </div>
             </div>
 
  );
}
