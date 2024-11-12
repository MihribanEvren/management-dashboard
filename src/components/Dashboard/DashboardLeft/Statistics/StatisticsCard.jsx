import DaysLeft from './DaysLeft';
import DoughnutChart from './DoughnutChart';
import ProjectInfo from './ProjectInfo';
import TeamMembers from './TeamMembers';

function StatisticsCard({
  title,
  description,
  percentage,
  chartColor,
  days,
  teamMembers,
}) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-xl">
      <div className="flex items-center justify-center space-x-3">
        <DoughnutChart percentage={percentage} chartColor={chartColor} />
        <ProjectInfo title={title} description={description} />
      </div>

      <div className="flex items-center justify-end space-x-2 md:space-x-6">
        <TeamMembers members={teamMembers} width="w-6" height="h-6" />
        <DaysLeft days={days} />
      </div>
    </div>
  );
}

export default StatisticsCard;
