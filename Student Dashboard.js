import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import JobCard from "../components/JobCard";

export default function StudentDashboard() {
  const { jobs, applyToJob, user } = useContext(AppContext);

  const onApply = (jobId) => {
    const name = user || prompt("Enter your name to apply:");
    if (!name) return;
    applyToJob(jobId, name);
    alert("Applied successfully");
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <div className="small-muted">Available jobs</div>

      {jobs.length === 0 && <div>No jobs available</div>}
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onApply={onApply} />
      ))}
    </div>
  );
}
