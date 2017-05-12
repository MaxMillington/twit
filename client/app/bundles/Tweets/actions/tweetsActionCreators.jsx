/* eslint-disable import/prefer-default-export */
import $ from 'jquery'

import { NAME_UPDATE } from '../constants/tweetsConstants';
import { INFO_RECEIVED } from '../constants/tweetsConstants';

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
      url: '/tweets',
      data: { input: input },
      success: (data) => {
        dispatch(infoReceived(data))
      }
    })
  }
}