//Note that we don't have any actions to update our directory, so all we need is a reducer to hold the state. We could store it outside of redux as it does not change, but doing it this way helps with testing later on

const INITIAL_STATE = {
  sections: [
    {
      title: 'fruit',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628724939/carrotcart/fruits/fruits_p5patu.jpg',
      id: 1,
      linkUrl: 'shop/fruit',
      size: 'large',
    },
    {
      title: 'veggie',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628796800/carrotcart/vegetables/veggies_znkccd.jpg',
      id: 2,
      linkUrl: 'shop/veggie',
      size: 'large',
    },
    {
      title: 'herb',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628702614/carrotcart/herbs/mint_qbgoqh.png',
      id: 3,
      linkUrl: 'shop/herb',
    },
    {
      title: 'floral',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628702615/carrotcart/flowers/rainbowflower_k7wivy.png',
      id: 4,
      linkUrl: 'shop/floral',
    },
    {
      title: 'basket',
      imageUrl:
        'https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628797643/carrotcart/baskets/basket_lk5rfd.jpg',
      id: 5,
      linkUrl: 'shop/basket',
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
