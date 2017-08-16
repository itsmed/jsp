import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS,
} from 'react-redux-firebase';

import MenuItem from '../../components/menu-item/MenuItem';

class MenuRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMenuCategory: 'Dinner Menu',
    };

    this.updateMenuCategory = this.updateMenuCategory.bind(this);
  }

  updateMenuCategory(category) {
    this.setState({
      currentMenuCategory: category,
    });
  }

  render() {

    const { menuItems } = this.props;
    const loadedMenuItems = !isLoaded(menuItems)
      ? 'LOADING'
      : isEmpty(menuItems)
      ? 'No Menu Items Available'
      : menuItems;
    const currentMenuSection = loadedMenuItems[this.state.currentMenuCategory];

    return <div style={{margin: '2em', padding: '1em', textAlign: 'center'}}>
      {
        loadedMenuItems === 'LOADING' || !loadedMenuItems[this.state.currentMenuCategory]
        ? <h3 className='header--serif'>Loading...</h3>
        : <div>
            {
              /*************************************
                Navigation for menu sections  
              *************************************/
            }
            <div className='menu--nav--container'>
              {
                Object.keys(loadedMenuItems).map(menuItem => (
                  <span
                    className='menu--nav--item'
                    onClick={ () => this.updateMenuCategory(menuItem) }
                    key={menuItem}
                  >{menuItem}</span>
                ))
              }
            </div>
            <div className='menu--items--container'>
              {
                /*************************************
                 current menu section, notes and rules
                 *************************************/
              }
              <h2 className='header--serif'>{this.state.currentMenuCategory}</h2>
              {
                currentMenuSection.notes
                ? <h3 className='menu--item--notes'>{currentMenuSection.notes}</h3>
                : ''
              }
              {
                currentMenuSection.rules
                ? <h3 className='header--notes'>{currentMenuSection.rules}</h3>
                : ''
              }
              <div className='menu--details--container'>
                {
                  /*************************************
                   current menu items.
                   If the items key is missing, then
                   there are multiple subsections to 
                   the menu section.
                   *************************************/
                }
                {
                  Object.keys(currentMenuSection).includes('items')
                  ? 
                    currentMenuSection.items.map(item => (
                      <MenuItem item={item} />
                    ))
                  :
                    Object.keys(currentMenuSection)
                      .filter(menuCategory => menuCategory !== 'notes' && menuCategory !== 'rules')
                      .map(category => (
                      <div key={category} className='flex--item'>
                        <h3 className='header--serif'>{category}</h3>
                        <h4 className='menu---item--notes'>{currentMenuSection[category].rules ? currentMenuSection[category].rules : ''}</h4>
                        <h4 className='menu---item--notes'>{currentMenuSection[category].notes ? currentMenuSection[category].notes : ''}</h4>
                        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                          {
                            currentMenuSection[category].items.map(item => (
                              <MenuItem className='flex--item' key={item.name.concat(' ', category)} item={item} />
                            ))
                          }
                        </div>
                      </div>
                    ))
                }
              </div>
            </div>
        </div>  
      }
    </div>;
  }
}

export default compose(
  firebaseConnect([
    'menu',
  ]),
  connect(
    ({ firebase }) => ({
      menuItems: dataToJS(firebase, 'menu'),
    })
  )
)(MenuRoute);
