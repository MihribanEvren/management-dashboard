import StatisticsCard from './StatisticsCard';
import { projectData } from '@/data/projectData';
import ReusableCard from '@/components/SharedElements/ReusableCard';

function Statistics() {
  return (
    <ReusableCard
      title="Project Statistics"
      buttonLabel="View All"
      onButtonClick={() => {}}
    >
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
    </ReusableCard>
  );
}

export default Statistics;
