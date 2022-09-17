import { useEffect, useState } from 'react';
import TabItem from './TabItem';

export default function Tab({ items, current }) {
  const [selected, setSelected] = useState(current || 0);
  const [target, setTarget] = useState(null);

  const handleClick = ({ index, target }) => {
    setSelected(index);
    setTarget(target);
  };

  useEffect(() => {
    // Get and set current component target
    const component = document.getElementById(`tab-item-${current + 1}`);
    setTarget(component);
  }, []);

  return (
    <div className="flex flex-col h-full gap-3">
      <div className="grid grid-cols-2 gap-3 bg-gray-100 rounded-lg p-2 relative">
        {items.map((item, i) => {
          return (
            <TabItem
              key={i}
              active={selected === i}
              id={`tab-item-${i + 1}`}
              click={(evt) => handleClick({ index: i, target: evt.target })}>
              {item.label}
            </TabItem>
          );
        })}

        <div
          style={{
            transform: `translateX(${target?.offsetLeft || 8}px)`,
            width: `${target?.offsetWidth || 166}px`,
            height: `${target?.offsetHeight || 40}px`,
            top: `${target?.offsetTop || 8}px`,
          }}
          className="bg-white absolute z-0 rounded-lg transition-all duration-300"
        />
      </div>

      {items[selected].children}
    </div>
  );
}
