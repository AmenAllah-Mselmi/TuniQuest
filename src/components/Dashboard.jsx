import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockStats = {
  points: 250,
  completedQuizzes: 5,
  rewardsClaimed: 2,
  weeklyPoints: [50, 75, 60, 65]
};

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stats Cards */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">Total Points</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">{mockStats.points}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">Quizzes Completed</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">{mockStats.completedQuizzes}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">Rewards Claimed</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">{mockStats.rewardsClaimed}</p>
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2 lg:col-span-3">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Learning Progress</h3>
          <Line
            data={{
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              datasets: [
                {
                  label: 'Points Earned',
                  data: mockStats.weeklyPoints,
                  borderColor: 'rgb(59, 130, 246)',
                  tension: 0.1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Weekly Progress',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;