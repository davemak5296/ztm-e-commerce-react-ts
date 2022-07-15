import * as React from 'react';

const Modal: React.FC = () => {
  return (
    <>
      {/* <label htmlFor="my-modal" className="modal-button btn">
        open modal
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">
            You&apos;ve been selected for a chance to get one year of subscription to use Wikipedia
            for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div> */}
      <input type="checkbox" className="toggle" />
    </>
  );
};

export default React.memo(Modal);
