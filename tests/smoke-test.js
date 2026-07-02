const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.21</span></div>',
  "const APP_VERSION='V13.6.21'",
  "const LS='gta_v12_state'",
  'function buildAdaptiveSession',
  'function dailyConversationCoachCard',
  'function realGreekListeningCard',
  'function conversationMemoryCard',
  'function livingGreeceModeCard',
  'function ensureA2GrammarGapState',
  'function confidenceDashboardCard',
  'function confidenceDashboardPanel',
  'function confidenceEngineStats',
  'function renderConfidenceEngine',
  'function logConfidencePulse',
  'function confidenceMinimumChecklistCard',
  'Listen First library',
  'function dailyReadingPick',
  'function renderGuidedReadingTask',
  'function gradeGuidedReading',
  "if(minChoice>=15&&g)",
  "let seen=new Set(),out=[]",
  'Confidence Engine',
  '6-month confidence dashboard',
  'weekly readiness signal',
  'gta-v13-6-21-daily-reading-step'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-21-daily-reading-step'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.21 — Daily Reading Step')){console.error('README heading mismatch');process.exit(1)}
if(!readme.includes('App header shows `Καθημερινά V13.6.21`')){console.error('README verification section mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.21"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.19</span>','APP_VERSION=\'V13.6.19\'','gta-v13-6-19-confidence-dashboard','V13.6.18</span>','APP_VERSION=\'V13.6.18\'','gta-v13-6-18-living-in-greece-mode'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x)||readme.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/kathimerina-v13621.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v13621.js'],{stdio:'inherit'});
const renderHomeChunk=script.match(/function renderHome\(\)[\s\S]*?function cardMini/);
if(!renderHomeChunk){console.error('renderHome not found');process.exit(1)}
const home=renderHomeChunk[0];
['sixMonthConfidencePanel()','confidenceDashboardCard()','confidenceMinimumChecklistCard()','dailyConversationCoachCard()','conversationMemoryCard()','livingGreeceModeCard()','realGreekListeningCard()','a2GrammarGapCard()','adaptiveSessionPanel()'].forEach(x=>{if(!home.includes(x)){console.error('Home missing '+x);process.exit(1)}});
if(!script.includes('state.confidenceEngineLog.unshift')){console.error('Confidence Engine log capture missing');process.exit(1)}
if(!script.includes('confidenceDashboardPanel()')){console.error('Progress Confidence panel missing');process.exit(1)}
if(!script.includes("if(minChoice>=15&&g)")){console.error('Lowered confidence gate missing');process.exit(1)}
if(!script.includes("['listen','recognize','recall','speak','converse']")){console.error('Listen First mode button missing');process.exit(1)}
if(!script.includes("id=\"englishAnswer\"")){console.error('Listen First English reveal target missing');process.exit(1)}
if(!script.includes('function dailyReadingPick')){console.error('Daily reading picker missing');process.exit(1)}
if(!script.includes("if(step.type==='reading')return renderGuidedReadingTask")){console.error('Guided reading route missing');process.exit(1)}
if(!script.includes("type:'reading'")){console.error('Daily reading session step missing');process.exit(1)}
if(!script.includes('Grade reading step')){console.error('Guided reading grading missing');process.exit(1)}
console.log('GTA V13.6.21 Καθημερινά Daily Reading Step smoke test passed.');
