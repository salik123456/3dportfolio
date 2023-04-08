import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, web } from '../assets'
import SectionWrapper from '../hoc/SectionWrapper'
import { projects } from '../constants'
import { useState } from 'react'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, category, web_link }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => { window.open(web_link, '__blank') }} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={web} alt='web' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [projectsToShow, setProjectsToShow] = useState(3);

  const filterProjects = (projects, filter) => {
    if (filter === 'all') {
      return projects;
    }
  
    return projects.filter(project => {
      const projectCateg = project.category.toLowerCase();
      return projectCateg.includes(filter);
    });
  };
  
  const handleViewMore = () => {
    setProjectsToShow(prev => prev + 3);
  };

  const filteredProjects = filterProjects(projects, activeTab);
  const visibleProjects = filteredProjects.slice(0, projectsToShow);

  return (
    <>
      <motion.div variants={textVariant()}
      className='mt-10 '
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="flex gap-4 mt-10 mob-tabs">
        <button
          onClick={() => {
            setActiveTab('all');
            setProjectsToShow(3);
          }}
          className={`${
            activeTab === 'all' ? 'bg-tertiary text-white' : ''
          } py-2 px-4 rounded-full focus:outline-none transition-colors duration-300`}
        >
          All
        </button>
        <button
          onClick={() => {
            setActiveTab('wordpress');
            setProjectsToShow(3);
          }}
          className={`${
            activeTab === 'wordpress' ? 'bg-tertiary text-white' : ''
          } py-2 px-4 rounded-full focus:outline-none transition-colors duration-300`}
        >
          Wordpress
        </button>
        <button
          onClick={() => {
            setActiveTab('reactjs');
            setProjectsToShow(3);
          }}
          className={`${
            activeTab === 'reactjs' ? 'bg-tertiary text-white' : ''
          } py-2 px-4 rounded-full focus:outline-none transition-colors duration-300`}
        >
          React
        </button>
        <button
          onClick={() => {
            setActiveTab('custom');
            setProjectsToShow(3);
          }}
          className={`${
            activeTab === 'custom' ? 'bg-tertiary text-white' : ''
          } py-2 px-4 rounded-full focus:outline-none transition-colors duration-300`}
        >
          Custom HTML
        </button>
        <button
          onClick={() => {
            setActiveTab('webflow');
            setProjectsToShow(3);
          }}
          className={`${
            activeTab === 'webflow' ? 'bg-tertiary text-white' : ''
          } py-2 px-4 rounded-full focus:outline-none transition-colors duration-300`}
        >
          Webflow
        </button>
      </div>

      <div className="mt-20 flex project-container">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>

      {visibleProjects.length < filteredProjects.length && (
        <div className="mt-8 flex justify-center">
          <button onClick={handleViewMore} className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            View more
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, '')