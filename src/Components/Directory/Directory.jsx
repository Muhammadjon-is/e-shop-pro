import React from "react";
import MenuItem from "../MenuItem/MenuItem";

 import  "./Directory.scss"



 class Directory extends React.Component {
     constructor(){
         super();

    this.state = {
        sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://external-preview.redd.it/QW27FRDDmAbw6hgyejV_4UF-HMBEOXU7nasVt0frEIU.jpg?width=640&crop=smart&auto=webp&s=b6eb95869d7aba8e7509f081b99529ee40ade9dd',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                 },
                 {
                  title: 'children',
                  imageUrl: 'https://img.huffingtonpost.com/asset/59b014f21400001f00fa8442.jpeg?cache=CdmFnZiQJg&ops=scalefit_720_noupscale',
                  size: 'large',
                  id: 6,
                  linkUrl: 'shop/mens'
                 },
                //  {
                //     title: 'womens',
                //     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                //     size: 'large',
                //     id: 6,
                //     linkUrl: 'shop/womens'
                //   },
                
                ]
    }

     }
render( ) {
    return (
        <div className='directory-menu'>
            {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            < MenuItem 
            key={id} 
           
           {...otherSectionProps}
            />  
          ))
          }
          
        </div>  
    )
}

 }

export default Directory;


// {
//   this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
//     < MenuItem 
//     key={id} 
//     title={title}
//     size={size} 
//     imageUrl={imageUrl}
//     history={this.props.history}
//     />  
//   ))
//   }