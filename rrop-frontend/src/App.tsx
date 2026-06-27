import { useState } from 'react';

// Mock data aligned perfectly with the RROP management problem statement
const mockProjects = [
  { id: 101, name: "Satellite Payload A", lead: "Dr. Rav", status: "Active", progress: "75%" },
  { id: 102, name: "Microgravity Plant Growth", lead: "Dr. Jib", status: "Active", progress: "40%" },
  { id: 103, name: "Radiation Shielding Test", lead: "Nicholas Liu", status: "Active", progress: "90%" },
];

const mockExperiments = [
  { id: 501, title: "Radiation Shielding Test v1", project: "Payload A", status: "Delayed", owner: "Nicholas Liu", days: "7 Days" },
  { id: 502, title: "Bio-cell Viability Beta", project: "Plant Growth", status: "Delayed", owner: "Dr. Rav", days: "4 Days" },
];

const mockSamples = [
  { id: 901, type: "Biological", name: "Cryo-Stem Cells", experiment: "Bio-cell Beta", status: "Consumed" },
  { id: 902, type: "Biological", name: "Arabidopsis Seeds", experiment: "Plant Growth", status: "In-Stock" },
  { id: 903, type: "Engineering", name: "Alloy Sheet v2", experiment: "Radiation v1", status: "Consumed" },
];

export default function App() {
  const [currentModule, setCurrentModule] = useState('Dashboard');

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f8fafc' }}>
      
      {/* 1. Sidebar Navigation */}
      <div style={{ width: '260px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px', color: '#22d3ee' }}>
          🚀 ResearchSat RROP
        </div>
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Dashboard', 'Projects', 'Experiments', 'Samples'].map((item) => (
            <button
              key={item}
              onClick={() => setCurrentModule(item)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currentModule === item ? '#0891b2' : 'transparent',
                color: '#fff',
                fontSize: '14px',
                transition: 'all 0.2s'
              }}
            >
              {item}
            </button>
          ))}
        </nav>
        <div style={{ fontSize: '12px', color: '#94a3b8', borderTop: '1px solid #334155', paddingTop: '15px' }}>
          Engineer: Nicholas Liu
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        {/* Header */}
        <header style={{ backgroundColor: '#fff', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '24px', color: '#1e293b', margin: 0 }}>{currentModule} Control Panel</h1>
          <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
            ● Backend Live (Mock Mode)
          </span>
        </header>

        {/* Dynamic Main Viewport */}
        <main style={{ padding: '40px' }}>
          
          {/* VIEW 1: DASHBOARD */}
          {currentModule === 'Dashboard' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Active Research Projects</div>
                  <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#0f172a', marginTop: '10px' }}>25</div>
                </div>
                <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2' }}>
                  <div style={{ fontSize: '14px', color: '#dc2626', fontWeight: 500 }}>Delayed Experiments</div>
                  <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#dc2626', marginTop: '10px' }}>140</div>
                </div>
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Total Biological Samples</div>
                  <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#0f172a', marginTop: '10px' }}>600</div>
                </div>
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Active Research Personnel</div>
                  <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#0f172a', marginTop: '10px' }}>30</div>
                </div>
              </div>
              <div style={{ backgroundColor: '#eff6ff', padding: '20px', borderRadius: '8px', border: '1px solid #bfdbfe', color: '#1e40af', fontSize: '14px' }}>
                💡 <strong>Welcome back, Nicholas!</strong> This dashboard aggregates global metrics across all active payloads. Click on the sidebar modules to view detailed telemetry registries.
              </div>
            </div>
          )}

          {/* VIEW 2: PROJECTS */}
          {currentModule === 'Projects' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '20px', marginTop: 0 }}>📂 Active Research Projects (Pain Point 1)</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Project ID</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Project Name</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Lead Investigator</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Operational Status</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Timeline Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProjects.map(p => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#64748b' }}>#{p.id}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>{p.name}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#475569' }}>{p.lead}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px' }}><span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>{p.status}</span></td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#0891b2', fontWeight: 'bold' }}>{p.progress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* VIEW 3: EXPERIMENTS */}
          {currentModule === 'Experiments' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #fee2e2' }}>
              <h2 style={{ fontSize: '18px', color: '#dc2626', marginBottom: '20px', marginTop: 0 }}>⚠️ Critical Delayed Experiments Monitor (Pain Point 2 & 3)</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#fef2f2', borderBottom: '1px solid #fee2e2' }}>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#991b1b', textAlign: 'left' }}>Exp ID</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#991b1b', textAlign: 'left' }}>Experiment Title</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#991b1b', textAlign: 'left' }}>Parent Project</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#991b1b', textAlign: 'left' }}>Responsible Researcher</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#991b1b', textAlign: 'left' }}>Delay Breached</th>
                  </tr>
                </thead>
                <tbody>
                  {mockExperiments.map(e => (
                    <tr key={e.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#64748b' }}>#{e.id}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#991b1b', fontWeight: 'bold' }}>{e.title}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#475569' }}>{e.project}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>{e.owner}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#dc2626', fontWeight: 'bold' }}>{e.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* VIEW 4: SAMPLES */}
          {currentModule === 'Samples' && (
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '20px', marginTop: 0 }}>🧪 Biological & Engineering Samples Inventory (Pain Point 4 & 5)</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Sample ID</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Classification</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Material Name</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Linked Experiment</th>
                    <th style={{ padding: '12px 10px', fontSize: '13px', color: '#64748b', textAlign: 'left' }}>Consumption Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSamples.map(s => (
                    <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#64748b' }}>#{s.id}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px' }}>
                        <span style={{ backgroundColor: s.type === 'Biological' ? '#f0fdf4' : '#f1f5f9', color: s.type === 'Biological' ? '#166534' : '#334155', padding: '3px 8px', borderRadius: '6px', fontSize: '12px' }}>
                          {s.type}
                        </span>
                      </td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>{s.name}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px', color: '#475569' }}>{s.experiment}</td>
                      <td style={{ padding: '14px 10px', fontSize: '14px' }}>
                        <span style={{ backgroundColor: s.status === 'Consumed' ? '#fee2e2' : '#fef9c3', color: s.status === 'Consumed' ? '#991b1b' : '#854d0e', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}