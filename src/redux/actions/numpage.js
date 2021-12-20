import * as type from '../types';

export function incrementpage(numpage) {
    return { 
      type: 'INCREMENT_NUMPAGE',
      payload: numpage,
    }
  }