import { Sky } from '@react-three/drei'
import React from 'react'
import Street from '../Street'

const Street2 = () => {
  return (
    <>
    <Sky
                sunPosition={[0, 0, -1]} // Places the sun below the horizon
                inclination={0.2} // Adjusts the tilt to simulate sunset
                azimuth={180} // Adjusts the azimuth angle to change the direction of the light
                mieCoefficient={0.005} // Adjusts the atmospheric scattering
                elevation={5} // Adjusts the elevation of the sun
                mieDirectionalG={0.07} // Adjusts the brightness of the sun
                rayleigh={3} // Adjusts the Rayleigh scattering
                turbidity={10} // Adjusts the clarity of the sky]
                exposure={0.5} // Adjusts the overall exposure
            />
            <Street />
    </>
  )
}

export default Street2;