//Note that we don't have any actions to update our directory, so all we need is a reducer to hold the state. We could store it outside of redux as it does not change, but doing it this way helps with testing later on


const INITIAL_STATE = {
    sections: [
    {
        title: 'hats',
        // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        imageUrl: 'images/hats.png', // local file in public/images/
        id: 1,
        linkUrl: 'shop/hats'
  
    },
    {
        title: 'jackets',
        // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        imageUrl: 'images/jackets.png', // local file in public/images/
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        imageUrl: 'images/sneakers.png', // local file in public/images/
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        imageUrl: 'images/womens.png', // local file in public/images/
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        imageUrl: 'images/men.png', // local file in public/images/
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
  ]
}

  const directoryReducer = (state = INITIAL_STATE, action) => {
      switch(action.type) {
          default:
              return state;
      }
  }
  
  export default directoryReducer;