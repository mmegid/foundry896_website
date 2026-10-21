(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var MARKS = {"cast": "<rect class=\"s\" x=\"34\" y=\"26\" width=\"172\" height=\"108\" rx=\"5\"/> <path class=\"f\" d=\"M34 46h172\"/> <circle class=\"f\" cx=\"45\" cy=\"36\" r=\"2.6\"/><circle class=\"f\" cx=\"55\" cy=\"36\" r=\"2.6\"/><circle class=\"f\" cx=\"65\" cy=\"36\" r=\"2.6\"/> <path class=\"s\" d=\"M120 60v14M120 74H78v16M120 74h42v16M120 74v16\"/> <rect class=\"a\" x=\"106\" y=\"50\" width=\"28\" height=\"14\" rx=\"3\"/> <rect class=\"s\" x=\"64\" y=\"90\" width=\"28\" height=\"14\" rx=\"3\"/> <rect class=\"s\" x=\"106\" y=\"90\" width=\"28\" height=\"14\" rx=\"3\"/> <rect class=\"s\" x=\"148\" y=\"90\" width=\"28\" height=\"14\" rx=\"3\"/> <path class=\"f\" d=\"M78 104v10h84v-10\"/> <circle class=\"a\" cx=\"120\" cy=\"118\" r=\"3.2\"/>", "waraqat": "<path class=\"f\" d=\"M40 32v100\"/> <path class=\"f\" d=\"M40 44h7M40 62h7M40 80h7M40 98h7M40 116h7\"/> <rect class=\"s\" x=\"56\" y=\"38\" width=\"86\" height=\"12\" rx=\"2\"/> <rect class=\"s\" x=\"56\" y=\"57\" width=\"66\" height=\"12\" rx=\"2\"/> <rect class=\"a\" x=\"56\" y=\"76\" width=\"96\" height=\"12\" rx=\"2\"/> <rect class=\"s\" x=\"56\" y=\"95\" width=\"58\" height=\"12\" rx=\"2\"/> <rect class=\"s\" x=\"56\" y=\"114\" width=\"78\" height=\"12\" rx=\"2\"/> <path class=\"s\" d=\"M204 128a46 46 0 0 0-46-46\"/> <path class=\"f\" d=\"M204 128a30 30 0 0 0-30-30\"/> <path class=\"f\" d=\"M204 128 168 92\"/> <circle class=\"s\" cx=\"204\" cy=\"128\" r=\"3.2\"/>", "kids": "<path class=\"s\" d=\"M76 134V94a44 44 0 0 1 88 0v40\"/> <path class=\"f\" d=\"M90 134V96a30 30 0 0 1 60 0v38\"/> <path class=\"f\" d=\"M48 134v-30a16 16 0 0 1 32 0v30\"/> <path class=\"f\" d=\"M160 134v-30a16 16 0 0 1 32 0v30\"/> <path class=\"a\" d=\"M120 14l6.4 11.6L139 28l-8.4 9.6L132 50l-12-5.6L108 50l1.6-12.4L101 28l12.6-2.4z\"/> <path class=\"s\" d=\"M36 134h168\"/>", "montage": "<rect class=\"s\" x=\"30\" y=\"42\" width=\"180\" height=\"76\" rx=\"4\"/> <path class=\"f\" d=\"M30 56h180M30 104h180\"/> <rect class=\"f\" x=\"38\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"58\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/> <rect class=\"f\" x=\"78\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"98\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/> <rect class=\"f\" x=\"118\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"138\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/> <rect class=\"f\" x=\"158\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"178\" y=\"46\" width=\"9\" height=\"7\" rx=\"1.5\"/> <rect class=\"f\" x=\"38\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"58\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/> <rect class=\"f\" x=\"78\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"98\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/> <rect class=\"f\" x=\"118\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"138\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/> <rect class=\"f\" x=\"158\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/><rect class=\"f\" x=\"178\" y=\"107\" width=\"9\" height=\"7\" rx=\"1.5\"/> <path class=\"f\" d=\"M90 56v48M150 56v48\"/> <path class=\"a\" d=\"M100 90v-20M108 90v-32M116 90v-12M124 90v-26M132 90v-16M140 90v-24\"/> <path class=\"s\" d=\"M56 88 76 76v24z\"/> <path class=\"s\" d=\"M162 74h26M162 82h20M162 90h26\"/>", "snapnsnag": "<path class=\"s\" d=\"M52 56V42a8 8 0 0 1 8-8h14\"/> <path class=\"s\" d=\"M188 56V42a8 8 0 0 0-8-8h-14\"/> <path class=\"s\" d=\"M52 104v14a8 8 0 0 0 8 8h14\"/> <path class=\"s\" d=\"M188 104v14a8 8 0 0 1-8 8h-14\"/> <rect class=\"s\" x=\"94\" y=\"46\" width=\"52\" height=\"68\" rx=\"6\"/> <path class=\"s\" d=\"M110 46v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6\"/> <path class=\"f\" d=\"M106 74h28M106 88h20\"/> <path class=\"a\" d=\"M104 60l6 6 12-13\"/> <circle class=\"a\" cx=\"170\" cy=\"52\" r=\"3.2\"/> <circle class=\"f\" cx=\"170\" cy=\"52\" r=\"8\"/>", "majlis": "<rect class=\"s\" x=\"86\" y=\"34\" width=\"68\" height=\"46\" rx=\"10\"/> <path class=\"s\" d=\"M110 80l-6 12 18-12\"/> <path class=\"a\" d=\"M120 46l3.4 6.6L130 56l-6.6 3.4L120 66l-3.4-6.6L110 56l6.6-3.4z\"/> <circle class=\"s\" cx=\"56\" cy=\"112\" r=\"10\"/> <circle class=\"s\" cx=\"88\" cy=\"124\" r=\"10\"/> <circle class=\"s\" cx=\"120\" cy=\"128\" r=\"10\"/> <circle class=\"s\" cx=\"152\" cy=\"124\" r=\"10\"/> <circle class=\"s\" cx=\"184\" cy=\"112\" r=\"10\"/> <path class=\"f\" d=\"M60 102 92 88M92 114l16-16M120 118V92M148 114l-16-16M180 102 148 88\"/>"};

  var projects = [
    {id:"cast", name:"Foundry Cast", kind:"AI agents / desktop", status:"Live product", s:"live",
     fig:"Fig. 01 — agents workspace", img:"assets/img/cast-app.jpg", icon:"assets/img/foundry-cast-icon.png",
     url:"https://cast.foundry896.com",
     alt:"Foundry Cast, showing a roster of configured agents and an agent team grouped for a channel",
     brief:"A desktop workspace for agents and the tools around them.",
     points:["Each agent configured on its own, with its own model", "Agent teams you can drop into a channel together", "Channels and direct messages alongside the agents", "Stop every running agent from one control"],
     desc:"A desktop workspace for conversations, agents, and the tools that turn an idea into a useful outcome."},
    {id:"waraqat", name:"Waraqat al-Zaman", kind:"Knowledge / culture", status:"Live product", s:"live",
     fig:"Fig. 02 — curated journey", img:"assets/img/waraqat-app.jpg", icon:"assets/img/waraqat-logo.png",
     url:"https://www.waraqatalzaman.com",
     alt:"Waraqat Al-Zaman, showing a curated Seerah journey with a map, chapter timeline, and reading panel",
     brief:"A living archive of Islamic history, told as journeys.",
     points:["Curated trails: the Seerah, Abbasid Baghdad, al-Andalus, the Ottomans", "Dual CE and AH dating, in English or Arabic", "Every chapter carries deeper context and its sources", "A research notebook for what you want to keep"],
     desc:"A living archive for exploring Islamic history through stories, timelines, search, and grounded context."},
    {id:"lanterns", name:"Lanterns of Islamic History", kind:"Learning / family", status:"Live product", s:"live",
     fig:"Fig. 03 — learning journey", img:"assets/img/lanterns-journey.jpg", icon:"assets/img/lanterns-icon.png",
     url:"https://lantern.waraqatalzaman.com",
     alt:"The Lanterns of Islamic History journey map, with chapters unlocking outward from Makkah",
     brief:"Story-led history learning that families explore together.",
     points:["A journey map where chapters unlock as you travel", "Each chapter ends in a quick quiz", "Badges to collect as the story advances", "Progress that picks up where it was left"],
     desc:"Story-led learning experiences that make history approachable, memorable, and easy to explore together."},
    {id:"atlas", name:"Kids Atlas", kind:"Learning / geography", status:"Live product", s:"live",
     fig:"Fig. 04 — countryball world", img:"assets/img/kidsatlas-hero.jpg", icon:"assets/img/kidsatlas-icon.png",
     url:"https://kidsatlas.foundry896.com",
     alt:"Countryball World — the Kids Atlas key art, with flag-faced characters around a globe of flags",
     brief:"A 3D globe children spin, open, and get quizzed on.",
     points:["A 3D globe children can spin and zoom", "Every country filled with its own flag", "What a place is known for, who came from it, what happened there", "Quizzes to test what actually stuck"],
     desc:"An interactive atlas where children spin a 3D globe, open countries filled with their own flags, and meet the people, places, and moments that made them — then test what stuck with a quiz."},
    {id:"forge", name:"Run And Sell", kind:"Commerce / ERP", status:"Live product", s:"live",
     fig:"Fig. 05 — connected business workspace", img:"assets/img/forge-app.jpg?v=20261021-runnsell", icon:"assets/img/forge-icon.png",
     url:"https://runnsell.com",
     alt:"Run And Sell homepage with the tagline Run your business. Sell your products. and a preview of its connected business workspace",
     brief:"Run your business. Sell your products.",
     points:["Sales, inventory, finance, and people in one workspace", "Twelve storefront templates for different retail categories", "Customize themes, branding, page sections, and product collections", "Multilingual storefronts for customers across languages and regions", "Preview storefront drafts before publishing; review AI recommendations before approval"],
     desc:"Run your business. Sell your products. Run And Sell brings sales, inventory, finance, and people into an AI-assisted workspace with connected online storefronts. Start with a storefront template, tailor the design and product collections to your brand, and present your products in multiple languages to reach customers across regions."},
    {id:"majlis", name:"Majlis", kind:"Family communication", status:"Live product", s:"live",
     fig:"Fig. 06 — product mark", img:"assets/img/majlis-lockup.png", icon:"assets/img/majlis-icon.png", bare:true,
     url:"https://majlisai.chat",
     alt:"The Majlis AI lockup: four people seated in a majlis around a glowing AI table, beneath an ornamented arch",
     brief:"A shared AI persona for the people around you.",
     points:["One shared persona the whole circle talks to, not one each", "Built around an Egyptian family and friends majlis", "A single place to ask, plan, and keep in touch"],
     desc:"A shared AI persona for the people around you, so a family has one place to ask, plan, and keep in touch."},
    {id:"shieldix", name:"Shield Insurance Exchange", kind:"Insurance / reciprocal exchange", status:"Live product", s:"live",
     fig:"Fig. 07 — community protection", img:"assets/img/shieldix-app.jpg", icon:"assets/img/shieldix-icon.png",
     url:"https://shieldix.foundry896.com",
     alt:"Shield Insurance Exchange — Protection built around community, over a Delaware home at golden hour",
     brief:"Community home and auto cover, built for Delaware.",
     points:["Home and auto: house, townhome, condo, duplex, cars, trucks, vans",
             "A free estimate in about three minutes",
             "No account to create, no obligation to buy",
             "Delaware only, managed by Shield Risk Managers, LLC"],
     desc:"A community-centred reciprocal insurance exchange for Delaware. Straightforward home and auto coverage, shaped for the people and places it knows best — free estimates in about three minutes, with no account and no obligation."},
    {id:"route", name:"Foundry Route", kind:"AI infrastructure", status:"Live product", s:"live",
      fig:"Fig. 10 — intelligent routing", img:"assets/img/foundry-route-dashboard.png", url:"https://route.foundry896.com", icon:"assets/img/foundry-route-logo.png",
      alt:"Foundry Route dashboard showing monthly token budgets, routing strategies, fallback chains, and model selection",
      brief:"Smart agent routing that harnesses the proper model based on the request to ensure same-token output.",
      points:["Route requests to optimal models automatically", "Save ~80% on costs by using free models for simple requests", "Consistent token output and predictable behavior", "AI infrastructure layer for resilient applications"],
      desc:"Smart agent routing that harnesses the proper model based on the request characteristics. Save ~80% in costs by automatically using free models for simple requests, ensuring consistent token output and predictable behavior across your AI applications."},
    {id:"snapnsnag", name:"SnapNSnag", kind:"Hotel quality / operations", status:"Live product", s:"live",
      fig:"Fig. 09 — hotel inspections", img:"assets/img/snapnsnag-website.jpg", icon:"assets/img/snapnsnag-logo.png", url:"https://snapnsnag.com/",
      alt:"SnapNSnag — hotel inspection software for hospitality teams with AI-powered issue capture and SLA monitoring",
      brief:"AI-powered hotel inspection software for quality operations, issue tracking, SLA monitoring, and inspections.",
      points:["Capture property issues and run digital inspections", "Monitor SLAs and improve hotel quality operations team", "AI-powered workflows for faster issue resolution", "Digital inspections track every property detail"],
      desc:"Hotel inspection software designed for hospitality teams. Capture property issues, run digital inspections, monitor SLAs, and improve hotel quality operations with AI-powered workflows."},
    {id:"nexus", name:"Foundry Nexus", kind:"AI / reliability operations", status:"Internal tool", s:"studio",
      fig:"Fig. 11 — reliability operations", img:"assets/img/nexus-system.svg", icon:"assets/img/nexus-icon.svg",
      alt:"Foundry Nexus concept diagram connecting OpenTelemetry signals, AI agents, and remediation",
      brief:"Reliability operations, monitored by AI agents.",
      points:["Observability across the systems behind our products", "AI agents supporting reliability operations", "OpenTelemetry signals connected to remediation"],
      desc:"Foundry Nexus brings observability and remediation into one reliability workflow. Driven by AI agents and grounded in OpenTelemetry signals, it supports the systems behind our products."},
  ];

  function visual(p, small){
    var src = small ? (p.icon || p.img) : p.img;
    if (src) return '<span class="photo'+(p.bare ? " bare" : "")+'"><img src="'+src+'" alt="'+(small ? "" : p.alt)+'"></span>';
    // the thumbnail frame is square, so crop the mark's empty side margins
    var box = small ? "24 0 192 160" : "0 0 240 160";
    return '<svg class="mk" viewBox="'+box+'" aria-hidden="true">' + (MARKS[p.id] || "") + '</svg>';
  }

  /* ---------- work: a card per project, details in a dialog ---------- */
  var grid = document.getElementById("grid");
  grid.innerHTML = projects.map(function(p){
    return '<button class="pcard" type="button" data-id="'+p.id+'" '+
             'aria-haspopup="dialog" aria-label="'+p.name+' — open details">'+
      '<span class="pcard-art">'+ visual(p, true) +'</span>'+
      '<span class="pcard-body">'+
        '<span class="pcard-name">'+p.name+'</span>'+
        '<span class="mono">'+p.kind+'</span>'+
        '<span class="pcard-brief">'+p.brief+'</span>'+
      '</span>'+
      '<span class="pcard-foot">'+
        '<span class="chip" data-s="'+p.s+'"><i></i>'+p.status+'</span>'+
        '<span class="pcard-more">Details <span class="arw" aria-hidden="true">↗</span></span>'+
      '</span>'+
    '</button>';
  }).join("");

  var dlg = document.getElementById("detail");
  var el = {
    art:document.getElementById("dlgArt"),   fig:document.getElementById("dlgFig"),
    kind:document.getElementById("dlgKind"), name:document.getElementById("dlgName"),
    desc:document.getElementById("dlgDesc"), chip:document.getElementById("dlgChip"),
    status:document.getElementById("dlgStatus"),
    open:document.getElementById("dlgOpen"), openLabel:document.getElementById("dlgOpenLabel"),
    mark:document.getElementById("dlgMark"), plate:document.getElementById("dlgPlate"),
    body:document.getElementById("dlgBody"), zoom:document.getElementById("dlgZoom"),
    zoomImg:document.getElementById("dlgZoomImg"), zoomFrame:document.getElementById("dlgZoomFrame"),
    side:document.getElementById("dlgSide"), pts:document.getElementById("dlgPoints")
  };
  var lastCard = null, zoomSrc = null, zoomAlt = "";

  function setZoom(on){
    dlg.classList.toggle("zoom", on);
    el.zoom.hidden = !on;
    el.plate.hidden = on;
    el.body.hidden = on;
    if (on){
      if (el.zoomImg.getAttribute("src") !== zoomSrc){
        el.zoomImg.src = zoomSrc; el.zoomImg.alt = zoomAlt;
      }
      el.zoomFrame.focus();
    } else if (zoomSrc) {
      el.plate.focus();
    }
  }

  function openDetail(id, card){
    var p = projects.filter(function(x){ return x.id === id; })[0];
    if (!p) return;
    lastCard = card || null;
    el.art.innerHTML = visual(p, false);
    el.fig.textContent = p.fig;
    el.kind.textContent = p.kind;
    el.name.textContent = p.name;
    el.desc.textContent = p.desc;
    el.chip.setAttribute("data-s", p.s);
    el.status.textContent = p.status;
    if (p.url){
      el.open.href = p.url;
      el.openLabel.textContent = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
      el.open.setAttribute("aria-label", "Open " + p.name + " in a new tab");
      el.open.hidden = false;
    } else {
      el.open.hidden = true; el.open.removeAttribute("href");
    }
    var pts = p.points || [];
    el.pts.innerHTML = pts.map(function(x){ return "<li>" + x + "</li>"; }).join("");
    el.side.hidden = pts.length === 0;

    // the product's own mark, beside the name
    el.mark.innerHTML = p.icon ? visual(p, true) : "";
    el.mark.style.display = p.icon ? "" : "none";

    // a raster plate can be opened at its real resolution — the fitted
    // view shrinks a 1500px screenshot to about a third of its size
    zoomSrc = p.img && !/\.svg$/i.test(p.img) ? p.img : null;
    zoomAlt = p.alt || p.name;
    el.plate.classList.toggle("zoomable", !!zoomSrc);
    if (zoomSrc){
      el.plate.setAttribute("role", "button");
      el.plate.setAttribute("tabindex", "0");
      el.plate.setAttribute("aria-label", "View " + p.name + " at full size");
    } else {
      el.plate.removeAttribute("role");
      el.plate.removeAttribute("tabindex");
      el.plate.removeAttribute("aria-label");
    }
    setZoom(false);

    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  }

  // the plate opens the full-size view; clicking it again returns to the details
  el.plate.addEventListener("click", function(){ if (zoomSrc) setZoom(true); });
  el.zoomFrame.addEventListener("click", function(){ setZoom(false); });
  function onKey(fn){
    return function(e){
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); fn(); }
    };
  }
  el.plate.addEventListener("keydown", onKey(function(){ if (zoomSrc) setZoom(true); }));
  el.zoomFrame.addEventListener("keydown", onKey(function(){ setZoom(false); }));
  // Escape steps back out of the viewer before it closes the dialog
  dlg.addEventListener("cancel", function(e){
    if (dlg.classList.contains("zoom")){ e.preventDefault(); setZoom(false); }
  });

  grid.addEventListener("click", function(e){
    var c = e.target.closest(".pcard");
    if (c) openDetail(c.getAttribute("data-id"), c);
  });
  // clicking the backdrop closes it
  dlg.addEventListener("click", function(e){
    if (e.target === dlg) dlg.close();
  });
  dlg.addEventListener("close", function(){
    setZoom(false);
    if (lastCard) { lastCard.focus(); lastCard = null; }
  });

  /* ---------- reveal ---------- */
  if ("IntersectionObserver" in window && !reduce){
    var io = new IntersectionObserver(function(en){
      en.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, {rootMargin:"0px 0px -6% 0px", threshold:.06});
    Array.prototype.forEach.call(document.querySelectorAll(".rv"), function(n, i){
      n.style.transitionDelay = Math.min(i % 6, 5) * 50 + "ms"; io.observe(n);
    });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll(".rv"), function(n){ n.classList.add("in"); });
  }

  /* ---------- hero routing field ----------
     Orthogonal traces on the drafting grid — the circuit lines from the base
     of the 896 shield, drawn at page scale, with signals travelling them. */
  var cv = document.getElementById("field"), ctx = cv.getContext("2d");
  var W=0,H=0,DPR=1,routes=[],statics=null,raf=0,last=0;
  var TRACE="rgba(31,95,143,.22)", PAD="rgba(31,95,143,.34)", BLUE="#2F86C6", AMBER="#B4762A";

  function rnd(a,b){ return a + Math.random()*(b-a); }

  function build(){
    var cell = W < 760 ? 34 : 34;
    var cols = Math.ceil(W/cell), rowsN = Math.ceil(H/cell);
    var count = Math.round(Math.min(26, Math.max(10, (W*H)/48000)));
    routes = [];
    for (var i=0;i<count;i++){
      var pts = [[Math.floor(rnd(0,cols))*cell, Math.floor(rnd(0,rowsN))*cell]];
      var horiz = Math.random() < .5, steps = Math.floor(rnd(3,7));
      for (var s=0;s<steps;s++){
        var L = pts[pts.length-1];
        var len = Math.floor(rnd(2,7)) * cell * (Math.random()<.5?-1:1);
        var nx = horiz ? L[0]+len : L[0], ny = horiz ? L[1] : L[1]+len;
        nx = Math.max(-cell*2, Math.min(W+cell*2, nx));
        ny = Math.max(-cell*2, Math.min(H+cell*2, ny));
        if (nx!==L[0] || ny!==L[1]) pts.push([nx,ny]);
        horiz = !horiz;
      }
      if (pts.length < 2) continue;
      var segs=[], total=0;
      for (var k=1;k<pts.length;k++){
        var d = Math.abs(pts[k][0]-pts[k-1][0]) + Math.abs(pts[k][1]-pts[k-1][1]);
        segs.push({a:pts[k-1],b:pts[k],d:d,at:total}); total += d;
      }
      routes.push({pts:pts,segs:segs,total:total,t:rnd(0,total),sp:rnd(20,58),pad:Math.random()<.65});
    }
  }

  function paintStatic(){
    statics = document.createElement("canvas");
    statics.width = cv.width; statics.height = cv.height;
    var s = statics.getContext("2d");
    s.setTransform(DPR,0,0,DPR,0,0);
    s.lineWidth = 1; s.lineJoin = "round"; s.lineCap = "round"; s.strokeStyle = TRACE;
    routes.forEach(function(r){
      s.beginPath(); s.moveTo(r.pts[0][0], r.pts[0][1]);
      for (var i=1;i<r.pts.length;i++) s.lineTo(r.pts[i][0], r.pts[i][1]);
      s.stroke();
      if (r.pad){
        s.strokeStyle = PAD;
        var e = r.pts[r.pts.length-1];
        s.beginPath(); s.arc(e[0], e[1], 2.8, 0, Math.PI*2); s.stroke();
        s.fillStyle = PAD;
        s.beginPath(); s.arc(r.pts[0][0], r.pts[0][1], 1.8, 0, Math.PI*2); s.fill();
        s.strokeStyle = TRACE;
      }
    });
  }

  function at(r, dist){
    for (var i=0;i<r.segs.length;i++){
      var g = r.segs[i];
      if (dist <= g.at + g.d){
        var f = g.d ? (dist-g.at)/g.d : 0;
        return [g.a[0]+(g.b[0]-g.a[0])*f, g.a[1]+(g.b[1]-g.a[1])*f];
      }
    }
    var e = r.pts[r.pts.length-1]; return [e[0],e[1]];
  }

  function frame(dt){
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,cv.width,cv.height);
    if (statics) ctx.drawImage(statics,0,0);
    ctx.setTransform(DPR,0,0,DPR,0,0);
    ctx.lineCap = "round";
    routes.forEach(function(r,i){
      r.t = (r.t + r.sp*dt) % r.total;
      var head = at(r, r.t), tail = at(r, Math.max(0, r.t-24));
      var col = (i % 5 === 0) ? AMBER : BLUE;
      ctx.strokeStyle = col; ctx.lineWidth = 1.8; ctx.globalAlpha = .8;
      ctx.beginPath(); ctx.moveTo(tail[0],tail[1]); ctx.lineTo(head[0],head[1]); ctx.stroke();
      ctx.globalAlpha = 1; ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(head[0],head[1],2,0,Math.PI*2); ctx.fill();
    });
  }

  function resize(){
    var r = cv.parentElement.getBoundingClientRect();
    W = Math.max(320, r.width); H = Math.max(300, r.height);
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(W*DPR); cv.height = Math.round(H*DPR);
    cv.style.width = W+"px"; cv.style.height = H+"px";
    build(); paintStatic(); frame(0);
  }
  function loop(ts){
    var dt = last ? Math.min((ts-last)/1000, .05) : 0; last = ts;
    frame(dt); raf = requestAnimationFrame(loop);
  }
  resize();
  var rt; window.addEventListener("resize", function(){ clearTimeout(rt); rt = setTimeout(resize, 180); });
  if (!reduce) raf = requestAnimationFrame(loop);
  document.addEventListener("visibilitychange", function(){
    if (reduce) return;
    if (document.hidden){ cancelAnimationFrame(raf); raf = 0; last = 0; }
    else if (!raf) raf = requestAnimationFrame(loop);
  });
})();
