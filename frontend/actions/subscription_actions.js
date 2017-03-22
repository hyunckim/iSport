import { receiveCollection } from './collection_actions';
import * as SubscriptionAPIUtil from '../util/subscription_api_util';

export const subscribe = (subscription) => dispatch => (
  SubscriptionAPIUtil.subscribe(subscription)
    .then(updatedCollection => {
      return dispatch(receiveCollection(updatedCollection));
    })
);
