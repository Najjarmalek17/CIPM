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
    title:"Integrate privacy representation", label:"Privacy liaisons and champions", time:7,
    lead:"The privacy team coordinates the framework, but the functions that handle personal data have to put it into practice. Privacy liaisons, also called privacy champions, connect those departments to the central program.",
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

const day1Options = [
  ["Ask the CEO to decide how each department should communicate with Privacy.","Executive sponsorship can help, but handing the decision to the CEO does not embed someone in each function to surface risks and drive action."],
  ["Appoint a privacy liaison in each function to spot local risks and coordinate with the privacy office.","Local liaisons give each function a point of contact and a voice in the program. They work both ways: bringing risks to Privacy and carrying agreed practices back into their teams."],
  ["Require stricter annual privacy training and tie completion to performance goals.","Training can build awareness, but it doesn’t give functions ongoing representation or a channel to flag privacy issues early."],
  ["Ask Internal Audit to review each function’s communication with the privacy office.","An audit can identify gaps independently, but it doesn’t provide ongoing representation inside the business."]
];
const day2Lessons = [
  {
    title:"Create the privacy vision and mission statement", label:"Vision and mission", time:8,
    lead:"Start by defining why the privacy function exists and what it aims to achieve. Align that direction with the organization’s broader purpose and business objectives.",
    items:[
      ["Privacy vision","The direction the organization wants its privacy program to take."],
      ["Privacy mission statement","A brief description of the purpose of the privacy function and the ideas that guide its work."],
      ["Executive leadership approval","Refine the statement with input from key stakeholders, then take it to executive leadership for review and approval."]
    ],
    example:"If an organization is expanding digital services, its privacy mission could focus on enabling responsible uses of personal information while protecting people’s rights. That ties the privacy program to the organization’s direction without listing every regulation.",
    prompt:"Is the privacy mission statement the place to list every law that applies?",
    answer:"No. The mission statement describes purpose and direction. Identifying the laws that apply is part of defining the privacy program scope.",
    source:"Privacy Program Management, 3rd ed. · §2.1"
  },
  {
    title:"Determine the scope of a privacy program", label:"Privacy program scope", time:9,
    lead:"Once the mission and vision are established, define what the program needs to cover. First identify the personal data collected and processed by the organization. Then identify the applicable privacy and data protection laws and regulations.",
    items:[
      ["Identify the data","Find out what personal data the organization collects, uses, stores, or otherwise processes, from whom, and where it is held."],
      ["Engage the right functions","Talk to HR, Marketing, Finance, IT, and other functions that handle data. Internal Audit, Data Governance, or Information Security can help with discovery."],
      ["Identify applicable obligations","Use what you learned about the data, operations, and locations to determine which privacy and data protection requirements are in scope."]
    ],
    example:"A company assumes the program only covers customer accounts. Interviews reveal HR also stores employee information and that some operations are overseas. Those facts matter when determining which requirements apply.",
    prompt:"The executive team asks you to pick the governance model before anyone has mapped what the organization processes. Which task actually helps you define scope now?",
    answer:"Identify the personal data collected and processed by the organization. The governance model answers how responsibilities and decisions are organized, not what privacy obligations are in scope.",
    source:"Privacy Program Management, 3rd ed. · §2.2"
  },
  {
    title:"Develop a privacy strategy", label:"Privacy strategy", time:7,
    lead:"The privacy strategy is the organization’s approach to communicating and supporting the program and its vision. It turns a stated direction into commitments people and teams can carry out.",
    items:[
      ["Stakeholders and internal partnerships","Build support across business functions, and engage leaders who make decisions about information management, risk, compliance, and legal obligations."],
      ["Management buy-in","Secure the funding, resources, and support the program needs. A statement of support is not the same as providing the people or funding to do the work."],
      ["Roles and responsibilities","Clarify what each function and its staff must do. The privacy team coordinates the work, but it does not operate every process."]
    ],
    example:"When rolling out a privacy review process, agree which team owns it, what support it needs, and what leadership will fund. The scope tells you which activities must be covered; the strategy tells you how the organization will support the work.",
    prompt:"A leadership team approves the privacy mission statement but allocates no resources to put it into practice. What’s missing?",
    answer:"Management buy-in that translates into resources and support. Agree how the relevant functions will implement the strategy and what leadership will provide.",
    source:"Privacy Program Management, 3rd ed. · §2.3"
  }
];
const day2Options = [
  ["Decide whether privacy decisions should be made centrally or by each business unit.","A governance model describes where decision-making sits, not what privacy obligations apply."],
  ["Appoint the people who will run the program.","Team structure matters for implementation, not for establishing the program’s coverage."],
  ["Identify what personal data the organization collects and processes.","What data the organization handles, whose data it is, and where processing occurs help determine which obligations are in scope."],
  ["Decide whether to create a dedicated privacy officer role.","An appointment obligation may apply, but it does not replace identifying the processing activities that determine scope."]
];
const days = {
  1: {
    chapter:"CHAPTER 01 · INTRODUCTION TO PRIVACY PROGRAM MANAGEMENT",
    title:"From compliance work to a privacy program",
    intro:"Learn how a privacy program manager makes privacy work repeatable, verifiable, and shared across the organization.",
    lessons, number:74, page:27, rationale:51, sections:"§§1.5–1.6",
    scenario:"At a retail group, HR, Marketing, and Operations rarely involve the privacy team until after decisions are made. What is the best way to integrate privacy representation into those functions?",
    options:day1Options, key:1, pdfKey:3, hint:"Look for ongoing representation inside the departments, not just oversight, escalation, or awareness.",
    pdfFeedback:[
      "Senior leadership can sponsor the work, but delegation upward does not create departmental representation.",
      "Training can improve awareness but does not embed a point of contact in each function.",
      "Expanding central capacity does not put representatives inside the departments.",
      "Privacy liaisons give departments a voice in the program. They raise local risks and carry agreed practices back into their teams."
    ],
    teach:"What would a privacy liaison do in the first month, and what would still belong to the privacy team?"
  },
  2: {
    chapter:"CHAPTER 02 · PRIVACY PROGRAM FRAMEWORK: PRIVACY GOVERNANCE",
    title:"Define the direction and scope of a privacy program",
    intro:"Learn how to distinguish the privacy vision and mission statement, privacy program scope, and privacy strategy. This is the first part of Chapter 2.",
    lessons:day2Lessons, number:37, page:18, rationale:44, sections:"§2.2",
    scenario:"A retail company adds an employee scheduling platform in another country. Leadership asks you to revise the scope of the privacy program. What will help you determine the scope?",
    options:day2Options, key:2, pdfKey:2, hint:"Separate what the program must cover from who will run it and how decisions will be made.",
    pdfFeedback:day2Options.map(x=>x[1]),
    teach:"In one or two sentences, explain why identifying personal data collected and processed comes before identifying applicable obligations."
  }
};
const letters = "ABCD";
const panel = document.querySelector("#panel");
const controls = document.querySelector("#controls");
const nav = document.querySelector("#outline");
const newQuiz = () => ({selected:null,confidence:"",attempts:[],review:false,note:""});
const study = Object.fromEntries([1,2].map(n=>[n,{step:0,unlocked:0,mode:"pdf",pdf:newQuiz(),scenario:newQuiz()}]));
let day = 1;

function loadDay(focus = false){
  day = location.hash === "#day-2" ? 2 : 1;
  const d = days[day];
  document.title = `CIPM Study Room · Day 0${day}`;
  document.querySelector("#day-kicker").innerHTML = `DAY 0${day} <span></span> 30 MINUTES`;
  document.querySelector("#day-title").textContent = d.title;
  document.querySelector("#day-note").textContent = d.intro;
  document.querySelector("#chapter-label").textContent = d.chapter;
  document.querySelectorAll("[data-day]").forEach(a=> a.dataset.day===String(day) ? a.setAttribute("aria-current","page") : a.removeAttribute("aria-current"));
  render();
  if(focus) window.scrollTo(0,0);
}

function render(focus = false){
  const d = days[day], data = study[day], {step,unlocked,mode} = data, {lessons} = d, quiz = step === lessons.length;
  const format = n => String(n).padStart(2,"0");
  document.querySelector("#counter").textContent = `${format(step + 1)} / ${format(lessons.length+1)}`;
  document.querySelector("#progress").value = step + 1;
  document.querySelector("#progress").max = lessons.length+1;
  nav.innerHTML = [...lessons.map(x=>x.label),"Practice-bank check"].map((label,i)=>`<button class="step" type="button" data-step="${i}" ${i===step?'aria-current="step"':""} ${i>unlocked?"disabled":""}><span class="num">0${i+1}</span>${label}</button>`).join("");
  if(!quiz){
    const x = lessons[step];
    panel.innerHTML = `<p class="kicker">TEACHING ROUND 0${step+1} · ${x.time} MIN</p><h2 id="lesson-title" tabindex="-1">${x.title}</h2><p class="lead">${x.lead}</p><ul class="concepts">${x.items.map(([title,body])=>`<li><strong>${title}:</strong> ${body}</li>`).join("")}</ul><div class="example"><strong>In practice</strong><p>${x.example}</p></div><details><summary>Quick check: ${x.prompt}</summary><p>${x.answer}</p></details><p class="source">${x.source}</p>`;
    controls.innerHTML = `${step ? '<button class="secondary" type="button" data-go="back">Back</button>' : "<span></span>"}<button class="primary" type="button" data-go="next">${step === lessons.length-1 ? "Start the practice check" : "Continue"} →</button>`;
  } else {
    const q = data[mode], pdf = mode==="pdf", key = pdf ? d.pdfKey : d.key;
    const {review,selected,confidence,attempts,note} = q;
    panel.innerHTML = `<p class="kicker">PRACTICE-BANK CHECK · 6 MIN</p><h2 id="lesson-title" tabindex="-1">Apply what you learned</h2><div class="mode-picker" aria-label="Practice mode"><button type="button" class="secondary" data-mode="pdf" aria-pressed="${pdf}">Original question (PDF)</button><button type="button" class="secondary" data-mode="scenario" aria-pressed="${!pdf}">Practice without PDF</button></div>${pdf?`<p class="practice-ref"><strong>Question ${d.number} · PDF page ${d.page}</strong><br>IAPP CIPM Practice Exam v1.1 · <code>CIPM-Exam.pdf</code></p><p class="lead">Read the question and choices in your PDF exactly as written. Enter your answer letter here in the original order.</p>`:`<p class="lead">${d.scenario}</p>`}<form id="quiz"><fieldset class="${pdf?"letters-only":""}" ${review?"disabled":""}><legend>Choose the best answer</legend>${d.options.map(([label],i)=>`<label class="option"><input type="radio" name="choice" value="${i}" ${selected===i?"checked":""}><b>${letters[i]}${pdf?"":"."}</b>${pdf?"":`<span>${label}</span>`}</label>`).join("")}</fieldset><fieldset ${review?"disabled":""}><legend>How sure are you?</legend><div class="confidence">${["High","Medium","Low"].map(c=>`<label><input type="radio" name="confidence" value="${c}" ${confidence===c?"checked":""}> ${c}</label>`).join("")}</div></fieldset></form><div id="feedback" aria-live="polite">${review ? feedback(d,q,pdf,key) : ""}</div><p class="source">${pdf?`Chapter reference: ${d.sections}. Rationale in your PDF: page ${d.rationale}.`:`Separate scenario for the same concept. IAPP practice question ${d.number} is on PDF page ${d.page}; its wording and answer order may differ.`}</p>`;
    controls.innerHTML = `<button class="secondary" type="button" data-go="back">Back</button>${review ? (attempts.at(-1).choice!==key ? '<button class="primary" type="button" data-go="retry">Try again</button>' : "") : `<button class="primary" type="submit" form="quiz" ${selected===null||!confidence?"disabled":""}>Check my answer</button>`}`;
    const summary = document.querySelector("#summary");
    if(summary) summary.value = note || `Day ${day} | ${pdf?`IAPP Q${d.number}`:"Separate scenario"} | First try: ${letters[attempts[0].choice]} (${attempts[0].confidence} confidence)${attempts.length>1?` | Correct after retry ${attempts.length-1}`:""}\nMy reasoning: `;
  }
  if(focus){document.querySelector("#lesson-title").focus();document.querySelector(".lesson").scrollIntoView({block:"start"});}
}

function feedback(d,q,pdf,key){
  const {attempts} = q, last = attempts.at(-1), why = pdf?d.pdfFeedback:d.options.map(x=>x[1]);
  if(last.choice !== key) return `<div class="feedback retry"><strong>Not quite. Try again.</strong><p>${why[last.choice]}</p><p>${d.hint}</p></div>`;
  return `<div class="feedback"><strong>${attempts.length===1?"Correct on the first try.":"Correct after retry."}</strong><p>${why[key]}</p><details><summary>Why the other options fall short</summary><ul>${why.map((o,i)=>i===key?"":`<li><b>${letters[i]}.</b> ${o}</li>`).join("")}</ul></details><div class="handoff"><label for="summary"><strong>Teach it back</strong></label><p>${d.teach} If you want coaching, copy your own summary into your chat. Nothing is sent automatically.</p><textarea id="summary" rows="3" spellcheck="false"></textarea></div></div>`;
}
nav.addEventListener("click", e=>{
  const button=e.target.closest("button[data-step]");
  if(button&&!button.disabled){study[day].step=Number(button.dataset.step);render(true);}
});
controls.addEventListener("click", e=>{
  const data=study[day], q=data[data.mode];
  const action=e.target.closest("button")?.dataset.go;
  if(action==="back"){data.step--;render(true);}
  if(action==="next"){data.step++;data.unlocked=Math.max(data.step,data.unlocked);render(true);}
  if(action==="retry"){q.review=false;q.selected=null;q.confidence="";render();panel.querySelector("input").focus();}
});
panel.addEventListener("click",e=>{
  const mode=e.target.closest("button[data-mode]")?.dataset.mode;
  if(mode){study[day].mode=mode;render();panel.querySelector(`[data-mode="${mode}"]`).focus();}
});
panel.addEventListener("change",e=>{
  const data=study[day], q=data[data.mode];
  if(e.target.name==="choice") q.selected=Number(e.target.value);
  if(e.target.name==="confidence") q.confidence=e.target.value;
  const submit=controls.querySelector('[type="submit"]');
  if(submit) submit.disabled=q.selected===null||!q.confidence;
});
panel.addEventListener("input",e=>{if(e.target.id==="summary"){const d=study[day];d[d.mode].note=e.target.value;}});
panel.addEventListener("submit",e=>{
  e.preventDefault();
  const data=study[day], q=data[data.mode];
  if(q.selected===null||!q.confidence||q.review) return;
  q.attempts.push({choice:q.selected,confidence:q.confidence});q.review=true;render();
  const feedbackNode=panel.querySelector("#feedback");
  feedbackNode.tabIndex=-1;feedbackNode.focus();
});
window.addEventListener("hashchange",()=>loadDay(true));
loadDay();
