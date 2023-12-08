import { useState } from 'react'
import { Dialog, RadioGroup } from '@headlessui/react'
import Image from 'next/image'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Page = () => {
  return (
    <div className="bg-background">
      <main>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <div>
                  <h2 id="tier-id" className="text-lg font-semibold leading-8 text-white">
                    Tier Name
                  </h2>
                  <p className="rounded-full bg-gray-900 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">Tier description</p>
              <a
                href="#"
                aria-describedby="tier-id"
                className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page