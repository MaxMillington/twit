/* eslint-disable import/prefer-default-export */
import $ from 'jquery'

import { NAME_UPDATE } from '../constants/helloWorldConstants';
import { INFO_RECEIVED } from '../constants/helloWorldConstants';

export const updateName = (text) => ({
  type: NAME_UPDATE,
  text
});

export const infoReceived = (data) => ({
  type: INFO_RECEIVED,
  data
});


export function submit(input) {
  return function(dispatch) {
    return $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/hello_world',
      data: { input: input },
      success: (data) => {
        dispatch(infoReceived(data))
      }
    })
  }
}