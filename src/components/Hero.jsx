import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full  mx-auto height-adjust">


      <div className={`${styles.paddingX} small-adjust absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">

          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>


        <div>
          <h1 className={`${styles.heroHeadText} text-white hero-head`}>Hi, I'm <span className="text-[#915eff]">Salik</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 hero-subtext`}>I develop visually appealling, completely<br className="sm:block hidden" /> responsive modern websites</p>
        </div>
      </div>


      <ComputersCanvas />

<div className="absolute xs:bottom-30 bottom-30 mouse-container  w-full flex justify-center items-center "> 

<a href="#about">


<div className="height-mouse rounded-3xl border-2 sm:border-4  border-secondary flex justify-center items-start p-1">

<motion.dev
animate={{
  y:[0, 10, 0]
}}
transition={{
  duration:1.5,
  repeat:Infinity,
  repeatType:'loop'
}}
className='w-[4px] h-[4px] sm:w-[7px] sm:h-[7px]  rounded-full bg-secondary mb-1'

/>



</div>

</a>
</div>


    </section>
  )
}

export default Hero