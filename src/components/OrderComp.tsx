import React, { useRef } from "react";

type orderProps = {
  showdiv: (num: number) => void;
  divRef: React.MutableRefObject<any>;
};

const OrderComp = (props: orderProps) => {
  return (
    <>
      <div className="shadow billing">
        <div
          className="collapse__arrow row collapsible"
          onClick={() => props.showdiv(0)}
        >
          <label className="fontWeight">Order Review</label>
          <i className="fa fa-caret-down"></i>
        </div>
        <label className="fontSize">3 items in Card</label>
        <div ref={(ref) => (props.divRef.current[0] = ref)} className="hide">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptatem impedit velit, ex qui architecto nam sed autem quae
            ratione vel perferendis, quam itaque! Doloremque aspernatur
            repellendus molestias fuga? Soluta!
          </span>
        </div>
      </div>
      <div className="shadow billing order--margin">
        <div
          className="collapse__arrow row collapsible"
          onClick={(e) => props.showdiv(1)}
        >
          <label className="fontWeight">Discount Codes</label>
          <i className="fa fa-caret-down"></i>
        </div>
        <div ref={(ref) => (props.divRef.current[1] = ref)} className="hide">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptatem impedit velit, ex qui architecto nam sed autem quae
            ratione vel perferendis, quam itaque! Doloremque aspernatur
            repellendus molestias fuga? Soluta!
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderComp;
