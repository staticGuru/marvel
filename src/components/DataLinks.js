import React from "react";

function DataLinks({ items }) {
  return (
    <div className="dataLinks">
    {/**Generate the links in the item details */}
      {items?.map((itemsData, index) => {
        return (
          <h3 key={index} className="links card-description">
            <a
              key={index}
              href={`${itemsData?.resourceURI}?ts=${process.env.REACT_APP_HASH_KEY}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_PUBLIC_KEY}`}
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
