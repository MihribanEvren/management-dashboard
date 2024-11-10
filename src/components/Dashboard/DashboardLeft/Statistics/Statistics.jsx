import StatisticsCard from './StatisticsCard';
import { projectData } from '../../../../data/projectData.js';

function Statistics() {
  return (
    <div className="flex flex-col w-full h-auto p-6 bg-white rounded-2xl ">
      <div className="flex items-center justify-between ">
        <h2 className="text-base font-medium">Project Statistics</h2>
        <p className="text-sm font-semibold text-primary">View All</p>
      </div>
      <div className="mt-4 space-y-3">
        {projectData.map((project, index) => (
          <StatisticsCard
            key={index}
            title={project.title}
            description={project.description}
            percentage={project.percentage}
            chartColor={project.color}
            days={project.days}
            teamMembers={project.teamMembers}
          />
        ))}
      </div>
    </div>
  );
}

export default Statistics;
