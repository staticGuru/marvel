import React from "react";

function DataLinks({ items }) {
  return (
    <div className="dataLinks">
      {items?.map((itemsData, index) => {
        return (
          <h3 className="links card-description">
            <a key={index} href={itemsData?.resourceURI} className="italic" target="_blank">
              {itemsData?.name}
            </a>
          </h3>
        );
      })}
    </div>
  );
}

export default DataLinks;
