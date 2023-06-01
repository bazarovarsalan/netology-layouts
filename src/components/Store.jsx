import IconSwitch from "./IconSwitch";
import { useState } from 'react';
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store({products}) {
  const [iconCheck, setIconCheck] = useState(true);
  const [icon, setIcon] = useState("view_list");

  const onSwitch = () => {
    setIconCheck(!iconCheck);
    iconCheck ? setIcon("view_module") :  setIcon("view_list")
  }

  return (
    <div className="Store">
      <div className="IconSwitchContainer">
        <IconSwitch
          icon={icon}
          onSwitch={onSwitch}
        />
      </div>
      <div className="itemsContainer">
        {(iconCheck) ? <ListView products={products} /> : <CardsView products={products} />}
      </div>
    </div>
  );
}

export default Store;