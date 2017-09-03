import React, { Component } from 'react';
import {
  Button,
} from 'react-bootstrap';


class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showImageModal: false,
    };

    this.toggleImageModal = this.toggleImageModal.bind(this);
    this.doesNothing = this.doesNothing.bind(this);
  }

  toggleImageModal() {
    this.setState({ showImageModal: !this.state.showImageModal });
  }

  doesNothing() {
    return
  }

  render() {
    const { item } = this.props;

    return <div style={{width: '250px', margin: '1em', padding: '1.5em', borderBottomStyle: 'dotted', borderBottomWidth: '2px'}}>
      {
        this.state.showImageModal
          ? <div onClick={ this.toggleImageModal } style={{width: '350px', maxHeight: '350px', borderStyle: 'solid', position: 'relative', bottom: '3em', right: '4em', backgroundColor: 'azure'}}>
            <strong>{item.name}</strong>
            <img src={ item.imageName ? require('../../images/' + item.imageName) : require('../../images/no_image_available.png')} style={{width: '100%', height: 'auto'}} />
            <button onClick={ this.toggleImageModal }>close</button>
          </div>
          : ''
      }
      <div onClick={ item.imagePath === false ? this.doesNothing : this.toggleImageModal }>
        <h4 onMouseEnter={ item.imagePath === false ? this.doesNothing : this.toggleImageModal } className='menu--item--header'>{item.name}</h4>
        {
          !item.available
            ? <p className='menu--item--details'>not available at this time.</p>
            : <div>
              {
                item.price !== undefined
                  ? <p className='menu--item--details'>${item.price}</p>
                  : Object.keys(item.versions)
                    .sort((a, b) => item.versions[a] > item.versions[b])
                    .map(version => (
                      <div key={item.name.concat(' ', version)} style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                        <p className='menu--item--details' style={{flex: 1}}>{`${version}`}</p>
                        <p className='menu--item--details' style={{flex: 1}}>{`$${item.versions[version]}`}</p>
                      </div>
                    ))
              }
              {
                item.notes
                  ? <span className='menu--item--details' style={{flex: 1, marginTop: '3px'}}>{item.notes}</span>
                  : ''
              }
              {
                item.rules
                  ? <span className='menu--item--details' style={{flex: 1}}>{item.rules}</span>
                  : ''
              }
            </div>
        }
      </div>
    </div>;
  }

}

export default MenuItem;
