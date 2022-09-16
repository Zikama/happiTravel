import React from 'react'

export default function Section({children, className="", wave}) {
  return (
    <section className={"art_section "+className+ (wave?' art_wave_el':'')}>
        <div className="container">
            {children}
        </div>
        {wave}
    </section>
  )
}
