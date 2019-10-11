export const SET_GREETING_2 = 'SET_GREETING_2';

export const setGreeting_2Action = (greeting) => {
  return {
    type: SET_GREETING_2,
    payload: {
      greeting_2: greeting,
    }
  }
};
