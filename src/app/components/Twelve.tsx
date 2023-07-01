"use client"
import { useState } from 'react';

function Panel({
  title, children, isActive, onShow }: any) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <>
          <br /><button className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2" onClick={onShow}>
            Show
          </button>
        </>
      )}
    </section>
  );
}

export default function Twelve() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="text-2xl font-bold text-center">
        <h2>Sharing State Between Components</h2><br />
        <Panel
          title="Rana"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        ><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis eos officiis ratione amet quasi dicta aut voluptas vitae odio! Aut vero perferendis saepe laudantium eaque.
        </Panel>
        <br /> <Panel
          title="Rabees"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        ><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis eos officiis ratione amet quasi dicta aut voluptas vitae odio! Aut vero perferendis saepe laudantium eaque.
        </Panel>
      </div>
    </>
  );
}
