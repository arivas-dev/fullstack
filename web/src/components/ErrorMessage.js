import React from 'react';

export function ErrorMessage (response) {
  const message = {
    403 :  'Please, enter email and password.',
    400 :  'Invalid credentials.',
    500 :  'Sorry, there was a problem..',
    401:  ''
  }
  alert(message[response.status]);
};
