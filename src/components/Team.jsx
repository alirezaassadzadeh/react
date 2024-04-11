import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'
import Member from './Member/Member'
import Members from './Members/Members'

const Team = () => {
  return (
    <div className='w-auto  h-full mx-auto  bg-slate-300 flex flex-col justify-center items-center rounded-xl '>
    <Tab.Group >
        <Tab.List className="flex justify-evenly  w-96" >
        <Tab as={Fragment} className="px-5  rounded-xl transition-all">
          {({ selected }) => (
            <button
              className={
                selected ? 'bg-teal-900 h-9  text-white' : 'bg-teal-200  text-black'
              }
            >
              تیم مجرب
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="px-5 rounded-xl transition-all">
          {({ selected }) => (
            <button
              className={
                selected ? 'bg-teal-900 h-9  text-white' : 'bg-teal-200  text-black'
              }
            >
              اعضا تیم
            </button>
          )}
        </Tab>
           

        </Tab.List>
        <Tab.Panels className="flex flex-col">
            <Tab.Panel>
                <div>

                <Member/>
                </div>
            </Tab.Panel>
            <Tab.Panel>
                <div>

                <Members/>
                </div>
            </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default Team