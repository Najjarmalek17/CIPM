const lessons = [
  {
    title:"A program is more than a project", label:"Program and life cycle", time:5,
    lead:"An inventory, a notice rollout, and a breach playbook are projects. A privacy program gives those projects a common structure so the organization can protect personal information and people’s rights over time.",
    items:[
      ["Framework","The structure you tailor to the organization’s obligations, goals, and practices."],
      ["Assess","Find privacy gaps against applicable requirements, policies, or standards."],
      ["Protect","Put safeguards and privacy-by-design practices into systems and processes."],
      ["Sustain","Keep the program working through monitoring, audits, and communication."],
      ["Respond","Prepare for and handle rights requests and privacy incidents."]
    ],
    example:"For a new HR system: map what employee data it uses (Assess); limit access (Protect); review whether access stays appropriate (Sustain); handle an employee access request or a misdirected file (Respond). The phases can overlap in practice.",
    prompt:"A team checks every quarter whether access is still appropriate. Which phase is it in?",
    answer:"Sustain. Setting access restrictions is Protect; checking that those restrictions keep working is Sustain.",
    source:"Privacy Program Management, 3rd ed. · Chapter 1 opening, PDF pp. 16–20"
  },
  {
    title:"Lead the program. Prove it works.", label:"Role and accountability", time:7,
    lead:"The privacy program manager turns obligations into work the organization can own and repeat. Accountability means being able to show what the organization actually did, not just what it promised to do.",
    items:[
      ["Set direction","Identify obligations and risks, review existing documentation, and align privacy priorities with business goals."],
      ["Coordinate delivery","Bring together the right people for policies, notices, training, assessments, controls, vendor management, rights requests, and incident response."],
      ["Show the evidence","Demonstrate that policies and controls operate. Document deviations, corrective actions, and how the program is monitored and improved."]
    ],
    example:"A client says its retention policy is complete. An approved document tells you the rule. Deletion records, documented exceptions, and tracked corrective actions tell you what happened in practice.",
    prompt:"Leadership sends you a signed retention policy and asks whether it proves compliance. What else would you ask to see?",
    answer:"Ask for evidence the policy is followed, such as deletion records, documented exceptions, and corrective action where deletion did not happen as planned.",
    source:"Privacy Program Management, 3rd ed. · §§1.1–1.2"
  },
  {
    title:"Make the case beyond fines", label:"Value beyond compliance", time:5,
    lead:"Compliance is necessary, but it isn’t the whole case for a privacy program. The chapter treats trust as a business asset that can be hard to regain once lost.",
    items:[
      ["Trust and reputation","Good stewardship supports confidence among customers, employees, and partners, whether the organization sells to consumers or to businesses."],
      ["Risk and operations","Repeatable practices help prevent or mitigate incidents, support global operations, and meet client expectations."],
      ["Ethics and value","A mature program helps the business make responsible processing decisions and can support better data quality and competitive differentiation."]
    ],
    example:"If a business sponsor only asks about fines, also explain what a program would do for the business: give customers more confidence in how data is used and reduce the disruption of an incident.",
    prompt:"A B2B company says customer trust is only a concern for consumer brands. How would you respond?",
    answer:"A B2B company still depends on trust from clients, employees, contractors, and partners. Responsible data handling matters even without a consumer-facing brand.",
    source:"Privacy Program Management, 3rd ed. · §§1.3–1.4"
  },
  {
    title:"Give privacy a voice in each function", label:"Teams and privacy champions", time:7,
    lead:"The privacy office coordinates the framework, but the functions that handle personal data have to put it into practice. Privacy champions connect those teams to the central program.",
    items:[
      ["Execution sits with functions","HR handles employee data, Procurement supports vendor due diligence, and IT and Information Security implement technical controls."],
      ["Support has different roles","Legal tracks obligations, Learning and Development helps teach staff, and Internal Audit checks whether controls are in place and being followed."],
      ["Champions make it local","Representatives advocate for privacy in their functions, surface local risks, and help put program decisions into practice. A council or committee can bring those representatives together."]
    ],
    example:"A Procurement champion can flag a risky vendor workflow to the privacy office and help colleagues adopt the agreed review steps. The champion is the link, not a replacement for the privacy office or the team that runs procurement.",
    prompt:"A central policy is clear, yet business teams raise privacy issues too late. What is missing?",
    answer:"A working connection between the privacy office and the functions. A local champion can surface risks early and help get privacy decisions into everyday workflows.",
    source:"Privacy Program Management, 3rd ed. · §§1.5–1.7"
  }
];

const options = [
  ["Ask the CEO to decide how each department should communicate with Privacy.","Executive sponsorship can help, but handing the decision to the CEO does not embed someone in each function to surface risks and drive action."],
  ["Appoint a privacy liaison in each function to spot local risks and coordinate with the privacy office.","Local liaisons give each function a point of contact and a voice in the program. They work both ways: bringing risks to Privacy and carrying agreed practices back into their teams."],
  ["Require stricter annual privacy training and tie completion to performance goals.","Training can build awareness, but it doesn’t give functions ongoing representation or a channel to flag privacy issues early."],
  ["Ask Internal Audit to review each function’s communication with the privacy office.","An audit can identify gaps independently, but it doesn’t provide ongoing representation inside the business."]
];
const letters = "ABCD";
const panel = document.querySelector("#panel");
const controls = document.querySelector("#controls");
const nav = document.querySelector("#outline");
let step = 0, unlocked = 0, selected = null, confidence = "", attempts = [], review = false, note = "";
const hint = "Look for the option that creates ongoing representation inside the business, not just oversight, escalation, or awareness.";

function render(focus = false){
  const quiz = step === lessons.length;
  document.querySelector("#counter").textContent = `0${step + 1} / 05`;
  document.querySelector("#progress").value = step + 1;
  nav.innerHTML = [...lessons.map(x=>x.label),"Practice-bank check"].map((label,i)=>`<button class="step" type="button" data-step="${i}" ${i===step?'aria-current="step"':""} ${i>unlocked?"disabled":""}><span class="num">0${i+1}</span>${label}</button>`).join("");
  if(!quiz){
    const x = lessons[step];
    panel.innerHTML = `<p class="kicker">TEACHING ROUND 0${step+1} · ${x.time} MIN</p><h2 id="lesson-title" tabindex="-1">${x.title}</h2><p class="lead">${x.lead}</p><ul class="concepts">${x.items.map(([title,body])=>`<li><strong>${title}:</strong> ${body}</li>`).join("")}</ul><div class="example"><strong>In practice</strong><p>${x.example}</p></div><details><summary>Quick check: ${x.prompt}</summary><p>${x.answer}</p></details><p class="source">${x.source}</p>`;
    controls.innerHTML = `${step ? '<button class="secondary" type="button" data-go="back">Back</button>' : "<span></span>"}<button class="primary" type="button" data-go="next">${step === 3 ? "Start the practice check" : "Continue"} →</button>`;
  } else {
    const locked = review;
    panel.innerHTML = `<p class="kicker">PRACTICE-BANK CHECK · 6 MIN</p><h2 id="lesson-title" tabindex="-1">Who gets privacy into the room?</h2><p class="lead">At a retail group, HR, Marketing, and Operations rarely involve the privacy office until after decisions are made. You want every function to have a continuing voice in the privacy program. What is the best way to do that?</p><form id="quiz"><fieldset ${locked?"disabled":""}><legend>Choose the best answer</legend>${options.map(([label],i)=>`<label class="option"><input type="radio" name="choice" value="${i}" ${selected===i?"checked":""}><b>${letters[i]}.</b><span>${label}</span></label>`).join("")}</fieldset><fieldset ${locked?"disabled":""}><legend>How sure are you?</legend><div class="confidence">${["High","Medium","Low"].map(c=>`<label><input type="radio" name="confidence" value="${c}" ${confidence===c?"checked":""}> ${c}</label>`).join("")}</div></fieldset></form><div id="feedback" aria-live="polite">${review ? feedback() : ""}</div><p class="source">Adapted from IAPP CIPM Practice Exam v1.1, question 74. Chapter link: §§1.5–1.6. The scenario, wording, and choice order are adapted.</p>`;
    controls.innerHTML = `<button class="secondary" type="button" data-go="back">Back</button>${review ? (attempts.at(-1).choice!==1 ? '<button class="primary" type="button" data-go="retry">Try again</button>' : "") : `<button class="primary" type="submit" form="quiz" ${selected===null||!confidence?"disabled":""}>Check my answer</button>`}`;
    const summary = document.querySelector("#summary");
    if(summary) summary.value = note || `Day 1 | First try: ${letters[attempts[0].choice]} (${attempts[0].confidence} confidence)${attempts.length>1?` | Correct after retry ${attempts.length-1}`:""}\nMy reasoning: `;
  }
  if(focus){document.querySelector("#lesson-title").focus();document.querySelector(".lesson").scrollIntoView({block:"start"});}
}

function feedback(){
  const last = attempts.at(-1);
  if(last.choice !== 1) return `<div class="feedback retry"><strong>Not quite. Try one more time.</strong><p>${options[last.choice][1]}</p><p>${hint}</p></div>`;
  return `<div class="feedback"><strong>${attempts.length===1?"Correct on the first try.":"Correct after retry."}</strong><p>${options[1][1]}</p><details><summary>Why the other options fall short</summary><ul>${options.map((o,i)=>i===1?"":`<li><b>${letters[i]}.</b> ${o[1]}</li>`).join("")}</ul></details><div class="handoff"><label for="summary"><strong>Teach it back</strong></label><p>Finish the summary below: what would your champion do in their first month, and what would still belong to the privacy office? Paste it into our chat so I can coach your reasoning before Day 2.</p><textarea id="summary" rows="3" spellcheck="false"></textarea></div></div>`;
}
nav.addEventListener("click", e=>{
  const button=e.target.closest("button[data-step]");
  if(button&&!button.disabled){step=Number(button.dataset.step);render(true);}
});
controls.addEventListener("click", e=>{
  const action=e.target.closest("button")?.dataset.go;
  if(action==="back"){step--;render(true);}
  if(action==="next"){step++;unlocked=Math.max(step,unlocked);render(true);}
  if(action==="retry"){review=false;selected=null;confidence="";render();panel.querySelector("input").focus();}
});
panel.addEventListener("change",e=>{
  if(e.target.name==="choice") selected=Number(e.target.value);
  if(e.target.name==="confidence") confidence=e.target.value;
  const submit=controls.querySelector('[type="submit"]');
  if(submit) submit.disabled=selected===null||!confidence;
});
panel.addEventListener("input",e=>{if(e.target.id==="summary") note=e.target.value;});
panel.addEventListener("submit",e=>{
  e.preventDefault();
  if(selected===null||!confidence||review) return;
  attempts.push({choice:selected,confidence});review=true;render();
  const feedbackNode=panel.querySelector("#feedback");
  feedbackNode.tabIndex=-1;feedbackNode.focus();
});
render();
