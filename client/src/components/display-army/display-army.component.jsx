import React from 'react';
import ArmyItems from '../army-item/army-item.component';

const DisplayArmy = ({ archers, spearmen, swordsmen }) => (
  <div className="mt-6 grid grid-cols-3 gap-12">
    <div >
      <h1 className="text-3xl font-medium text-gray-700 flex items-center gap-2">Archer { archers ?<span className='text-xs bg-blue-600 text-white px-2 py-1 rounded-full'>{archers} </span>: ''}</h1>
      <span className='flex flex-wrap mt-6'>
        <ArmyItems value={archers} item={'archers'}/>
      </span>
    </div>
    <div>
      <h1 className="text-3xl font-medium text-gray-700 flex items-center gap-2">Sperman { spearmen ?<span className='text-xs bg-blue-600 text-white px-2 py-1 rounded-full'> {spearmen}</span>: ''}</h1>
      <div className='flex flex-wrap mt-6'>
        <ArmyItems value={spearmen} item={'spearmen'}/>
      </div>
    </div>
    <div>
      <h1 className="text-3xl font-medium text-gray-700 flex items-center gap-2">Swordman { swordsmen ? <span className='text-xs bg-blue-600 text-white px-2 py-1 rounded-full'>{swordsmen}</span>: ''}</h1>
      <div className='flex flex-wrap mt-6'>
        <ArmyItems value={swordsmen} item={'swordsmen'}/>
      </div>
    </div>
  </div>
)

export default DisplayArmy;