import React from "react";

function DataLinks({ items }) {
  return (
    <div className="dataLinks">
      {items?.map((itemsData, index) => {
        return (
          <div className="links">
            <a key={index} href={itemsData?.resourceURI} target="_blank">
              {itemsData?.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default DataLinks;
