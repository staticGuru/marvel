import React from "react";

function DataLinks({ items }) {
  return (
    <div className="dataLinks">
    {/**Generate the links in the item details */}
      {items?.map((itemsData, index) => {
        return (
          <h3 className="links card-description">
            <a
              key={index}
              href={itemsData?.resourceURI}
              className="italic"
              target="_blank"
              rel="noreferrer"
            >
              {itemsData?.name}
            </a>
          </h3>
        );
      })}
    </div>
  );
}

export default DataLinks;
