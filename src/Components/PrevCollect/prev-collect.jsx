import React from "react";
 import "./prev-collect.scss"
import CollectionItem from "../CollectionItem/collection-item";

 const CollectionPreview = ({ title, items}) => (
    <div className="collection-preview">
<h1 className="title"> 
{title.toUpperCase()}</h1>

  <div className="preview">
  {items
  .filter((item, idx) => idx < 5 )
  .map(item=> (

<CollectionItem key={item.id}  item={item}/>
)) }


  </div>
    </div>
);
 export default CollectionPreview;









//  import React from "react";
//  import "./prev-collect.scss"
// import CollectionItem from "../CollectionItem/collection-item";

//  const CollectionPreview = ({ title, items}) => (
//     <div className="collection-preview">
// <h1 className="title"> 
// {title.toUpperCase()}</h1>

//   <div className="preview">
//   {items
//   .filter((item, idx) => idx < 5 )
//   .map(({id, ...otherItemProps})=> (

// <CollectionItem key={id} {...otherItemProps}/>
// )) }


//   </div>
//     </div>
// );
//  export default CollectionPreview;