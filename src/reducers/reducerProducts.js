export default function (state = [], action) {

  switch (action.type) {

    case 'GET_ALL_PRODUCTS':
        return action.prodcuts

    default: {
        return state;
    }


}
}