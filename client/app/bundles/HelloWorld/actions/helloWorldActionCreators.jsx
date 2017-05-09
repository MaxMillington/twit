/* eslint-disable import/prefer-default-export */
import $ from 'jquery'

import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';
import { SUBMIT } from '../constants/helloWorldConstants';
import { CALCULATION_RECEIVED } from '../constants/helloWorldConstants'

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text
});

export const submit = (input) => ({
  type: SUBMIT,
  input
});

export const calculationReceived = (data) => ({
  type: CALCULATION_RECEIVED,
  data
})

export function performCalculation(input) {
  return function(dispatch) {
    return $.ajax({
      type: 'POST',
      url: '/calculate',
      data: { input: input },
      success: (data) => {
        dispatch(calculationReceived(data))
      }
    })
  }
}