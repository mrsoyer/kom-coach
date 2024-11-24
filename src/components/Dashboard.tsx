import React from 'react';
import TaskProgress from './TaskProgress';
import DailyMetrics from './DailyMetrics';
import DailyTips from './DailyTips';
import ChatInput from './ChatInput';
import GoalAndTraining from './GoalAndTraining';

function Dashboard() {
  return (
    <div className="space-y-6 pb-20">
      {/* Tasks Progress */}
      <TaskProgress />

      {/* Daily Metrics */}
      <DailyMetrics />

      {/* Daily Tips */}
      <DailyTips />

      {/* Chat Input */}
      <ChatInput />

      {/* Goal and Training */}
      <GoalAndTraining />
    </div>
  );
}

export default Dashboard;