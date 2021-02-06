import React from "react";
import {withRouter} from 'react-router-dom';// to have acccess to {hystory}
import'./menu-item.styles.scss';


//to route from MenuItem to item component we use history.push 
//from react router..to have access to history.push we need to import
//withRouter component from router react
//to  route to a certain component like 'Hats' for example, 
// you need '/hats' route-> see App component
// so onClick on MenuItem we use history.push(...)
// to get the route as argument in history.push we pass to match.url
//from router react the'linkUrl' which is part of section state


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  
    <div className={`${size} menu-item`}
     onClick = {() => history.push(`${match.url}${linkUrl}`)}>
      
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
  
  export default withRouter(MenuItem); // so MenuItem component will have access to
  // match location history props of react router dom