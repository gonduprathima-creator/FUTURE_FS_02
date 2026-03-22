import { useState } from "react";

const SOURCES = ["Website", "Social Media", "Email Campaign", "Referral", "Cold Call"];
const STATUSES = ["New", "Contacted", "Qualified", "Converted", "Lost"];

const STATUS_STYLE = {
  New:       { color: "#2563eb", bg: "#dbeafe" },
  Contacted: { color: "#d97706", bg: "#fef3c7" },
  Qualified: { color: "#7c3aed", bg: "#ede9fe" },
  Converted: { color: "#059669", bg: "#d1fae5" },
  Lost:      { color: "#dc2626", bg: "#fee2e2" },
};

const INIT_LEADS = [
  { id: 1, name: "G.Prathima",   email: "prathima@gmail.com",   source: "Website",        status: "New",       created: "Mar 10, 2026" },
  { id: 2, name: "D.Dharani",    email: "dharani@gmail.com",    source: "Social Media",   status: "Contacted", created: "Mar 12, 2026" },
  { id: 3, name: "A.Amrutha",    email: "amrutha@gmail.com",    source: "Referral",       status: "Qualified", created: "Mar 14, 2026" },
  { id: 4, name: "Ch.Bindu",     email: "bindu@gmail.com",      source: "Email Campaign", status: "Converted", created: "Mar 15, 2026" },
  { id: 5, name: "A.Nageswari",  email: "nageswari@gmail.com",  source: "Cold Call",      status: "Lost",      created: "Mar 16, 2026" },
  { id: 6, name: "M.Shiva",      email: "shiva@gmail.com",      source: "Website",        status: "New",       created: "Mar 18, 2026" },
];

let nextId = 7;

function Avatar({ name, size = 36 }) {
  const initials = name.split(".").pop()?.slice(0, 2).toUpperCase() || "?";
  const palette = ["#ec4899","#3b82f6","#8b5cf6","#f43f5e","#06b6d4","#f97316"];
  const bg = palette[name.charCodeAt(0) % palette.length];
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.36, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
      {initials}
    </div>
  );
}

function StatusBadge({ status }) {
  const s = STATUS_STYLE[status] || { color: "#64748b", bg: "#f1f5f9" };
  return <span style={{ background: s.bg, color: s.color, borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 700 }}>{status}</span>;
}

function SourceBadge({ source }) {
  return <span style={{ background: "#f0f4ff", color: "#6b7280", border: "1px solid #c7d7fe", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 500 }}>{source}</span>;
}

// ── LOGIN PAGE ───────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("admin@crm.com");
  const [pass, setPass]   = useState("");
  const [err, setErr]     = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    if (!email || !pass) { setErr("Please fill in all fields."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 800);
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#fce7f3 0%,#ede9fe 40%,#dbeafe 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .linp{width:100%;background:#fff;border:1.5px solid #f9a8d4;border-radius:10px;color:#374151;font-family:'Outfit',sans-serif;font-size:15px;padding:12px 16px;outline:none;transition:border-color .2s;box-shadow:0 1px 3px #f9a8d422;}
        .linp:focus{border-color:#ec4899;box-shadow:0 0 0 3px #fce7f3;}
        .lbtn{width:100%;background:linear-gradient(135deg,#ec4899,#8b5cf6);border:none;border-radius:10px;color:#fff;font-family:'Outfit',sans-serif;font-size:15px;font-weight:700;padding:14px;cursor:pointer;transition:opacity .2s,transform .15s;box-shadow:0 4px 16px #ec489944;}
        .lbtn:hover{opacity:.92;} .lbtn:active{transform:scale(.98);}
      `}</style>

      {/* decorative blobs */}
      <div style={{ position:"fixed",inset:0,overflow:"hidden",pointerEvents:"none" }}>
        <div style={{ position:"absolute",width:420,height:420,borderRadius:"50%",background:"radial-gradient(circle,#fbcfe888,transparent 70%)",top:"-8%",left:"5%" }} />
        <div style={{ position:"absolute",width:360,height:360,borderRadius:"50%",background:"radial-gradient(circle,#bfdbfe88,transparent 70%)",bottom:"5%",right:"8%" }} />
        <div style={{ position:"absolute",width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,#ddd6fe77,transparent 70%)",top:"40%",right:"20%" }} />
      </div>

      <div style={{ background:"#ffffffcc",backdropFilter:"blur(20px)",border:"1.5px solid #f9a8d4",borderRadius:22,padding:"44px 40px",width:420,maxWidth:"94vw",position:"relative",boxShadow:"0 20px 60px #ec489922" }}>
        <div style={{ textAlign:"center",marginBottom:30 }}>
          <div style={{ width:64,height:64,borderRadius:18,background:"linear-gradient(135deg,#ec4899,#8b5cf6)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:30,marginBottom:16,boxShadow:"0 8px 24px #ec489944" }}>📊</div>
          <div style={{ fontSize:26,fontWeight:800,color:"#1e1b4b",letterSpacing:"-0.02em" }}>ProCRM</div>
          <div style={{ fontSize:14,color:"#9ca3af",marginTop:4 }}>Sign in to your account</div>
        </div>

        <div style={{ marginBottom:16 }}>
          <label style={{ fontSize:13,fontWeight:600,color:"#6b7280",display:"block",marginBottom:6 }}>Email Address</label>
          <input className="linp" value={email} onChange={e=>setEmail(e.target.value)} placeholder="admin@crm.com" />
        </div>
        <div style={{ marginBottom:20 }}>
          <label style={{ fontSize:13,fontWeight:600,color:"#6b7280",display:"block",marginBottom:6 }}>Password</label>
          <input className="linp" type="password" value={pass} onChange={e=>{setPass(e.target.value);setErr("");}} placeholder="••••••••" onKeyDown={e=>e.key==="Enter"&&handleLogin()} />
        </div>
        {err && <div style={{ color:"#dc2626",fontSize:13,marginBottom:12 }}>{err}</div>}
        <button className="lbtn" onClick={handleLogin} disabled={loading}>{loading?"Signing in…":"Sign In"}</button>
        <div style={{ textAlign:"center",marginTop:18,fontSize:13,color:"#9ca3af" }}>
          Don't have an account? <span style={{ color:"#ec4899",cursor:"pointer",fontWeight:600 }}>Register</span>
        </div>
      </div>
    </div>
  );
}

// ── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ onLogout }) {
  const [leads, setLeads]     = useState(INIT_LEADS);
  const [search, setSearch]   = useState("");
  const [statusFilter, setSF] = useState("All Statuses");
  const [modal, setModal]     = useState(null);
  const [form, setForm]       = useState({});
  const [delId, setDelId]     = useState(null);
  const [activePage, setActivePage] = useState("Dashboard");

  const filtered = leads.filter(l => {
    const ms = statusFilter === "All Statuses" || l.status === statusFilter;
    const mq = l.name.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase());
    return ms && mq;
  });

  const counts = {
    total: leads.length,
    new: leads.filter(l=>l.status==="New").length,
    contacted: leads.filter(l=>l.status==="Contacted").length,
    converted: leads.filter(l=>l.status==="Converted").length,
  };

  function openAdd() {
    setForm({ name:"",email:"",source:"Website",status:"New",created:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}) });
    setModal("add");
  }
  function openEdit(lead) { setForm({...lead}); setModal(lead); }
  function save() {
    if (!form.name?.trim() || !form.email?.trim()) return;
    if (modal==="add") setLeads(p=>[...p,{...form,id:nextId++}]);
    else setLeads(p=>p.map(l=>l.id===form.id?{...form}:l));
    setModal(null);
  }
  function del(id) { setLeads(p=>p.filter(l=>l.id!==id)); setDelId(null); }

  const STAT_CARDS = [
    { label:"Total Leads", value:counts.total,    icon:"👥", color:"#3b82f6", bg:"linear-gradient(135deg,#eff6ff,#dbeafe)", border:"#93c5fd" },
    { label:"New",         value:counts.new,       icon:"⭐", color:"#ec4899", bg:"linear-gradient(135deg,#fdf2f8,#fce7f3)", border:"#f9a8d4" },
    { label:"Contacted",   value:counts.contacted, icon:"📞", color:"#d97706", bg:"linear-gradient(135deg,#fffbeb,#fef3c7)", border:"#fcd34d" },
    { label:"Converted",   value:counts.converted, icon:"✅", color:"#059669", bg:"linear-gradient(135deg,#ecfdf5,#d1fae5)", border:"#6ee7b7" },
  ];

  const NAV = [
    { icon:"🏠", label:"Dashboard" },
    { icon:"➕", label:"Add Lead", action:openAdd },
    { icon:"📈", label:"Analytics" },
    { icon:"⚙️", label:"Settings" },
  ];

  return (
    <div style={{ display:"flex",minHeight:"100vh",background:"linear-gradient(160deg,#fdf2f8 0%,#f5f3ff 50%,#eff6ff 100%)",fontFamily:"'Outfit',sans-serif",color:"#1e1b4b" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:5px;} ::-webkit-scrollbar-track{background:#fce7f3;} ::-webkit-scrollbar-thumb{background:#f9a8d4;border-radius:4px;}
        .dinp{background:#fff;border:1.5px solid #f9a8d4;border-radius:10px;color:#374151;font-family:'Outfit',sans-serif;font-size:14px;padding:10px 14px;outline:none;transition:border-color .2s,box-shadow .2s;width:100%;}
        .dinp:focus{border-color:#ec4899;box-shadow:0 0 0 3px #fce7f3;}
        .dbtn{cursor:pointer;border:none;border-radius:8px;font-family:'Outfit',sans-serif;font-weight:600;transition:all .18s;}
        .dbtn:active{transform:scale(.97);}
        .trow:hover{background:#fdf4ff;}
        .nav-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:500;transition:all .18s;color:#9ca3af;}
        .nav-item:hover{background:#fce7f3;color:#ec4899;}
        .nav-item.active{background:linear-gradient(135deg,#fce7f3,#ede9fe);color:#ec4899;border:1.5px solid #f9a8d4;}
        .overlay{position:fixed;inset:0;background:rgba(236,72,153,.08);backdrop-filter:blur(6px);z-index:100;display:flex;align-items:center;justify-content:center;}
        .modal{background:#fff;border:1.5px solid #f9a8d4;border-radius:20px;width:460px;max-width:96vw;max-height:90vh;overflow-y:auto;padding:28px;box-shadow:0 20px 60px #ec489922;}
        select.dinp option{background:#fff;color:#374151;}
        label.fl{font-size:12px;font-weight:600;color:#9ca3af;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;}
      `}</style>

      {/* Sidebar */}
      <div style={{ width:240,background:"#ffffffcc",backdropFilter:"blur(12px)",borderRight:"1.5px solid #f9a8d4",display:"flex",flexDirection:"column",padding:"24px 16px",flexShrink:0,boxShadow:"2px 0 12px #ec489911" }}>
        <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:36,padding:"0 6px" }}>
          <div style={{ width:38,height:38,borderRadius:12,background:"linear-gradient(135deg,#ec4899,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 4px 12px #ec489944" }}>📊</div>
          <div>
            <div style={{ fontWeight:800,fontSize:16,color:"#1e1b4b",letterSpacing:"-0.02em" }}>ProCRM</div>
            <div style={{ fontSize:11,color:"#c084fc" }}>Lead Manager</div>
          </div>
        </div>

        <div style={{ flex:1,display:"flex",flexDirection:"column",gap:4 }}>
          {NAV.map(({ icon,label,action }) => (
            <div key={label} className={`nav-item ${activePage===label?"active":""}`}
              onClick={() => { setActivePage(label); action?.(); }}>
              <span>{icon}</span>{label}
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1.5px solid #fce7f3",paddingTop:16,display:"flex",alignItems:"center",gap:10 }}>
          <Avatar name="G.Prathima" size={34} />
          <div style={{ flex:1,minWidth:0 }}>
            <div style={{ fontSize:13,fontWeight:700,color:"#1e1b4b",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>G.Prathima</div>
            <div style={{ fontSize:11,color:"#c084fc" }}>Admin</div>
          </div>
          <button className="dbtn" onClick={onLogout} title="Logout" style={{ background:"#fce7f3",color:"#ec4899",fontSize:14,padding:"6px 10px",cursor:"pointer",borderRadius:8 }}>↩</button>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden" }}>
        {/* Topbar */}
        <div style={{ background:"#ffffffbb",backdropFilter:"blur(12px)",borderBottom:"1.5px solid #f9a8d4",padding:"0 28px",height:68,display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 2px 12px #ec489911" }}>
          <div>
            <div style={{ fontWeight:800,fontSize:22,color:"#1e1b4b",letterSpacing:"-0.02em" }}>Dashboard</div>
            <div style={{ fontSize:13,color:"#9ca3af" }}>Manage and track all your leads</div>
          </div>
          <button className="dbtn" onClick={openAdd} style={{ background:"linear-gradient(135deg,#ec4899,#8b5cf6)",color:"#fff",padding:"10px 22px",fontSize:14,display:"flex",alignItems:"center",gap:7,boxShadow:"0 4px 16px #ec489944" }}>
            <span style={{ fontSize:18,lineHeight:1 }}>+</span> New Lead
          </button>
        </div>

        <div style={{ flex:1,overflow:"auto",padding:28 }}>
          {/* Stat Cards */}
          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:28 }}>
            {STAT_CARDS.map(({ label,value,icon,color,bg,border }) => (
              <div key={label} style={{ background:bg,border:`1.5px solid ${border}`,borderRadius:16,padding:"20px 22px",boxShadow:`0 4px 16px ${color}18` }}>
                <div style={{ width:44,height:44,borderRadius:12,background:`${color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:12,border:`1px solid ${border}` }}>{icon}</div>
                <div style={{ fontWeight:800,fontSize:34,color,lineHeight:1 }}>{value}</div>
                <div style={{ fontSize:13,color:"#9ca3af",marginTop:4,fontWeight:500 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div style={{ background:"#ffffffcc",border:"1.5px solid #f9a8d4",borderRadius:18,overflow:"hidden",boxShadow:"0 4px 24px #ec489911",backdropFilter:"blur(10px)" }}>
            <div style={{ padding:"18px 22px",display:"flex",gap:12,alignItems:"center",borderBottom:"1.5px solid #fce7f3",flexWrap:"wrap",background:"linear-gradient(90deg,#fdf2f8,#eff6ff)" }}>
              <div style={{ flex:1,minWidth:220,position:"relative" }}>
                <span style={{ position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:"#f9a8d4",fontSize:15 }}>🔍</span>
                <input className="dinp" style={{ paddingLeft:36 }} placeholder="Search leads by name or email..." value={search} onChange={e=>setSearch(e.target.value)} />
              </div>
              <select className="dinp" style={{ width:"auto",minWidth:160 }} value={statusFilter} onChange={e=>setSF(e.target.value)}>
                <option>All Statuses</option>
                {STATUSES.map(s=><option key={s}>{s}</option>)}
              </select>
            </div>

            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%",borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ borderBottom:"1.5px solid #fce7f3",background:"#fdf4ff" }}>
                    {["Name","Email","Source","Status","Created","Actions"].map(h=>(
                      <th key={h} style={{ padding:"13px 20px",textAlign:"left",fontSize:11,fontWeight:700,color:"#c084fc",letterSpacing:"0.08em",textTransform:"uppercase",whiteSpace:"nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length===0 ? (
                    <tr><td colSpan={6} style={{ textAlign:"center",padding:"52px 20px",color:"#d1d5db",fontSize:15 }}>✨ No leads found</td></tr>
                  ) : filtered.map((lead,i)=>(
                    <tr key={lead.id} className="trow" style={{ borderBottom:"1px solid #fce7f3",background: i%2===0?"#fff":"#fdf9ff",transition:"background .15s" }}>
                      <td style={{ padding:"14px 20px" }}>
                        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                          <Avatar name={lead.name} size={32} />
                          <span style={{ fontWeight:700,fontSize:14,color:"#1e1b4b" }}>{lead.name}</span>
                        </div>
                      </td>
                      <td style={{ padding:"14px 20px",fontSize:13.5,color:"#6b7280" }}>{lead.email}</td>
                      <td style={{ padding:"14px 20px" }}><SourceBadge source={lead.source} /></td>
                      <td style={{ padding:"14px 20px" }}><StatusBadge status={lead.status} /></td>
                      <td style={{ padding:"14px 20px",fontSize:13,color:"#9ca3af",whiteSpace:"nowrap" }}>{lead.created}</td>
                      <td style={{ padding:"14px 20px" }}>
                        <div style={{ display:"flex",gap:6 }}>
                          <button className="dbtn" onClick={()=>openEdit(lead)} style={{ background:"#eff6ff",color:"#3b82f6",padding:"6px 12px",fontSize:12,border:"1px solid #bfdbfe" }}>✏️ Edit</button>
                          <button className="dbtn" onClick={()=>setDelId(lead.id)} style={{ background:"#fff1f2",color:"#f43f5e",padding:"6px 10px",fontSize:12,border:"1px solid #fecdd3" }}>🗑</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ padding:"12px 22px",borderTop:"1px solid #fce7f3",fontSize:12,color:"#c084fc",background:"#fdf4ff",fontWeight:500 }}>
              ✨ Showing {filtered.length} of {leads.length} leads
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {modal && (
        <div className="overlay" onClick={e=>e.target===e.currentTarget&&setModal(null)}>
          <div className="modal">
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22 }}>
              <div style={{ fontWeight:800,fontSize:18,color:"#1e1b4b" }}>{modal==="add"?"➕ Add New Lead":"✏️ Edit Lead"}</div>
              <button className="dbtn" onClick={()=>setModal(null)} style={{ background:"#fce7f3",color:"#ec4899",padding:"5px 12px",fontSize:18,cursor:"pointer" }}>×</button>
            </div>
            <div style={{ display:"grid",gap:14 }}>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
                <div><label className="fl">Name *</label><input className="dinp" value={form.name||""} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Full name" /></div>
                <div><label className="fl">Email *</label><input className="dinp" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="email@example.com" /></div>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
                <div>
                  <label className="fl">Source</label>
                  <select className="dinp" value={form.source||"Website"} onChange={e=>setForm(f=>({...f,source:e.target.value}))}>
                    {SOURCES.map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="fl">Status</label>
                  <select className="dinp" value={form.status||"New"} onChange={e=>setForm(f=>({...f,status:e.target.value}))}>
                    {STATUSES.map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display:"flex",gap:10,marginTop:6 }}>
                <button className="dbtn" onClick={save} style={{ background:"linear-gradient(135deg,#ec4899,#8b5cf6)",color:"#fff",flex:1,padding:"12px",fontSize:14,boxShadow:"0 4px 14px #ec489933" }}>
                  {modal==="add"?"Save Lead":"Update Lead"}
                </button>
                <button className="dbtn" onClick={()=>setModal(null)} style={{ background:"#f1f5f9",color:"#9ca3af",padding:"12px 20px" }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {delId && (
        <div className="overlay" onClick={e=>e.target===e.currentTarget&&setDelId(null)}>
          <div className="modal" style={{ width:360,textAlign:"center",padding:"36px 28px" }}>
            <div style={{ fontSize:46,marginBottom:14 }}>🗑️</div>
            <div style={{ fontWeight:800,fontSize:18,color:"#1e1b4b",marginBottom:8 }}>Delete Lead?</div>
            <div style={{ color:"#9ca3af",fontSize:14,marginBottom:24 }}>This action cannot be undone.</div>
            <div style={{ display:"flex",gap:10 }}>
              <button className="dbtn" onClick={()=>del(delId)} style={{ background:"linear-gradient(135deg,#f43f5e,#ec4899)",color:"#fff",flex:1,padding:"12px",fontSize:14 }}>Yes, Delete</button>
              <button className="dbtn" onClick={()=>setDelId(null)} style={{ background:"#f1f5f9",color:"#9ca3af",flex:1,padding:"12px" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn
    ? <Dashboard onLogout={() => setLoggedIn(false)} />
    : <LoginPage onLogin={() => setLoggedIn(true)} />;
}