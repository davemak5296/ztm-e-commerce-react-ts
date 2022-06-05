import Button from "./button.component";

const CartDropDown = () => {
  return (
    <div className="absolute top-[90px] right-[40px] z-[1] flex h-[340px] w-60 flex-col border border-solid border-black bg-white p-5">
      <div className="flex h-[240px] flex-col overflow-y-scroll bg-white">
        {/* items */}
        <section className="mb-3.5 flex">
          <img className="w-[30%]" src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt="Brown Brim" />
          <div className="flex w-[70%] flex-col items-start justify-center py-2.5 px-5 text-xs">
            <span>Brown Cowboy</span>
            <span>2x$35</span>
          </div>
        </section>
      </div>

      <Button varCls="w-full mt-auto" type="button" buttonType="default">
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropDown;
