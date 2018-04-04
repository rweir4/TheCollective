export const MAKE_OPAQUE = 'MAKE_OPAQUE';
export const REMOVE_OPAQUE = 'REMOVE_OPAQUE';

export const makeOpaque = () => {
  return {
    type: MAKE_OPAQUE
  };
};

export const removeOpaque = () => {
  return {
    type: REMOVE_OPAQUE
  };
};
