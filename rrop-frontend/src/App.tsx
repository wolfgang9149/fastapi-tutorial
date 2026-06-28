import { useState } from 'react';

// ==========================================
// MOCK DATA: Exactly Matching Management's 6 Questions
// ==========================================
const mockUsers = [
  { id: 1, name: "Nicholas Liu", role: "Lead Engineer", permissions: "Full Access" },
  { id: 2, name: "Dr. Jib", role: "Researcher Vice Leader", permissions: "Full Access" },
  { id: 3, name: "Dr. Rav", role: "Researcher Leader", permissions: "Full Access" },
];

const mockProjects = [
  { id: 101, name: "Satellite Payload A", desc: "Orbital radiation shielding validation.", timeline: "2026-Q1 to 2026-Q4", status: "Active", progress: 75, lead: "Dr. Sarah" },
  { id: 102, name: "Microgravity Plant Growth", desc: "Automated botanical growth matrix in LEO.", timeline: "2026-Q2 to 2027-Q1", status: "Active", progress: 40, lead: "Prof. Chen" },
  { id: 103, name: "Next-Gen Thruster Telemetry", desc: "Ion propulsion thermal profiling.", timeline: "2025-Q3 to 2026-Q3", status: "Active", progress: 95, lead: "Nicholas Liu" }, // Q6: Approaching Completion (>90%)
  { id: 104, name: "Solar Array Deployer Beta", desc: "Mechanical articulation telemetry.", timeline: "2025-Q1 to 2026-Q2", status: "Completed", progress: 100, lead: "Nicholas Liu" }
];

const mockExperiments = [
  { id: 501, title: "Radiation Shielding Test v1", status: "Delayed", researcher: "Nicholas Liu", project: "Satellite Payload A", daysDelayed: "7 Days" }, // Q2 & Q3
  { id: 502, title: "Bio-cell Viability Assay", status: "On Time", researcher: "Dr. Sarah", project: "Microgravity Plant Growth", daysDelayed: "0 Days" },
  { id: 503, title: "Thermal Vacuum Chamber Run", status: "Delayed", researcher: "Prof. Chen", project: "Next-Gen Thruster Telemetry", daysDelayed: "4 Days" } // Q2 & Q3
];

const mockSamples = [
  { id: 901, type: "Biological", name: "Cryo-Stem Cells A", experiment: "Bio-cell Viability Assay", consumed: true }, // Q4 & Q5
  { id: 902, type: "Biological", name: "Arabidopsis Seeds v2", experiment: "Bio-cell Viability Assay", consumed: false }, // Q4 & Q5
  { id: 903, type: "Engineering", name: "Alloy Sheet Variant-B", experiment: "Radiation Shielding Test v1", consumed: true },
  { id: 904, type: "Engineering", name: "Titanium Bracket v4", experiment: "Thermal Vacuum Chamber Run", consumed: false }
];

export default function App() {
  const [currentModule, setCurrentModule] = useState('Dashboard');

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', color: '#1e293b' }}>
      
      {/* ---------------- sidebar navigation ---------------- */}
      <div style={{ width: '280px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', flexDirection: 'column', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px', color: '#22d3ee', display: 'flex', alignItems: 'center', gap: '10px' }}>
          🚀 ResearchSat RROP
        </div>
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
           
            { id: 'Users', label: '👥 Module 1: User Management' },
            { id: 'Projects', label: '📂 Module 2: Research Projects' },
            { id: 'Experiments', label: '🔬 Module 3: Experiments' },
            { id: 'Samples', label: '🧪 Module 4: Samples Inventory' },
             { id: 'Dashboard', label: '📊 Module 5: Dashboard' },
            { id: 'Reports', label: '📈 Module 6: Reports Generator' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setCurrentModule(m.id)}
              style={{
                width: '100%', textAlign: 'left', padding: '12px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                backgroundColor: currentModule === m.id ? '#0891b2' : 'transparent', color: '#fff', fontSize: '14px', fontWeight: currentModule === m.id ? 'bold' : 'normal', transition: 'all 0.2s'
              }}
            >
              {m.label}
            </button>
          ))}
        </nav>
        <div style={{ fontSize: '12px', color: '#94a3b8', borderTop: '1px solid #334155', paddingTop: '15px' }}>
          Junior System Engineer: <strong>Nicholas Liu</strong>
        </div>
      </div>

      {/* ---------------- main view viewport ---------------- */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        {/* Global Header */}
        <header style={{ backgroundColor: '#fff', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0 }}>{currentModule} Control System</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
              Frontend: React + TS + Tailwind
            </span>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
              ● Local Dev Mode Live
            </span>
          </div>
        </header>

        <main style={{ padding: '40px' }}>
          
          {/* ================= MODULE 5: DASHBOARD ================= */}
          {currentModule === 'Dashboard' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Aggregated Metadata Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>Active Projects (Q1 Answer)</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px' }}>{mockProjects.filter(p => p.status === 'Active').length} <span style={{ fontSize: '14px', color: '#64748b' }}>/ {mockProjects.length}</span></div>
                </div>
                <div style={{ backgroundColor: '#fef2f2', padding: '24px', borderRadius: '12px', border: '1px solid #fee2e2' }}>
                  <div style={{ fontSize: '13px', color: '#dc2626', fontWeight: 'bold' }}>Delayed Experiments (Q2 Answer)</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc2626', marginTop: '10px' }}>{mockExperiments.filter(e => e.status === 'Delayed').length} <span style={{ fontSize: '14px', color: '#991b1b' }}>Urgent</span></div>
                </div>
                <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>Total Samples (Q5 Stats)</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px' }}>600 <span style={{ fontSize: '12px', color: '#16a34a' }}>({mockSamples.filter(s => s.consumed).length} Consumed)</span></div>
                </div>
                <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>Active Lab Personnel</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px' }}>30 <span style={{ fontSize: '14px', color: '#64748b' }}>Staff</span></div>
                </div>
              </div>

              {/* Special Alert Box: Q6 Approaching Completion */}
              <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#b45309', display: 'flex', alignItems: 'center', gap: '8px' }}>⚠️ Operational Alert: Projects Near Completion (Q6 Answer)</h4>
                {mockProjects.filter(p => p.progress >= 90 && p.progress < 100).map(p => (
                  <div key={p.id} style={{ fontSize: '14px', color: '#78350f' }}>
                    🚀 <strong>Project #{p.id} ({p.name})</strong> is currently at <strong>{p.progress}%</strong> completion matrix and approaching final orbit deployment review!
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= MODULE 1: USER MANAGEMENT ================= */}
          {currentModule === 'Users' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: '0 0 20px 0' }}>👥 Module 1: User Clearance, Roles & Permissions</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}><th style={{ padding: '12px' }}>Personnel Name</th><th style={{ padding: '12px' }}>Assigned System Role</th><th style={{ padding: '12px' }}>Security Permissions</th></tr>
                </thead>
                <tbody>
                  {mockUsers.map(u => (
                    <tr key={u.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 12px', fontWeight: 'bold' }}>{u.name}</td>
                      <td style={{ padding: '14px 12px' }}><span style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontSize: '13px' }}>{u.role}</span></td>
                      <td style={{ padding: '14px 12px', color: '#16a34a', fontWeight: 'bold' }}>{u.permissions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ================= MODULE 2: RESEARCH PROJECTS ================= */}
          {currentModule === 'Projects' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: '0 0 20px 0' }}>📂 Module 2: Research Projects Registry (Answers Q1 & Q6)</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '12px' }}>Project Info</th><th style={{ padding: '12px' }}>Timeline</th><th style={{ padding: '12px' }}>Assigned PI</th><th style={{ padding: '12px' }}>Status (Q1)</th><th style={{ padding: '12px' }}>Progress (Q6)</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProjects.map(p => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 12px' }}><strong>{p.name}</strong><br/><span style={{ fontSize: '12px', color: '#64748b' }}>{p.desc}</span></td>
                      <td style={{ padding: '14px 12px', fontSize: '13px' }}>{p.timeline}</td>
                      <td style={{ padding: '14px 12px' }}>{p.lead}</td>
                      <td style={{ padding: '14px 12px' }}>
                        <span style={{ backgroundColor: p.status === 'Active' ? '#e0f2fe' : '#f1f5f9', color: p.status === 'Active' ? '#0369a1' : '#475569', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                          {p.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong style={{ color: p.progress >= 90 ? '#b45309' : '#0f172a' }}>{p.progress}%</strong>
                          {p.progress >= 90 && p.progress < 100 && <span style={{ fontSize: '11px', backgroundColor: '#fef3c7', color: '#b45309', padding: '2px 6px', borderRadius: '4px' }}>Near Completion</span>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ================= MODULE 3: EXPERIMENTS ================= */}
          {currentModule === 'Experiments' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: '0 0 20px 0' }}>🔬 Module 3: Space Laboratory Experiments Monitor (Answers Q2 & Q3)</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '12px' }}>Experiment Title</th><th style={{ padding: '12px' }}>Parent Project</th><th style={{ padding: '12px' }}>Responsible Researcher (Q3)</th><th style={{ padding: '12px' }}>Operational Status (Q2)</th>
                  </tr>
                </thead>
                <tbody>
                  {mockExperiments.map(e => (
                    <tr key={e.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 12px', fontWeight: 'bold' }}>{e.title}</td>
                      <td style={{ padding: '14px 12px', color: '#475569' }}>{e.project}</td>
                      <td style={{ padding: '14px 12px', color: '#0369a1', fontWeight: 'bold' }}>👤 {e.researcher}</td>
                      <td style={{ padding: '14px 12px' }}>
                        {e.status === 'Delayed' ? (
                          <span style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                            ⚠️ Delayed by {e.daysDelayed}
                          </span>
                        ) : (
                          <span style={{ backgroundColor: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                            Stable
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ================= MODULE 4: SAMPLES ================= */}
          {currentModule === 'Samples' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: '0 0 20px 0' }}>🧪 Module 4: Bio & Engineering Material Asset Tracking (Answers Q4 & Q5)</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '12px' }}>Classification</th><th style={{ padding: '12px' }}>Material Sample Name</th><th style={{ padding: '12px' }}>Linked Experiment Context (Q4)</th><th style={{ padding: '12px' }}>Consumption Logs (Q5)</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSamples.map(s => (
                    <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 12px' }}>
                        <span style={{ backgroundColor: s.type === 'Biological' ? '#f0fdf4' : '#f1f5f9', color: s.type === 'Biological' ? '#166534' : '#475569', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                          {s.type}
                        </span>
                      </td>
                      <td style={{ padding: '14px 12px', fontWeight: 'bold' }}>{s.name}</td>
                      <td style={{ padding: '14px 12px', color: '#475569', fontSize: '13px' }}>🔬 {s.experiment}</td>
                      <td style={{ padding: '14px 12px' }}>
                        {s.consumed ? (
                          <span style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                            Consumed
                          </span>
                        ) : (
                          <span style={{ backgroundColor: '#fef9c3', color: '#854d0e', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                            In-Stock Available
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ================= MODULE 6: REPORTS ================= */}
          {currentModule === 'Reports' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: '0 0 20px 0' }}>📈 Module 6: Telemetry Operational Report Generator</h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '25px' }}>Generate and download legal system telemetry reporting frameworks for management audits.</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>📥 Export Project Status Report</button>
                <button style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>📥 Export Delay Exception Report</button>
                <button style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>📥 Export Sample Consumption Manifest</button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}