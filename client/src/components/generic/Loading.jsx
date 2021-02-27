import React from 'react';

const Loading = (props) => {
  if (props.isLoading) {
    let classLoading = 'loading';

    if (props.className) {
      classLoading = classLoading + ' ' + props.className;
    }

    return (
      <div className={classLoading}>
        <div className="loading__circle"></div>
      </div>
    )
  }

  return null;
};

export default Loading;