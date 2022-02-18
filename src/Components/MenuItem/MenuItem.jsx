import React from "react";
// import { withRouter } from "react-router-dom";
import "./MenuItem.scss"



 
 const  MenuItem =  ({ title, imageUrl, size, history, linkUrl, match  }) => (
    <div
    className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}
    >


     <div className="background-image"  style={{
         backgroundImage: `url(${imageUrl})`
     }}
     />
   
    <div className='content'>    
     <h1 className='title'> {title.toUpperCase()}</h1>
     <span className='subtitle'> SHop Now</span>         
      </div>      
       </div>  
       
)

export default MenuItem ;




// <div className='directory-menu'>
// <div className='menu-item'>
// <div className='content'>    
// <h1 className='title'> Hats</h1>
// <span className='subtitle'> SHop Now</span>         
// </div>      
//  </div>  

 
// {/* 1 */}
// <div className='menu-item'>
// <div className='content'>    
// <h1 className='title'> Jackets</h1>
// <span className='subtitle'> SHop Now</span>         
// </div>      
// </div>
// {/* 2 */}
// <div className='menu-item'>
// <div className='content'>    
// <h1 className='title'> sneakers</h1>
// <span className='subtitle'> SHop Now</span>         
// </div>      
// </div>
// {/* 3 */}
// <div className='menu-item'>
// <div className='content'>    
// <h1 className='title'> Womens</h1>
// <span className='subtitle'> SHop Now</span>         
// </div>      
// </div>
// {/* 4 */}
// <div className='menu-item'>
// <div className='content'>    
// <h1 className='title'> mens</h1>
// <span className='subtitle'> SHop Now</span>         
// </div>      
// </div>
// </div>