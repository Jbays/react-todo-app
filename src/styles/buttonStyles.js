let donuts = {
  create:{

  },
  edit:{
    style:{
      borderRadius:30
    },
  },
  delete: {
    style:{
      color:'red',
      borderRadius:30
    },
    disabledStyle: { background: 'red'},
    overStyle: { color: 'white',background: 'red'},
    activeStyle: { background: 'red'},
    pressedStyle: {background: 'red', fontWeight: 'bold'},
    overPressedStyle: {background: 'red', fontWeight: 'bold'}
  },
  save: {
    style:{
      color:'orange',
      borderRadius:30
    },
    disabledStyle: { background: 'orange'},
    overStyle: { color: 'white',background: 'orange'},
    activeStyle: { background: 'orange'},
    pressedStyle: {background: 'orange', fontWeight: 'bold'},
    overPressedStyle: {background: 'orange', fontWeight: 'bold'}
  },
  cancel:{
    style:{
      color:'green',
      borderRadius:30
    },
    disabledStyle: { background: 'green'},
    overStyle: { color: 'white',background: 'green'},
    activeStyle: { background: 'green'},
    pressedStyle: {background: 'green', fontWeight: 'bold'},
    overPressedStyle: {background: 'green', fontWeight: 'bold'}
  }
};

module.exports = donuts;