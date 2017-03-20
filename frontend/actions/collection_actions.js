export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const RECEIVE_NEW_COLLECTION = "RECEIVE_NEW_COLLECTION";
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
      return dispatch(receiveNewCollection(collection));
    })
    .fail(error => {
      return dispatch(receiveCollectionErrors(error.responseJSON));
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

const receiveNewCollection = (collection) => ({
  type: RECEIVE_NEW_COLLECTION,
  collection
});
