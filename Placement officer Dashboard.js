import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function PlacementOfficerDashboard() {
  const { applications, jobs } = useContext(AppContext);

  const getJobTitle = (jobId) => jobs.find((j) => j.id === jobId)?.title || "Unknown";

  return (
    <div>
      <h2>Placement Officer</h2>

      <div className="card">
        <h3>All Applications</h3>
        {applications.length === 0 && <div>No applications yet</div>}
        {applications.map((a) => (
          <div key={a.id} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
            Student: {a.studentName} | Job: {getJobTitle(a.jobId)} | Status: {a.status}
          </div>
        ))}
      </div>
    </div>
  );
}
