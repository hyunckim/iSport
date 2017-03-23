export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const DELETE_SUBSCRIPTION = "DELETE_SUBSCRIPTION";
import * as SubscriptionAPIUtil from '../util/subscription_api_util';
import * as CollectionAPIUtil from '../util/collection_api_util';
import { receiveCollectionErrors } from './error_actions';

export const fetchCollection = (collectionId) => dispatch => (
  CollectionAPIUtil.fetchCollection(collectionId)
    .then(collection => dispatch(receiveCollection(collection)))
);

export const fetchCollections = () => dispatch => (
  CollectionAPIUtil.fetchCollections()
    .then(collections => {
      return dispatch(receiveCollections(collections));
    })
);

export const fetchNewCollection = (collection) => dispatch => (
  CollectionAPIUtil.createCollection(collection)
    .then(collection => {
      return dispatch(receiveCollection(collection));
    })
    .fail(error => {
      return dispatch(receiveCollectionErrors(error.responseJSON));
    })
);

export const subscribe = (subscription) => dispatch => (
  SubscriptionAPIUtil.subscribe(subscription)
    .then(updatedCollection => {
      return dispatch(receiveCollection(updatedCollection));
    })
);

export const unsubscribe = (subscription) => dispatch => (
  SubscriptionAPIUtil.unsubscribe(subscription)
    .then(collection => {
      return dispatch(deleteSubscription(collection));
    })
);

const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection
});

const receiveCollections = (collections) => ({
  type: RECEIVE_COLLECTIONS,
  collections
});

const deleteSubscription = (collection) => ({
  type: DELETE_SUBSCRIPTION,
  collection
});
