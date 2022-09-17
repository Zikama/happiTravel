import React from 'react'
import WWave from '../public/assets/img/wave2.svg'
import WWaveV from '../public/assets/img/wave-v.svg'
import WWaveF from '../public/assets/img/wave-f.svg'

export default function Wave({color='var(--bgColor)', down=false, top=false, foot=false}) {
  return (
    <span className={(down?(top?"art_wave_co art_is_down art_is_top": "art_wave_co art_is_down"):(top?"art_wave_co art_is_top": "art_wave_co"))+" "+ (foot?" art_is_foot":"")}>
        {
            down?<WWaveV style={{color}}/>:foot?<WWaveF style={{color}}/>:<WWave style={{color}}/>
        }
        
    </span>
  )
}
