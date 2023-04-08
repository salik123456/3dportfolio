import {Suspense, useState, useEffect} from 'react'
import { Canvas } from '@react-three/fiber';


import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Computers = ({isMobile, isTablet}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf')
  console.log('computer', computer)
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight
       intensity={1} 
 
      
      />
      <spotLight
      position={[-20,50,10]}
      angle={0.12}
       penumbra={1}
       castShadow
       shadow-mapSize={1024}
      
      />
      
      <primitive 
      object={computer.scene}
      scale={
        isMobile   ? 0.35
          : isTablet  ? 0.6
          : 0.75
      }
      
      position={isMobile   ? [0, -3.25, -0.55]
        : isTablet   ? [0, -3.25, -1]
        : [0, -3.25, -1.5]}
      rotation={[-0.01,-0.2,-0.1]}
    


      />
    </mesh>
  )
}



const ComputerCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)


  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQueryMobile.matches);

    const mediaQueryTablet = window.matchMedia("(max-width: 768px) and (orientation: landscape)");
    setIsTablet(mediaQueryTablet.matches);

    const handleMediaQueryChange = (event) => {
      if (event.media === "(max-width: 500px)") {
        setIsMobile(event.matches);
      } else if (event.media === "(max-width: 768px) and (orientation: landscape)") {
        setIsTablet(event.matches);
      }
    };

    mediaQueryMobile.addEventListener("change", handleMediaQueryChange);
    mediaQueryTablet.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleMediaQueryChange);
      mediaQueryTablet.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);






  
  

  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer:'true'}}
    >
      <Suspense fallback={<CanvasLoader/>}>

<OrbitControls
 enableZoom={false}
 maxPolarAngle={Math.PI/2}
 minPolarAngle={Math.PI/2}
 
 />
    <Computers isMobile= {isMobile} isTablet={isTablet}/>
      </Suspense>

   <Preload all/>
      </Canvas>
  )

}




export default ComputerCanvas