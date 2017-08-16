import React from 'react';

const MenuItem = ({ item }) => (
  <div style={{width: '250px', margin: '1em', padding: '1.5em', borderBottomStyle: 'dotted', borderBottomWidth: '2px'}}>
    <h4 className='menu--item--header'>{item.name}</h4>
    {
      !item.available
      ? <p className='menu--item--details'>not available at this time.</p>
      :
        <div>
          {
            item.price !== undefined ?
              <p className='menu--item--details'>${item.price}</p>
            :
              Object.keys(item.versions)
                .sort((a, b) => item.versions[a] > item.versions[b])
                .map(version => (
                  <div key={item.name.concat(' ', version)} style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                    <p className='menu--item--details' style={{flex: 1}}>{`${version}`}</p>
                    <p className='menu--item--details' style={{flex: 1}}>{`$${item.versions[version]}`}</p>
                  </div>
              ))
          }
          <span className='menu--item--details' style={{flex: 1, marginTop: '3px'}}>{item.notes}</span>
        </div>
    }
  </div>
);

export default MenuItem;
