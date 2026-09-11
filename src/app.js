const STORAGE_KEY = "labellens.savedScans.v1";

const state = {
  result: null,
  uploadedImage: null,
  activeTab: "overview",
  editingFields: false,
  preferences: loadPreferences(),
  savedScans: loadSavedScans(),
};

const sampleResult = {
  id: "LL-26034-001",
  product: "Oat & Cocoa Breakfast Bites",
  category: "FOOD",
  summary: "One required declaration needs officer confirmation. Food information was extracted for transparency analysis.",
  status: "REVIEW",
  fields: [
    { label: "Product name", value: "Oat & Cocoa Breakfast Bites", status: "PASS", confidence: 98, evidence: "Front panel · crop 01" },
    { label: "Net quantity", value: "250 g", status: "PASS", confidence: 96, evidence: "Back panel · crop 03" },
    { label: "MRP", value: "₹120", status: "PASS", confidence: 94, evidence: "Side panel · crop 04" },
    { label: "Manufacturer / packer", value: "Nourish Foods Pvt. Ltd.", status: "PASS", confidence: 91, evidence: "Back panel · crop 03" },
    { label: "Consumer-care details", value: "Not clearly detected", status: "REVIEW", confidence: 62, evidence: "Back panel · crop 03" },
  ],
  ingredients: [
    { name: "Oat flour", type: "grain", explanation: "A milled grain ingredient used as the main base of the product.", tags: ["grain"] },
    { name: "Cocoa powder", type: "flavour", explanation: "Provides cocoa flavour and colour.", tags: ["flavour"] },
    { name: "Sugar", type: "sweetener", explanation: "An added sweetener detected in the ingredients list.", tags: ["sweetener"] },
    { name: "Milk solids", type: "allergen", explanation: "A milk-derived ingredient that may matter for a milk-avoidance preference.", tags: ["allergen", "milk"] },
    { name: "Sunflower oil", type: "fat", explanation: "A vegetable oil used to contribute texture.", tags: ["fat"] },
    { name: "Emulsifier", type: "texture", explanation: "Helps ingredients with different properties remain mixed.", tags: ["emulsifier"] },
    { name: "Natural flavour", type: "flavour", explanation: "A flavouring declaration from the package label.", tags: ["flavour"] },
  ],
  nutrition: [
    { name: "Energy", value: "438 kcal", basis: "per 100 g" },
    { name: "Total sugar", value: "18 g", basis: "per 100 g", flag: "sugar" },
    { name: "Sodium", value: "290 mg", basis: "per 100 g", flag: "sodium" },
    { name: "Protein", value: "8.2 g", basis: "per 100 g" },
  ],
  alternatives: [
    { name: "Oat & Seed Bites", mark: "O + S", relation: "Same snack category", reason: "Lower sugar per 100 g and similar pack size.", metrics: "12 g sugar · 7.8 g protein" },
    { name: "Cocoa Millet Crunch", mark: "M C", relation: "Similar cocoa profile", reason: "Uses millet as the primary grain and matches a vegetarian preference.", metrics: "15 g sugar · 6.9 g protein" },
    { name: "Plain Oat Squares", mark: "OAT", relation: "Simpler ingredient list", reason: "Fewer detected ingredients and no milk match in the demo catalogue.", metrics: "9 g sugar · 8.5 g protein" },
  ],
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function loadPreferences() {
  try { return JSON.parse(localStorage.getItem("labellens.preferences.v1")) || {}; } catch { return {}; }
}

function savePreferences() { localStorage.setItem("labellens.preferences.v1", JSON.stringify(state.preferences)); }

function loadSavedScans() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
}

function saveSavedScans() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedScans)); }

function showView(name) {
  $$('.view').forEach((view) => view.classList.toggle("active-view", view.id === `${name}-view`));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name === "saved") renderSavedScans();
  if (name === "result" && state.result) renderResult();
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => node.classList.remove("show"), 2600);
}

function openPreferences() {
  const drawer = $("#preferences-drawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  $$("[data-preference]").forEach((button) => button.classList.toggle("selected", Boolean(state.preferences[button.dataset.preference])));
}

function closePreferences() {
  const drawer = $("#preferences-drawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  savePreferences();
  if (state.result) renderResult();
}

function resetCapture() {
  state.uploadedImage = null;
  $("#image-input").value = "";
  $("#package-preview").hidden = true;
  $("#package-preview").removeAttribute("src");
  $("#capture-placeholder").hidden = false;
  $("#scan-frame").classList.remove("has-image");
  $("#analyze-button").disabled = true;
  $("#upload-status").textContent = "Capture the front and information panel for the strongest result.";
  $$(".check-dot").forEach((dot) => { dot.classList.remove("done"); dot.classList.add("pending"); });
}

function startNewScan() {
  resetCapture();
  showView("scan");
}

function useDemoScan() {
  state.uploadedImage = "demo";
  $("#capture-placeholder").hidden = true;
  $("#package-preview").hidden = false;
  $("#package-preview").src = createDemoImage();
  $("#scan-frame").classList.add("has-image");
  $("#analyze-button").disabled = false;
  $("#upload-status").textContent = "Demo package loaded. You can analyse it now.";
  $$(".check-dot").forEach((dot) => { dot.classList.remove("pending"); dot.classList.add("done"); });
}

function createDemoImage() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="850" height="600" viewBox="0 0 850 600"><rect width="850" height="600" fill="#dfece2"/><rect x="275" y="54" width="300" height="492" rx="7" fill="#f6e3c9" transform="rotate(4 425 300)"/><circle cx="430" cy="242" r="54" fill="none" stroke="#183e30" stroke-width="2"/><text x="430" y="258" text-anchor="middle" font-family="Georgia" font-size="62" fill="#183e30">✦</text><text x="430" y="122" text-anchor="middle" font-family="Arial" font-size="14" letter-spacing="4" fill="#183e30">NOURISH / 01</text><text x="430" y="355" text-anchor="middle" font-family="Georgia" font-size="42" fill="#183e30">OAT &amp; COCOA</text><text x="430" y="390" text-anchor="middle" font-family="Arial" font-size="13" fill="#557565">BREAKFAST BITES</text><text x="430" y="494" text-anchor="middle" font-family="Arial" font-size="12" fill="#557565">250 g · FOOD PRODUCT</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function handleFiles(files) {
  if (!files.length) return;
  const file = files[0];
  if (!file.type.startsWith("image/")) { toast("Please choose an image file."); return; }
  const reader = new FileReader();
  reader.onload = () => {
    state.uploadedImage = reader.result;
    $("#package-preview").src = reader.result;
    $("#package-preview").hidden = false;
    $("#capture-placeholder").hidden = true;
    $("#scan-frame").classList.add("has-image");
    $("#analyze-button").disabled = false;
    $("#upload-status").textContent = `${files.length} image${files.length > 1 ? "s" : ""} ready. Prototype extraction will use the demo food profile.`;
    $$(".check-dot").forEach((dot) => { dot.classList.remove("pending"); dot.classList.add("done"); });
  };
  reader.readAsDataURL(file);
}

function cloneResult() {
  const result = JSON.parse(JSON.stringify(sampleResult));
  result.id = `LL-26034-${String(Date.now()).slice(-3)}`;
  result.scannedAt = new Date().toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  return result;
}

function analyse() {
  showView("processing");
  const steps = $$(".processing-step");
  const progress = $("#processing-progress");
  steps.forEach((step) => { step.classList.remove("active", "complete"); $("em", step).textContent = "Waiting"; });
  let index = 0;
  const tick = () => {
    if (index > 0) { steps[index - 1].classList.remove("active"); steps[index - 1].classList.add("complete"); $("em", steps[index - 1]).textContent = "Complete"; }
    if (index === steps.length) {
      progress.style.width = "100%";
      window.setTimeout(() => { state.result = cloneResult(); state.activeTab = "overview"; showView("result"); }, 430);
      return;
    }
    steps[index].classList.add("active"); $("em", steps[index]).textContent = "In progress"; progress.style.width = `${Math.round((index / steps.length) * 100)}%`;
    index += 1;
    window.setTimeout(tick, 650);
  };
  tick();
}

function getAlerts() {
  const alerts = [];
  const preferences = state.preferences;
  if (preferences.milk) alerts.push({ kicker: "POTENTIAL MATCH", title: "Milk-related ingredient detected", body: "Milk solids appear in the ingredients list. This matches your saved milk preference. Confirm the package label if this is medically important." });
  if (preferences.peanut) alerts.push({ kicker: "PROFILE CHECK", title: "No peanut match detected", body: "No peanut ingredient or explicit peanut declaration was detected in the demo extraction. Review the original package for confirmation." });
  if (preferences.sugar) alerts.push({ kicker: "NUTRITION CONTEXT", title: "Sugar is a priority for you", body: "The label reports 18 g total sugar per 100 g. Compare this value with the alternatives below." });
  if (preferences.sodium) alerts.push({ kicker: "NUTRITION CONTEXT", title: "Sodium is a priority for you", body: "The label reports 290 mg sodium per 100 g. Compare the same basis across products." });
  if (!alerts.length) alerts.push({ kicker: "PERSONALISE THIS VIEW", title: "Set your preferences", body: "Choose an ingredient or nutrition priority to see what may be relevant to you. Preferences are optional." });
  return alerts;
}

function statusClass(status) { return status === "PASS" ? "status-pass" : status === "FAIL" ? "status-fail" : "status-review"; }

function recalculateResultStatus() {
  const hasFail = state.result.fields.some((field) => field.status === "FAIL");
  const hasReview = state.result.fields.some((field) => field.status === "REVIEW");
  state.result.status = hasFail ? "FAIL" : hasReview ? "REVIEW" : "PASS";
  state.result.summary = hasFail
    ? "One or more required declarations need correction before this inspection can be considered compliant."
    : hasReview
      ? "One required declaration needs officer confirmation. Food information was extracted for transparency analysis."
      : "All configured required declarations passed the current deterministic checks. Food information was extracted for transparency analysis.";
}

function renderFields(editable = state.editingFields) {
  return `<div class="field-list">${state.result.fields.map((field, index) => `<div class="field-row"><label>${field.label}<small class="evidence-line">${field.evidence}</small></label><input data-field-index="${index}" value="${escapeAttribute(field.value)}" ${editable ? "" : "readonly"} aria-label="${field.label}" /><div><span class="status-tag ${statusClass(field.status)}">${field.status}</span><span class="confidence">${field.confidence}%</span></div></div>`).join("")}</div>`;
}

function renderOverview() {
  const alerts = getAlerts();
  const topIngredients = state.result.ingredients.slice(0, 4);
  return `<div class="overview-grid"><div class="content-panel"><div class="panel-heading"><div><p class="eyebrow">LABEL CHECK</p><h3>Required declarations</h3></div><button class="text-button" data-action="edit-fields">${state.editingFields ? "Save corrections" : "Review fields"}</button></div>${renderFields()}</div><div class="content-panel sage"><div class="panel-heading"><div><p class="eyebrow">INSIDE THE PACKAGE</p><h3>What was detected</h3></div><button class="text-button" data-tab="ingredients">Explore →</button></div>${topIngredients.map((item) => `<div class="ingredient-chip"><strong>${item.name}</strong><span>${item.type}</span></div>`).join("")}<div class="nutrition-grid" style="margin-top:20px">${state.result.nutrition.slice(0, 2).map((item) => `<div class="nutrition-card"><strong>${item.value}</strong><span>${item.name} · ${item.basis}</span></div>`).join("")}</div></div><div class="content-panel blush"><div class="panel-heading"><div><p class="eyebrow">RELEVANT TO YOU</p><h3>Personal alerts</h3></div><button class="text-button" data-action="preferences">Edit profile</button></div>${alerts.map((alert) => `<div class="alert-item"><span class="alert-kicker">${alert.kicker}</span><strong>${alert.title}</strong><p>${alert.body}</p></div>`).join("")}</div><div class="content-panel"><div class="panel-heading"><div><p class="eyebrow">CLOSEST MATCHES</p><h3>Compare options</h3></div><button class="text-button" data-tab="alternatives">View all →</button></div><p class="drawer-copy">Recommendations show measurable comparison reasons. They are not medical advice or universal health ratings.</p><div class="hero-actions"><button class="outline-button compact" data-tab="alternatives">Open comparison</button></div></div></div>`;
}

function renderCompliance() {
  return `<div class="content-panel"><div class="panel-heading"><div><p class="eyebrow">DETERMINISTIC RULE ENGINE · 2026.1</p><h3>Field-level assessment</h3></div><button class="outline-button compact" data-action="edit-fields">${state.editingFields ? "Save corrections" : "Correct fields"}</button></div><p class="drawer-copy">AI and OCR provide the extracted values. The status below comes from the configured rule checks and can be reviewed before an officer confirms the inspection.</p>${renderFields()}<div class="capture-tip" style="margin-top:24px"><strong>Review state</strong><span>Consumer-care details were not clearly detected. Confirm the image or correct the value before finalising the report.</span></div></div>`;
}

function renderIngredients() {
  return `<div class="content-panel sage"><div class="panel-heading"><div><p class="eyebrow">INGREDIENT EXPLORER</p><h3>Inside the package</h3></div><span class="muted-label">${state.result.ingredients.length} detected</span></div><div class="ingredient-detail-list">${state.result.ingredients.map((item) => `<div class="ingredient-chip"><div><strong>${item.name}</strong><p class="drawer-copy" style="margin:6px 0 0">${item.explanation}</p></div><span>${item.tags.join(" · ")}</span></div>`).join("")}</div></div><div class="content-panel" style="margin-top:20px"><div class="panel-heading"><div><p class="eyebrow">NUTRITION PANEL</p><h3>Declared values</h3></div><span class="muted-label">As extracted</span></div><div class="nutrition-grid">${state.result.nutrition.map((item) => `<div class="nutrition-card"><strong>${item.value}</strong><span>${item.name} · ${item.basis}</span></div>`).join("")}</div></div>`;
}

function renderAlternatives() {
  return `<div class="content-panel"><div class="panel-heading"><div><p class="eyebrow">COMPARISON BASIS</p><h3>Your closest matches</h3></div><span class="muted-label">Demo catalogue</span></div><p class="drawer-copy">Each suggestion is ranked by category similarity, ingredient and nutrition data, preferences, and confidence in the comparison.</p><div class="comparison-list">${state.result.alternatives.map((item) => `<article class="alternative-card"><div class="alternative-art">${item.mark}</div><p class="eyebrow">${item.relation}</p><h3>${item.name}</h3><p class="alternative-reason">${item.reason}</p><p>${item.metrics}</p></article>`).join("")}</div></div>`;
}

function renderResult() {
  if (!state.result) return;
  $("#inspection-id").textContent = state.result.id;
  $("#result-title").textContent = state.result.status === "PASS" ? "Compliant" : state.result.status === "FAIL" ? "Non-compliant" : "Needs review";
  $("#result-summary").textContent = state.result.summary;
  $("#result-status-label").textContent = state.result.status;
  $("#result-status-icon").textContent = state.result.status === "PASS" ? "✓" : state.result.status === "FAIL" ? "!" : "◌";
  $(".result-stamp").style.color = state.result.status === "PASS" ? "var(--forest)" : state.result.status === "FAIL" ? "var(--error)" : "var(--review)";
  $(".result-stamp").style.borderColor = "currentColor";
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === state.activeTab));
  $("#result-content").innerHTML = state.activeTab === "overview" ? renderOverview() : state.activeTab === "compliance" ? renderCompliance() : state.activeTab === "ingredients" ? renderIngredients() : renderAlternatives();
}

function renderSavedScans() {
  const target = $("#saved-list");
  if (!state.savedScans.length) { target.innerHTML = `<div class="saved-empty"><h3>No saved scans yet</h3><p>Analyse a package and save it from the result view to keep it here.</p></div>`; return; }
  target.innerHTML = state.savedScans.map((item, index) => `<div class="saved-row"><div><p class="eyebrow">${item.id} · ${item.scannedAt || "Recent"}</p><h3>${item.product}</h3><p>${item.summary}</p></div><span class="status-tag ${statusClass(item.status)}">${item.status}</span><button class="outline-button compact" data-saved-index="${index}">Open</button></div>`).join("");
}

function saveCurrentScan() {
  if (!state.result) return;
  state.savedScans = [state.result, ...state.savedScans.filter((item) => item.id !== state.result.id)].slice(0, 12);
  saveSavedScans();
  toast("Inspection saved locally.");
}

function downloadReport() {
  if (!state.result) return;
  const report = `<!doctype html><html><head><meta charset="utf-8"><title>LabelLens report ${state.result.id}</title><style>body{font-family:Arial,sans-serif;color:#17251f;max-width:900px;margin:40px auto;line-height:1.5}h1{font-family:Georgia,serif;font-size:48px;font-weight:400}table{width:100%;border-collapse:collapse;margin:20px 0}td,th{padding:12px;border-bottom:1px solid #d8ded8;text-align:left}th{color:#557565;font-size:12px;text-transform:uppercase}small{color:#557565}.note{padding:18px;background:#e3eee8}</style></head><body><small>LABEL LENS · SIH26034 · ${state.result.id}</small><h1>${state.result.product}</h1><p><strong>Result:</strong> ${state.result.status}</p><p>${state.result.summary}</p><h2>Label check</h2><table><tr><th>Field</th><th>Value</th><th>Status</th><th>Confidence</th></tr>${state.result.fields.map((f) => `<tr><td>${f.label}</td><td>${f.value}</td><td>${f.status}</td><td>${f.confidence}%</td></tr>`).join("")}</table><h2>Ingredients</h2><ul>${state.result.ingredients.map((i) => `<li><strong>${i.name}</strong> — ${i.explanation}</li>`).join("")}</ul><div class="note"><strong>Safety boundary:</strong> This report is an information and screening aid. It does not provide medical advice, product certification, or laboratory verification.</div></body></html>`;
  const blob = new Blob([report], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a"); link.href = url; link.download = `${state.result.id}-label-lens-report.html`; link.style.display = "none"; document.body.appendChild(link); link.click(); link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast("Report downloaded.");
}

function escapeAttribute(value) { return String(value).replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }

document.addEventListener("click", (event) => {
  const viewTarget = event.target.closest("[data-view]");
  if (viewTarget) { showView(viewTarget.dataset.view); return; }
  const tab = event.target.closest("[data-tab]");
  if (tab && state.result) { state.activeTab = tab.dataset.tab; renderResult(); return; }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "new-scan") startNewScan();
  if (action === "demo-scan") { showView("scan"); useDemoScan(); }
  if (action === "preferences") openPreferences();
  if (action === "close-preferences") closePreferences();
  if (action === "download-report") downloadReport();
  if (action === "edit-fields") { state.activeTab = "compliance"; state.editingFields = !state.editingFields; renderResult(); toast(state.editingFields ? "Fields are ready for review." : "Corrections saved for this inspection."); }
  const saved = event.target.closest("[data-saved-index]");
  if (saved) { state.result = state.savedScans[Number(saved.dataset.savedIndex)]; state.activeTab = "overview"; showView("result"); }
});

function updateFieldFromInput(input) {
  if (!state.result) return;
  const field = state.result.fields[Number(input.dataset.fieldIndex)];
  if (!field) return;
  field.value = input.value;
  field.status = input.value.trim() ? (field.label === "Consumer-care details" && /not clearly/i.test(input.value) ? "REVIEW" : "PASS") : "REVIEW";
  recalculateResultStatus();
}

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-field-index]")) updateFieldFromInput(event.target);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("#image-input")) handleFiles([...event.target.files]);
  if (event.target.matches("[data-field-index]")) {
    updateFieldFromInput(event.target);
    renderResult();
  }
});

document.addEventListener("click", (event) => {
  const preference = event.target.closest("[data-preference]");
  if (!preference) return;
  const key = preference.dataset.preference;
  state.preferences[key] = !state.preferences[key];
  preference.classList.toggle("selected", state.preferences[key]);
  savePreferences();
});

$("#analyze-button").addEventListener("click", analyse);
$("#capture-stage").addEventListener("dragover", (event) => { event.preventDefault(); $("#scan-frame").classList.add("dragging"); });
$("#capture-stage").addEventListener("dragleave", () => $("#scan-frame").classList.remove("dragging"));
$("#capture-stage").addEventListener("drop", (event) => { event.preventDefault(); $("#scan-frame").classList.remove("dragging"); handleFiles([...event.dataTransfer.files]); });
window.addEventListener("keydown", (event) => { if (event.key === "Escape") closePreferences(); });

// Add a save action to the result header without adding another visual control to the template.
document.addEventListener("DOMContentLoaded", () => {
  const actions = $(".result-topbar");
  const save = document.createElement("button"); save.className = "text-button"; save.dataset.action = "save-scan"; save.textContent = "Save scan";
  actions?.insertBefore(save, actions.lastElementChild);
});

document.addEventListener("click", (event) => { if (event.target.closest('[data-action="save-scan"]')) saveCurrentScan(); });
