const enum ActionTypes {
  GET_DEFINITION_IDS = 'GET_DEFINITION_IDS',
  GET_DEFINITION_IDS_SUCCESS = 'GET_DEFINITION_IDS_SUCCESS',
  GET_DEFINITION_IDS_ERROR = 'GET_DEFINITION_IDS_ERROR',
  GET_DEFINITIONS = 'GET_DEFINITIONS',
  GET_DEFINITIONS_SUCCESS = 'GET_DEFINITIONS_SUCCESS',
  GET_DEFINITIONS_ERROR = 'GET_DEFINITIONS_ERROR',

  ADD_TERM = 'ADD_TERM',
  ADD_TERM_SUCCESS = 'ADD_TERM_SUCCESS',
  ADD_TERM_ERROR = 'ADD_TERM_ERROR',

  GET_LOCALE = 'GET_LOCALE',
  GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS',

  REMOVE_DEFINITION = 'REMOVE_DEFINITION',

  ADD_DEFINITION = 'ADD_DEFINITION',
  ADD_DEFINITION_SUCCESS = 'ADD_DEFINITION_SUCCESS',
  ADD_DEFINITION_ERROR = 'ADD_DEFINITION_ERROR',

  SEARCH = 'SEARCH',

  TEMP = '',
}

export default ActionTypes;
