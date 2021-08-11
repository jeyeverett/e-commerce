//Note that we don't have any actions to update our directory, so all we need is a reducer to hold the state. We could store it outside of redux as it does not change, but doing it this way helps with testing later on

const INITIAL_STATE = {
  sections: [
    {
      title: 'fruit',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628702617/carrotcart/fruits/apple_gysvcs.png',
      id: 1,
      linkUrl: 'shop/fruits',
    },
    {
      title: 'veggie',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628702616/carrotcart/vegetables/broccoli_s8ysuh.png',
      id: 2,
      linkUrl: 'shop/vegetables',
    },
    {
      title: 'herb',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628702620/carrotcart/herbs/freshbasil_tkbgja.png',
      id: 3,
      linkUrl: 'shop/herbs',
    },
    {
      title: 'floral',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628702615/carrotcart/flowers/rainbowflower_k7wivy.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/flowers',
    },
    {
      title: 'basket',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628702618/carrotcart/baskets/bananabasket_c8xwla.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/baskets',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
