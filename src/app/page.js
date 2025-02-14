
import Dashboard from '@/components/Dashboard'
// import ProgressBar from '@/components/ProgressBar'
import Sidebar from '@/components/Sidebar'
import SyllabusAnalysis from '@/components/SyllabusAnalysis'
// import SkillTestCard from '@/components/SkillTestCard'
import React from 'react'

export default function Home() {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1 p-5">
      Skill Test
      <Dashboard/>
    </div>
    <div className="flex-3 justify-around">
    

    </div>

  </div>
  )
}

