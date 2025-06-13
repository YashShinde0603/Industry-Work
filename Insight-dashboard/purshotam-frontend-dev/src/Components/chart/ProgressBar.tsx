import { ScrollArea } from '@radix-ui/themes';
import React from 'react';

interface Project {
  name: string;
  value: number;
}

interface ProgressBarProps {
  title: string;
  projects: Project[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, projects }) => {
  return (
    <ScrollArea type="always" scrollbars="vertical">
      <div className="p-4 rounded-lg shadow-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 font-semibold">{title}</h2>
          {/* <ProgressBarDropDown /> */}
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{project.name}</span>
              <div className="flex-grow mx-4 h-2 bg-gray-200 rounded-full relative">
                <div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${(project.value / 143382) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-700 font-semibold">{project.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ProgressBar;
