// Action constants
const CHANGE_PAGE = 'PAGES/CHANGE_PAGE';

const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page
});

const reducer = (state = 'none', { type, payload } = {}) => {
  switch (type) {
    case CHANGE_PAGE: return payload;
    default: return state;
  }
}

export { reducer, changePage }