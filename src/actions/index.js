import types from './types';

export function updateTime() {
    return {
        type: types.UPDATE_TIME,
        payload: new Date().toLocaleDateString(),
    }
}