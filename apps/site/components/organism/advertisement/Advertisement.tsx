import React from 'react'

/**
 * Our Advertisement section can be used to provide various adds on a site.
 *
 * @property heading and add size
 *
 * @returns React component that can be easily integrated into any web application.
 */

const Advertisement = () => {
   return (
      <div className="container mx-auto w-11/12 lg:w-8/12">
         <div className="py-4 bg-base-content/10 text-base-content/60 text-center rounded-xl font-work">
            <p className="text-sm mb-2">Reklama</p>
            <div className="max-w-3xl mx-auto">
               <ins
                  className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-format="auto"
                  data-full-width-responsive="true"
               />
            </div>
         </div>
      </div>
   )
}

export default Advertisement
