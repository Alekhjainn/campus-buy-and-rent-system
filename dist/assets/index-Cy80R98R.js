(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`all`,name:`All Categories`,icon:`spark`},{id:`Mobility`,name:`Mobility`,icon:`bike`,desc:`Bikes, scooters, skateboards, transit cards`},{id:`Study`,name:`Study & Lab`,icon:`book`,desc:`Textbooks, lab coats, calculators, notes`},{id:`Creative`,name:`Creative & Media`,icon:`camera`,desc:`Cameras, lenses, tripods, audio gear`},{id:`Home`,name:`Dorm & Living`,icon:`chair`,desc:`Chairs, desks, lamps, mini-fridges`},{id:`Tech`,name:`Tech & Gadgets`,icon:`laptop`,desc:`Laptops, monitors, headphones, chargers`}],t=[`Central Library - Ground Floor Service Desk`,`Student Union Hub - North Information Desk`,`Science Quad - Chemistry Hall Atrium`,`Engineering Building - Makerspace Lobby`,`East Campus Quad - Residence Hall A Desk`,`Arts & Design Annex - Gallery Lounge`],n={student:{id:`student`,key:`student`,role:`Student`,name:`Alex Morgan`,email:`alex.morgan@campus.edu`,password:`student123`,major:`B.Sc. Biology, Year 2`,avatar:`A`,tier:`Silver`,reputation:4.9,completedDeals:14,coins:65,campusId:`STU-94821`},faculty:{id:`faculty`,key:`faculty`,role:`Faculty`,name:`Dr. Sam Rivera`,email:`s.rivera@chemistry.campus.edu`,password:`faculty123`,major:`Department of Chemical Sciences (Faculty Moderator)`,avatar:`S`,tier:`Gold`,reputation:5,completedDeals:38,coins:140,campusId:`FAC-20391`},student2:{id:`student2`,key:`student2`,role:`Student`,name:`Maya Chen`,email:`maya.chen@campus.edu`,password:`student123`,major:`Computer Science, Year 3`,avatar:`M`,tier:`Gold`,reputation:4.95,completedDeals:26,coins:110,campusId:`STU-88210`}},r=[{id:`perk-coffee`,title:`Campus Cafe Artisanal Coffee / Matcha`,category:`Dining`,cost:30,desc:`Redeem for any medium specialty beverage at Campus Grind (Student Union or Library).`,icon:`coffee`},{id:`perk-print`,title:`50 Free Color Print / Plotter Credits`,category:`Academic`,cost:20,desc:`Instant balance top-up for Central Library & Lab high-res printing workstations.`,icon:`printer`},{id:`perk-studyroom`,title:`Library Private Study Pod Priority Pass`,category:`Facilities`,cost:25,desc:`Reserve acoustic study pod or multimedia group study room 7 days ahead.`,icon:`clock`},{id:`perk-makerspace`,title:`Makerspace 3D Print Filament Credit (250g)`,category:`Engineering`,cost:45,desc:`Valid for high-grade PLA/PETG rapid prototyping at the Engineering Makerspace.`,icon:`box`},{id:`perk-bike`,title:`Campus Bike Hub Full Tune-Up Service`,category:`Mobility`,cost:55,desc:`Comprehensive safety check, gear indexing, brake pad alignment & chain lubrication.`,icon:`wrench`}],i=[{id:1,title:`Ridgeback Commuter City Bike`,desc:`Reliable 7-speed commuter with rear cargo rack, front LED light, and kryptonite U-lock included.`,details:`Recently serviced at the Campus Bike Hub. New puncture-resistant tires. Perfect for commuting between North & South campuses.`,cat:`Mobility`,type:`rent`,price:12,deposit:20,location:`Central Library - Ground Floor Service Desk`,condition:`Excellent`,seller:`Maya Chen`,sellerId:`student2`,tier:`Gold`,rating:4.9,reviewsCount:16,icon:`bike`,status:`live`,owner:`student2`,createdAt:`2026-10-01`},{id:2,title:`TI-84 Plus CE Color Graphing Calculator`,desc:`Exam-approved, backlit color screen with USB charging cable and protective slide cover.`,details:`Cleared for AP, SAT, Calculus and Linear Algebra midterm exams. Holds charge for 2+ weeks.`,cat:`Study`,type:`rent`,price:5,deposit:15,location:`Science Quad - Chemistry Hall Atrium`,condition:`Like New`,seller:`Alex Morgan`,sellerId:`student`,tier:`Silver`,rating:5,reviewsCount:8,icon:`calc`,status:`live`,owner:`student`,createdAt:`2026-10-02`},{id:3,title:`Sony Alpha Mirrorless Camera + 50mm Lens Kit`,desc:`Perfect 4K kit for media assignments, film festivals, and weekend campus projects.`,details:`Includes two batteries, 128GB high-speed SD card, peak design neck strap, and protective padded bag.`,cat:`Creative`,type:`rent`,price:28,deposit:50,location:`Arts & Design Annex - Gallery Lounge`,condition:`Excellent`,seller:`Maya Chen`,sellerId:`student2`,tier:`Gold`,rating:4.95,reviewsCount:22,icon:`camera`,status:`live`,owner:`student2`,createdAt:`2026-10-03`},{id:4,title:`Ergonomic High-Back Mesh Study Chair`,desc:`Breathable lumbar-support desk chair with adjustable armrests and smooth caster wheels.`,details:`Selling as I am moving into a furnished apartment next term. Extremely clean and supportive for long study sessions.`,cat:`Home`,type:`buy`,price:45,deposit:0,location:`East Campus Quad - Residence Hall A Desk`,condition:`Good`,seller:`Dr. Sam Rivera`,sellerId:`faculty`,tier:`Gold`,rating:5,reviewsCount:31,icon:`chair`,status:`live`,owner:`faculty`,createdAt:`2026-10-04`},{id:5,title:`Flame-Resistant White Lab Coat (Medium) + Goggles`,desc:`Autoclaved, freshly washed 100% cotton lab coat meeting all campus chemistry lab specs.`,details:`Includes splash-proof ANSI-certified chemical goggles. Ready for Organic Chemistry & Biochem labs.`,cat:`Study`,type:`rent`,price:6,deposit:10,location:`Science Quad - Chemistry Hall Atrium`,condition:`Like New`,seller:`Campus Collective`,sellerId:`collective`,tier:`Gold`,rating:4.85,reviewsCount:42,icon:`coat`,status:`live`,owner:null,createdAt:`2026-10-05`},{id:6,title:`Apple iPad Air (M1) with Apple Pencil 2`,desc:`64GB Wi-Fi model with matte paper-feel screen protector. Ideal for digital note-taking & PDF reading.`,details:`Pre-loaded with GoodNotes and Procreate. Comes with magnetic smart folio cover and USB-C charger.`,cat:`Tech`,type:`rent`,price:18,deposit:35,location:`Student Union Hub - North Information Desk`,condition:`Like New`,seller:`Maya Chen`,sellerId:`student2`,tier:`Gold`,rating:4.98,reviewsCount:19,icon:`laptop`,status:`live`,owner:`student2`,createdAt:`2026-10-06`},{id:7,title:`Blue Yeti USB Condenser Microphone`,desc:`Tri-capsule broadcast microphone with desktop shock stand and pop filter for podcasts & interviews.`,details:`Plug-and-play USB connection for Mac/PC. Headphone zero-latency monitoring port. Perfect for voiceover and remote presentations.`,cat:`Creative`,type:`rent`,price:9,deposit:20,location:`Arts & Design Annex - Gallery Lounge`,condition:`Excellent`,seller:`Alex Morgan`,sellerId:`student`,tier:`Silver`,rating:4.88,reviewsCount:11,icon:`mic`,status:`live`,owner:`student`,createdAt:`2026-10-06`},{id:8,title:`Segway Ninebot KickScooter Max (Foldable)`,desc:`350W motor with 40-mile range. Front shock absorption, integrated headlight & combination lock.`,details:`Great for zooming between the engineering campus and off-campus student housing. Charger included.`,cat:`Mobility`,type:`rent`,price:16,deposit:30,location:`Engineering Building - Makerspace Lobby`,condition:`Good`,seller:`Campus Collective`,sellerId:`collective`,tier:`Gold`,rating:4.92,reviewsCount:29,icon:`scooter`,status:`live`,owner:null,createdAt:`2026-10-07`},{id:9,title:`Compact Dorm Mini Refrigerator with Freezer Compartment`,desc:`Low-noise 3.2 cu. ft. double door mini fridge with separate freezer tray and thermostat dial.`,details:`Energy Star certified. Cleaned and defrosted. Must be picked up directly at Residence Hall A desk.`,cat:`Home`,type:`buy`,price:68,deposit:0,location:`East Campus Quad - Residence Hall A Desk`,condition:`Good`,seller:`Dr. Sam Rivera`,sellerId:`faculty`,tier:`Gold`,rating:5,reviewsCount:18,icon:`fridge`,status:`live`,owner:`faculty`,createdAt:`2026-10-07`},{id:10,title:`Arduino & Raspberry Pi 4 Sensor Suite`,desc:`Complete STEM lab kit with breadboards, ultrasonic sensors, motors, relays, and jumper cables.`,details:`Ideal for IoT coursework, Capstone engineering projects, and robotics hackathons.`,cat:`Tech`,type:`buy`,price:38,deposit:0,location:`Engineering Building - Makerspace Lobby`,condition:`Like New`,seller:`Maya Chen`,sellerId:`student2`,tier:`Gold`,rating:4.9,reviewsCount:7,icon:`cpu`,status:`live`,owner:`student2`,createdAt:`2026-10-07`},{id:11,title:`Campbell Biology 12th Global Edition`,desc:`Hardcover textbook with clean highlighted key definitions and chapter review mind maps.`,details:`Required text for General Biology I & II. Saves over $140 compared to the campus bookstore.`,cat:`Study`,type:`buy`,price:32,deposit:0,location:`Central Library - Ground Floor Service Desk`,condition:`Good`,seller:`Alex Morgan`,sellerId:`student`,tier:`Silver`,rating:5,reviewsCount:4,icon:`book`,status:`pending`,owner:`student`,createdAt:`2026-10-08`}],a=[{id:`ORD-101`,user:`student`,itemId:1,title:`Ridgeback Commuter City Bike`,cat:`Mobility`,type:`rent`,days:3,dailyPrice:12,deposit:20,totalPaid:32.4,discountFromCoins:3.6,coinsUsed:36,coinsEarned:32,seller:`Maya Chen`,location:`Central Library - Ground Floor Service Desk`,pickupPass:`PASS-8392`,status:`active_rental`,date:`2026-10-07T09:30:00Z`,returnDueDate:`2026-10-10T18:00:00Z`},{id:`ORD-102`,user:`faculty`,itemId:7,title:`Blue Yeti USB Condenser Microphone`,cat:`Creative`,type:`rent`,days:2,dailyPrice:9,deposit:20,totalPaid:18,discountFromCoins:0,coinsUsed:0,coinsEarned:18,seller:`Alex Morgan`,location:`Arts & Design Annex - Gallery Lounge`,pickupPass:`PASS-4412`,status:`completed`,date:`2026-10-04T14:15:00Z`,returnDueDate:`2026-10-06T17:00:00Z`}],o={"ORD-101":[{sender:`Alex Morgan`,role:`renter`,time:`Yesterday 10:05 AM`,text:`Hey Maya! I reserved the bike for my lab commute. Will you be at the library around 11?`},{sender:`Maya Chen`,role:`seller`,time:`Yesterday 10:12 AM`,text:`Yes Alex! I will leave it locked with the service desk librarian. Your code is PASS-8392.`}]},s=`campusloop_state_v2`,c=`loop-campus-v1`,l=new class{constructor(){this.listeners=new Set,this.state=this.loadInitialState()}loadInitialState(){let e={theme:`system`,session:`student`,users:{...n},items:[...i],orders:[...a],messages:{...o},perks:[...r],redeemedPerks:[],nextItemId:12,ui:{view:`market`,profileTab:`orders`,searchQuery:``,selectedCategory:`all`,selectedType:`all`,selectedSort:`recommended`,activeModal:null,toasts:[]}};try{let t=localStorage.getItem(s);if(t){let n=JSON.parse(t);return{...e,...n,ui:{...e.ui,...n.ui,activeModal:null,toasts:[]}}}let n=localStorage.getItem(c);if(n){let t=JSON.parse(n);t&&t.items&&(e.items=[...t.items,...e.items.slice(5)])}}catch(e){console.warn(`Could not restore stored state, using defaults:`,e)}return e}save(){try{let{ui:e,...t}=this.state;localStorage.setItem(s,JSON.stringify(t))}catch(e){console.error(`Storage save error:`,e)}}getState(){return this.state}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.save();for(let e of this.listeners)e(this.state)}getCurrentUser(){return this.state.session&&this.state.users[this.state.session]||null}switchUser(e){this.state.users[e]&&(this.state.session=e,this.addToast(`Switched account to ${this.state.users[e].name} (${this.state.users[e].role})`,`success`),this.notify())}login(e,t,n){let r=Object.values(this.state.users).find(n=>n.email.toLowerCase()===e.toLowerCase().trim()&&n.password===t);return r?(this.state.session=r.key,this.closeModal(),this.addToast(`Welcome back, ${r.name}!`,`success`),this.notify(),{success:!0}):{success:!1,message:`Invalid email or password for demo account.`}}logout(){this.state.session=null,this.state.ui.view=`market`,this.addToast(`Signed out successfully.`,`info`),this.notify()}setTheme(e){this.state.theme=e,this.notify()}toggleTheme(){let e=this.state.theme,t=`light`;t=e===`light`?`dark`:e===`dark`?`system`:`light`,this.setTheme(t)}setView(e,t=`orders`){this.state.ui.view=e,e===`profile`&&(this.state.ui.profileTab=t),this.notify()}setProfileTab(e){this.state.ui.profileTab=e,this.notify()}setSearch(e){this.state.ui.searchQuery=e,this.notify()}setCategory(e){this.state.ui.selectedCategory=e,this.notify()}setType(e){this.state.ui.selectedType=e,this.notify()}setSort(e){this.state.ui.selectedSort=e,this.notify()}openModal(e,t={}){this.state.ui.activeModal={name:e,data:t},this.notify()}closeModal(){this.state.ui.activeModal=null,this.notify()}listItem(e){let t=this.getCurrentUser();if(!t){this.openModal(`login`,{note:`Please sign in to list an item.`});return}let n=t.role===`Faculty`,r={id:this.state.nextItemId++,title:e.title.trim(),desc:e.desc.trim(),details:e.details?.trim()||e.desc.trim(),cat:e.cat,type:e.type,price:parseFloat(e.price),deposit:parseFloat(e.deposit)||0,location:e.location||`Central Library - Ground Floor Service Desk`,condition:e.condition||`Good`,seller:t.name,sellerId:t.key,tier:t.tier,rating:t.reputation,reviewsCount:t.completedDeals,icon:e.icon||`box`,status:n?`live`:`pending`,owner:t.key,createdAt:new Date().toISOString()};this.state.items.unshift(r),this.closeModal(),n?this.addToast(`Listing "${r.title}" is now live on campus!`,`success`):this.addToast(`Listing submitted! A faculty member will review it shortly before it goes live.`,`info`),this.notify()}approveListing(e){let t=this.state.items.find(t=>t.id===e);t&&(t.status=`live`,this.addToast(`Approved "${t.title}". It is now published in the marketplace.`,`success`),this.notify())}rejectListing(e,t=``){let n=this.state.items.find(t=>t.id===e);n&&(this.state.items=this.state.items.filter(t=>t.id!==e),this.addToast(`Listing "${n.title}" was rejected and removed.`,`warning`),this.notify())}withdrawListing(e){let t=this.state.items.find(t=>t.id===e);t&&(this.state.items=this.state.items.filter(t=>t.id!==e),this.addToast(`Listing "${t.title}" has been withdrawn.`,`info`),this.notify())}checkout(e,t){let n=this.getCurrentUser();if(!n){this.openModal(`login`,{note:`Please sign in to complete checkout.`});return}let{days:r=1,useCoins:i=!1}=t,a=e.type===`rent`?e.price*r:e.price,o=n.coins||0,s=0,c=0;if(i&&o>0){let e=Math.floor(a*10);s=Math.min(o,e),c=Math.round(s/10*100)/100}let l=Math.max(0,a-c),u=e.type===`rent`&&e.deposit||0,d=Math.round((l+u)*100)/100,f=Math.floor(l);n.coins=o-s+f,n.completedDeals=(n.completedDeals||0)+1;let p=`PASS-`+Math.floor(1e3+Math.random()*9e3),m=new Date,h=new Date;h.setDate(m.getDate()+r);let g={id:`ORD-`+Math.floor(1e4+Math.random()*9e4),user:n.key,itemId:e.id,title:e.title,cat:e.cat,type:e.type,days:r,dailyPrice:e.price,deposit:u,totalPaid:d,discountFromCoins:c,coinsUsed:s,coinsEarned:f,seller:e.seller,sellerId:e.sellerId,location:e.location,pickupPass:p,status:e.type===`rent`?`active_rental`:`completed`,date:m.toISOString(),returnDueDate:e.type===`rent`?h.toISOString():null};this.state.orders.unshift(g),this.state.messages[g.id]=[{sender:`System Notice`,role:`system`,time:`Just now`,text:`Order ${g.id} confirmed! Pickup pass is ${g.pickupPass}. Collect at ${g.location}.`}],this.closeModal(),this.openModal(`orderSuccess`,{order:g,item:e}),this.addToast(`Order confirmed! You earned +${f} campus coins.`,`success`),this.notify()}updateRentalStatus(e,t){let n=this.state.orders.find(t=>t.id===e);n&&(n.status=t,t===`picked_up`?this.addToast(`Item marked as picked up! Return due by ${new Date(n.returnDueDate).toLocaleDateString()}.`,`info`):t===`completed`&&this.addToast(`Rental completed & returned in good condition. Deposit $${n.deposit} refunded!`,`success`),this.notify())}redeemPerk(e){let t=this.getCurrentUser();if(!t){this.openModal(`login`,{note:`Sign in to redeem perks.`});return}let n=this.state.perks.find(t=>t.id===e);if(!n)return;if(t.coins<n.cost){this.addToast(`Not enough coins. You need ${n.cost} coins (current: ${t.coins}).`,`error`);return}t.coins-=n.cost;let r=`VCH-`+Math.random().toString(36).substring(2,7).toUpperCase(),i={id:`RED-`+Date.now(),userId:t.key,perkId:n.id,title:n.title,cost:n.cost,voucherCode:r,date:new Date().toISOString()};this.state.redeemedPerks.unshift(i),this.addToast(`Redeemed "${n.title}"! Voucher code: ${r}`,`success`),this.notify()}sendChatMessage(e,t){let n=this.getCurrentUser();if(!n||!t.trim())return;this.state.messages[e]||(this.state.messages[e]=[]);let r={sender:n.name,role:n.role.toLowerCase(),time:`Just now`,text:t.trim()};this.state.messages[e].push(r),this.notify()}addToast(e,t=`info`){let n=Date.now()+Math.random();this.state.ui.toasts.push({id:n,message:e,type:t}),this.notify(),setTimeout(()=>{this.removeToast(n)},4e3)}removeToast(e){this.state.ui.toasts=this.state.ui.toasts.filter(t=>t.id!==e),this.notify()}},u={mark:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>`,spark:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,coin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 7v4"/><path d="M15 13v4"/></svg>`,search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,arrowRight:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,chevronDown:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,moon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,location:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,shieldCheck:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,chat:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,qr:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"/></svg>`,sliders:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,gift:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,coffee:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,printer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,box:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,wrench:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,star:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,leaf:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,bike:`<circle cx="26" cy="66" r="16"/><circle cx="70" cy="66" r="16"/><path d="M26 66 42 38h20l10 28M42 38l10 28M62 38l4-8h8M36 30h12"/>`,calc:`<rect x="24" y="12" width="48" height="72" rx="6"/><rect x="32" y="20" width="32" height="14" rx="2"/><circle cx="36" cy="46" r="3.5" fill="currentColor"/><circle cx="48" cy="46" r="3.5" fill="currentColor"/><circle cx="60" cy="46" r="3.5" fill="currentColor"/><circle cx="36" cy="58" r="3.5" fill="currentColor"/><circle cx="48" cy="58" r="3.5" fill="currentColor"/><circle cx="60" cy="58" r="3.5" fill="currentColor"/><circle cx="36" cy="70" r="3.5" fill="currentColor"/><circle cx="48" cy="70" r="3.5" fill="currentColor"/><circle cx="60" cy="70" r="3.5" fill="currentColor"/>`,camera:`<rect x="12" y="28" width="72" height="50" rx="8"/><circle cx="48" cy="53" r="15"/><path d="m34 28 6-10h16l6 10"/>`,chair:`<path d="M32 14h32v34H32zM26 50h44v10H26zM32 60v22M64 60v22"/>`,coat:`<path d="M34 14 18 26 10 44l14 6 4-6v38h40V44l4 6 14-6-8-18-16-12-14 20z"/>`,book:`<path d="M16 20h26q6 0 6 6v52q-4-4-10-4H16zM80 20H54q-6 0-6 6v52q4-4 10-4h22z"/>`,laptop:`<rect x="18" y="22" width="60" height="40" rx="4"/><path d="M10 74h76"/>`,mic:`<rect x="36" y="16" width="24" height="42" rx="12"/><path d="M26 44a22 22 0 0 0 44 0M48 66v16M36 82h24"/>`,scooter:`<circle cx="22" cy="72" r="12"/><circle cx="74" cy="72" r="12"/><path d="M22 72h52M28 72 44 26l-8-6M44 26h10"/>`,fridge:`<rect x="26" y="12" width="44" height="72" rx="4"/><line x1="26" y1="36" x2="70" y2="36"/><line x1="32" y1="24" x2="32" y2="28"/><line x1="32" y1="46" x2="32" y2="56"/>`,cpu:`<rect x="24" y="24" width="48" height="48" rx="6"/><rect x="36" y="36" width="24" height="24" rx="2"/><path d="M32 12v12M48 12v12M64 12v12M32 72v12M48 72v12M64 72v12M12 32h12M12 48h12M12 64h12M72 32h12M72 48h12M72 64h12"/>`};function d(e,t=``,n=`0 0 24 24`){let r=u[e]||u.mark;return[`bike`,`calc`,`camera`,`chair`,`coat`,`book`,`laptop`,`mic`,`scooter`,`fridge`,`cpu`].includes(e)?`<svg class="${t}" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>`:`<svg class="${t}" viewBox="${n}" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>`}function f(e){let t=l.getCurrentUser(),n=e.ui.view,r=e.items.filter(e=>e.status===`pending`).length,i=t?.role===`Faculty`,a=e.theme;return`
    <!-- Fast Demo Account Switcher Strip -->
    <div class="demo-bar">
      <div class="wrap demo-bar-in">
        <div class="demo-left">
          <span class="demo-badge">Active Role</span>
          <span>${t?`${t.name} (${t.role})`:`Guest`}</span>
        </div>
        <div class="demo-switcher">
          <span style="font-size:0.75rem; color:var(--muted); margin-right:4px;">Switch Demo Persona:</span>
          <button class="demo-user-btn ${t?.key===`student`?`active`:``}" data-action="switch-user" data-user="student">
            Alex Morgan (Student)
          </button>
          <button class="demo-user-btn ${t?.key===`faculty`?`active`:``}" data-action="switch-user" data-user="faculty">
            Dr. Sam Rivera (Faculty Reviewer)
          </button>
          <button class="demo-user-btn ${t?.key===`student2`?`active`:``}" data-action="switch-user" data-user="student2">
            Maya Chen (Senior Student)
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="header">
      <div class="wrap header-in">
        <button class="brand" data-action="nav" data-view="market" aria-label="CampusLoop Home">
          <span class="brand-mark">${d(`mark`)}</span>
          <span>Loop<span class="dot">.</span><span class="campus">campus</span></span>
        </button>

        <nav class="nav" aria-label="Primary Navigation">
          <button class="nav-link ${n===`market`?`active`:``}" data-action="nav" data-view="market">
            Marketplace
          </button>
          <button class="nav-link ${n===`perks`?`active`:``}" data-action="nav" data-view="perks">
            Campus Perks Store
          </button>
          <button class="nav-link ${n===`profile`?`active`:``}" data-action="nav" data-view="profile">
            My Dashboard
            ${i&&r>0?`<span class="nav-badge" title="${r} listings awaiting review">${r} review</span>`:``}
          </button>
        </nav>

        <div class="header-right">
          ${t?`
            <button class="coins-badge" data-action="nav" data-view="perks" title="Your Campus Coins balance (10 coins = $1 discount)">
              ${d(`coin`)}
              <span>${t.coins||0} coins</span>
            </button>
          `:``}

          <button class="btn btn-sm btn-lime" data-action="open-list-modal">
            ${d(`plus`)} List an Item
          </button>

          <button class="theme-btn" data-action="toggle-theme" title="Toggle Light / Dark mode" aria-label="Toggle Theme">
            ${d(a===`dark`?`sun`:`moon`)}
          </button>

          ${t?`
            <button class="user-avatar-btn" data-action="nav" data-view="profile" title="${t.name} (${t.role})">
              ${t.avatar}
            </button>
          `:`
            <button class="btn btn-sm btn-ghost" data-action="open-login-modal">Sign in</button>
          `}
        </div>
      </div>
    </header>
  `}function p(e){let t=e.items.filter(e=>e.status===`live`).length,n=e.orders.length;return`
    <section class="hero">
      <div class="wrap">
        <div class="hero-eyebrow">
          <i></i> The Official Campus Circular Economy
        </div>
        <h1 class="display-title">
          Good things,
          <span>keep moving.</span>
        </h1>

        <div class="hero-meta-row">
          <p class="hero-lead">
            A trusted peer-to-peer ecosystem for students and faculty to borrow, rent, and pass on textbooks, tech, and dorm essentials with zero waste.
          </p>

          <div class="hero-stats-banner">
            <div class="h-stat-item">
              <span class="h-stat-num">${t}</span>
              <span class="h-stat-label">Active Items</span>
            </div>
            <div class="h-stat-item">
              <span class="h-stat-num">${Object.values(e.users).reduce((e,t)=>e+(t.coins||0),0)}</span>
              <span class="h-stat-label">Coins Circulating</span>
            </div>
            <div class="h-stat-item">
              <span class="h-stat-num">${Math.round(t*4.2+n*8.6)} kg</span>
              <span class="h-stat-label">Est. CO₂ Diverted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function m(t){let{searchQuery:n,selectedCategory:r,selectedType:i,selectedSort:a}=t.ui;return`
    <div class="filters-section">
      <div class="wrap">
        <div class="filters-row">
          <div class="search-bar">
            ${d(`search`)}
            <input 
              id="search-input" 
              type="search" 
              placeholder="Search items, textbooks, equipment, sellers..." 
              value="${n.replace(/"/g,`&quot;`)}"
              autocomplete="off"
            />
            ${n?`
              <button class="search-clear-btn" data-action="clear-search" title="Clear search">
                ${d(`close`)}
              </button>
            `:``}
          </div>

          <div class="filter-controls">
            <div class="type-toggle" role="group" aria-label="Transaction Type">
              <button class="type-toggle-btn ${i===`all`?`active`:``}" data-action="set-type" data-type="all">All</button>
              <button class="type-toggle-btn ${i===`rent`?`active`:``}" data-action="set-type" data-type="rent">Rent</button>
              <button class="type-toggle-btn ${i===`buy`?`active`:``}" data-action="set-type" data-type="buy">Buy</button>
            </div>

            <div class="custom-select">
              <select id="sort-select" data-action="set-sort">
                <option value="recommended" ${a===`recommended`?`selected`:``}>Recommended</option>
                <option value="price-asc" ${a===`price-asc`?`selected`:``}>Price: Low to High</option>
                <option value="price-desc" ${a===`price-desc`?`selected`:``}>Price: High to Low</option>
                <option value="rating" ${a===`rating`?`selected`:``}>Highest Rated Sellers</option>
              </select>
              ${d(`chevronDown`)}
            </div>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="category-pills">
          ${e.map(e=>`
              <button class="cat-pill ${r===e.id?`active`:``}" data-action="set-category" data-cat="${e.id}">
                ${d(e.icon)}
                <span>${e.name}</span>
              </button>
            `).join(``)}
        </div>
      </div>
    </div>
  `}function h(e){let t=l.getCurrentUser(),n=t&&e.owner===t.key,r=e.status===`pending`,i;i=r?`<span class="pending-review-chip" style="position:static;">Pending Moderation</span>`:n?`<button class="btn btn-sm btn-ghost" disabled>Your item</button>`:`
      <button class="btn btn-sm" data-action="open-checkout-modal" data-id="${e.id}">
        ${e.type===`rent`?`Rent`:`Buy`} ${d(`arrowRight`)}
      </button>
    `;let a=e.cat.toLowerCase();return`
    <article class="card" data-item-id="${e.id}">
      <div 
        class="card-thumb" 
        style="background: var(--t-${a}); cursor: pointer;" 
        data-action="open-detail-modal" 
        data-id="${e.id}"
        title="View ${e.title} details"
      >
        <span 
          class="badge-tag" 
          style="background: var(--surface); color: var(--t-${a}-ink);"
        >
          ${e.cat}
        </span>

        ${e.condition?`
          <span class="condition-pill">${e.condition}</span>
        `:``}

        ${r?`
          <span class="pending-review-chip">Pending review</span>
        `:``}

        ${d(e.icon||`box`)}
      </div>

      <div class="card-body">
        <div class="card-type-row">
          <span class="type-label">${e.type===`rent`?`Rent`:`Buy`}</span>
          ${e.type===`rent`?`<span class="unit-label">per day</span>`:`<span class="unit-label">to own</span>`}
        </div>

        <h3 
          class="card-title" 
          style="cursor: pointer;" 
          data-action="open-detail-modal" 
          data-id="${e.id}"
        >
          ${g(e.title)}
        </h3>

        <p class="card-desc">${g(e.desc)}</p>

        <div class="location-snippet" title="Pickup spot">
          ${d(`location`)}
          <span>${g(e.location||`Campus Center`)}</span>
        </div>

        <div class="seller-row">
          <span class="seller-avatar">${g(e.seller.charAt(0))}</span>
          <span style="display:flex; flex-direction:column;">
            <span>${g(e.seller)}</span>
            <span style="font-size:0.75rem; color:var(--muted);">${e.rating?`${e.rating} ★ (${e.reviewsCount||5})`:`Verified Peer`}</span>
          </span>
          <span class="tier-badge ${e.tier}">${e.tier}</span>
        </div>

        <div class="price-action-row">
          <div class="price-block">
            <span class="price-value">$${e.price}</span>
            <span class="price-sub">
              ${e.type===`rent`?`per day + $`+(e.deposit||0)+` dep.`:`one-time purchase`}
            </span>
          </div>

          <div style="display:flex; gap:6px; align-items:center;">
            <button class="btn btn-sm btn-ghost" data-action="open-detail-modal" data-id="${e.id}" title="Quick view">
              Details
            </button>
            ${i}
          </div>
        </div>
      </div>
    </article>
  `}function g(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`):``}function _(e){let t=l.getCurrentUser(),{searchQuery:n,selectedCategory:r,selectedType:i,selectedSort:a}=e.ui,o=e.items.filter(e=>{if(!(e.status===`live`||t&&e.owner===t.key||t&&t.role===`Faculty`)||r!==`all`&&e.cat!==r||i!==`all`&&e.type!==i)return!1;if(n.trim()){let t=n.toLowerCase().trim();if(!((e.title||``).toLowerCase().includes(t)||(e.desc||``).toLowerCase().includes(t)||(e.cat||``).toLowerCase().includes(t)||(e.seller||``).toLowerCase().includes(t)||(e.location||``).toLowerCase().includes(t)))return!1}return!0});return o.sort((e,t)=>a===`price-asc`?e.price-t.price:a===`price-desc`?t.price-e.price:a===`rating`?(t.rating||0)-(e.rating||0):t.id-e.id),`
    <main>
      ${p(e)}
      ${m(e)}

      <div class="wrap">
        <div class="section-meta-header">
          <div>
            <div class="sec-kicker">Campus Circular Listings</div>
            <h2 class="sec-title">
              ${r===`all`?`All Campus Essentials`:`${r} Gear`}
            </h2>
          </div>
          <span class="items-count">${o.length} items available</span>
        </div>

        <section class="cards-grid" aria-label="Campus Listings">
          ${o.length>0?o.map(h).join(``):`
              <div class="empty-state">
                <h3>No items match your criteria</h3>
                <p>Try resetting the search terms or choosing a different category.</p>
                <button class="btn btn-sm btn-ghost" data-action="reset-filters">
                  Reset All Filters
                </button>
              </div>
            `}
        </section>
      </div>
    </main>
  `}function v(e){let t=l.getCurrentUser();if(!t)return`
      <main class="wrap" style="padding: 96px 0; text-align: center;">
        <h2 style="font-size: 2.2rem; margin-bottom: 8px;">Sign in to your Campus Account</h2>
        <p style="color: var(--muted); margin-bottom: 24px;">
          Access your coin wallet, active rentals, pickup passes, and listing reviews.
        </p>
        <button class="btn btn-lime btn-lg" data-action="open-login-modal">
          Sign In / Select Demo Profile
        </button>
      </main>
    `;let n=t.role===`Faculty`,r=e.ui.profileTab||`orders`,i=e.orders.filter(e=>e.user===t.key),a=e.items.filter(e=>e.owner===t.key),o=e.items.filter(e=>e.status===`pending`),s=e.redeemedPerks.filter(e=>e.userId===t.key);return`
    <main class="wrap profile-section">
      <!-- Profile Hero Card -->
      <div class="profile-hero-card">
        <div class="profile-avatar-large">
          ${t.avatar}
        </div>

        <div class="profile-identity">
          <h1>${C(t.name)}</h1>
          <div class="profile-badges">
            <span class="profile-role-tag">${t.role}</span>
            <span class="tier-badge ${t.tier}">${t.tier} Tier</span>
            <span class="profile-id-tag">${t.campusId}</span>
          </div>
          <div class="profile-meta-text">
            ${C(t.major)} &bull; ${C(t.email)}
          </div>
        </div>

        <div class="profile-stats-grid">
          <div class="p-stat">
            <span class="p-stat-val" style="color: var(--coin);">${t.coins||0}</span>
            <span class="p-stat-lbl">Campus Coins</span>
          </div>
          <div class="p-stat">
            <span class="p-stat-val">${i.length}</span>
            <span class="p-stat-lbl">Orders</span>
          </div>
          <div class="p-stat">
            <span class="p-stat-val">${a.length}</span>
            <span class="p-stat-lbl">My Listings</span>
          </div>
          <div class="p-stat">
            <span class="p-stat-val">${t.reputation} ★</span>
            <span class="p-stat-lbl">Trust Score</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="profile-tabs-nav" aria-label="Dashboard sections">
        <button 
          class="p-tab-btn ${r===`orders`?`active`:``}" 
          data-action="set-profile-tab" 
          data-tab="orders"
        >
          My Orders &amp; Rentals (${i.length})
        </button>

        <button 
          class="p-tab-btn ${r===`listings`?`active`:``}" 
          data-action="set-profile-tab" 
          data-tab="listings"
        >
          My Listings (${a.length})
        </button>

        <button 
          class="p-tab-btn ${r===`wallet`?`active`:``}" 
          data-action="set-profile-tab" 
          data-tab="wallet"
        >
          Coin Rewards &amp; Perks
        </button>

        ${n?`
          <button 
            class="p-tab-btn ${r===`queue`?`active`:``}" 
            data-action="set-profile-tab" 
            data-tab="queue"
          >
            Review Queue
            ${o.length>0?`<span class="nav-badge">${o.length}</span>`:``}
          </button>
        `:``}
      </nav>

      <!-- Tab Content Panels -->
      ${r===`orders`?y(i):``}
      ${r===`listings`?b(a):``}
      ${r===`wallet`?x(t,s,e.perks):``}
      ${r===`queue`&&n?S(o):``}
    </main>
  `}function y(e){return e.length?`
    <div class="table-card">
      ${e.map(e=>{let t=e.type===`rent`,n=e.status===`active_rental`;return`
          <div class="profile-item-row">
            <div class="p-row-grow">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="p-row-title">${C(e.title)}</span>
                <span class="order-pass-pill" title="Pickup verification code">${e.pickupPass}</span>
              </div>
              <div class="p-row-sub">
                ${t?`Rented for ${e.days} days &bull; `:`Purchased &bull; `}
                Seller: ${C(e.seller)} &bull; Station: ${C(e.location)}
              </div>
              ${e.returnDueDate&&n?`
                <div style="font-size: 0.75rem; color: var(--orange); margin-top: 4px; font-weight: 600;">
                  Due back: ${new Date(e.returnDueDate).toLocaleDateString()}
                </div>
              `:``}
            </div>

            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
              <span style="font-weight: 700; color: var(--ink);">$${e.totalPaid.toFixed(2)}</span>
              <span style="font-family: var(--mono); font-size: 0.75rem; color: var(--coin);">
                +${e.coinsEarned} coins
              </span>
            </div>

            <div style="display: flex; gap: 8px; align-items: center;">
              <button 
                class="btn btn-sm btn-ghost" 
                data-action="open-chat-modal" 
                data-order-id="${e.id}" 
                title="Chat with peer"
              >
                ${d(`chat`)} Message
              </button>

              ${n?`
                <button 
                  class="btn btn-sm btn-lime" 
                  data-action="return-rental" 
                  data-order-id="${e.id}"
                >
                  Return Item
                </button>
              `:`
                <span class="tier-badge Silver">Completed</span>
              `}
            </div>
          </div>
        `}).join(``)}
    </div>
  `:`
      <div class="table-card" style="padding: 48px 24px; text-align: center; color: var(--muted);">
        <h3 style="color: var(--ink); margin: 0 0 6px;">No orders or rentals yet</h3>
        <p>Explore the circular marketplace to rent equipment or purchase pre-loved textbooks.</p>
        <button class="btn btn-sm btn-lime" data-action="nav" data-view="market" style="margin-top: 12px;">
          Browse Marketplace
        </button>
      </div>
    `}function b(e){return e.length?`
    <div class="table-card">
      ${e.map(e=>`
        <div class="profile-item-row">
          <div class="p-row-grow">
            <div class="p-row-title">${C(e.title)}</div>
            <div class="p-row-sub">
              ${e.cat} &bull; $${e.price} ${e.type===`rent`?`/ day`:`sale`} &bull; ${e.condition}
            </div>
          </div>

          <div>
            ${e.status===`live`?`<span class="tier-badge Gold" style="background:var(--green-light); color:var(--green-text);">Live</span>`:`<span class="tier-badge" style="background:var(--gold-bg); color:var(--gold-ink);">Pending Review</span>`}
          </div>

          <div>
            <button class="btn btn-sm btn-danger" data-action="withdraw-listing" data-id="${e.id}">
              Withdraw
            </button>
          </div>
        </div>
      `).join(``)}
    </div>
  `:`
      <div class="table-card" style="padding: 48px 24px; text-align: center; color: var(--muted);">
        <h3 style="color: var(--ink); margin: 0 0 6px;">You haven't listed anything yet</h3>
        <p>Give your idle calculator, bike, or gear a second life on campus while earning cash &amp; coins.</p>
        <button class="btn btn-sm btn-lime" data-action="open-list-modal" style="margin-top: 12px;">
          List an Item Now
        </button>
      </div>
    `}function x(e,t,n){return`
    <div>
      <!-- Wallet Info Card -->
      <div style="background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.25); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; color: var(--coin); font-weight: 700;">
              Circular Campus Wallet
            </div>
            <h2 style="margin: 6px 0; font-size: 2.2rem; color: var(--coin); font-weight: 800;">
              ${e.coins||0} Campus Coins
            </h2>
            <p style="margin: 0; color: var(--ink-secondary); font-size: 0.9375rem; max-width: 60ch;">
              Earn 1 coin for every $1 spent on CampusLoop rentals &amp; buys. Use coins for $0.10 discount each at checkout, or redeem for real campus perks below!
            </p>
          </div>
        </div>
      </div>

      <!-- Active Vouchers -->
      ${t.length>0?`
        <div style="margin-bottom: 32px;">
          <h3 style="margin: 0 0 14px; font-size: 1.25rem;">Your Claimed Vouchers</h3>
          <div class="table-card">
            ${t.map(e=>`
              <div class="profile-item-row">
                <div class="p-row-grow">
                  <div class="p-row-title">${C(e.title)}</div>
                  <div class="p-row-sub">Redeemed on ${new Date(e.date).toLocaleDateString()}</div>
                </div>
                <div class="order-pass-pill" style="font-size:1rem; color:var(--green-text); font-weight:800;">
                  ${e.voucherCode}
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      `:``}

      <!-- Perks Catalog -->
      <h3 style="margin: 0 0 6px; font-size: 1.25rem;">Available Campus Rewards</h3>
      <p style="color: var(--muted); margin: 0 0 20px; font-size: 0.9375rem;">
        Sponsored by Campus Sustainability &amp; Academic Services.
      </p>

      <div class="perks-grid">
        ${n.map(t=>{let n=(e.coins||0)>=t.cost;return`
            <div class="perk-card">
              <div class="perk-icon-wrap">
                ${d(t.icon||`gift`)}
              </div>
              <div style="font-size: 0.75rem; font-family: var(--mono); color: var(--muted); text-transform: uppercase; margin-bottom: 4px;">
                ${t.category}
              </div>
              <h4 style="margin: 0 0 8px; font-size: 1.125rem; font-weight: 700;">
                ${C(t.title)}
              </h4>
              <p style="margin: 0 0 18px; color: var(--muted); font-size: 0.875rem; line-height: 1.45; flex: 1;">
                ${C(t.desc)}
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line); padding-top: 14px;">
                <span class="perk-cost-tag">${t.cost} coins</span>
                <button 
                  class="btn btn-sm ${n?`btn-lime`:`btn-ghost`}" 
                  data-action="redeem-perk" 
                  data-perk-id="${t.id}"
                  ${n?``:`disabled title="Need more coins"`}
                >
                  ${n?`Redeem Voucher`:`Not enough coins`}
                </button>
              </div>
            </div>
          `}).join(``)}
      </div>
    </div>
  `}function S(e){return e.length?`
    <div>
      <div style="margin-bottom: 16px; font-size: 0.9375rem; color: var(--muted);">
        As a verified faculty reviewer, review student submissions to ensure they meet campus safety &amp; academic standards.
      </div>
      <div class="table-card">
        ${e.map(e=>`
          <div class="profile-item-row">
            <div class="p-row-grow">
              <div class="p-row-title">${C(e.title)}</div>
              <div class="p-row-sub">
                ${e.cat} &bull; ${e.type===`rent`?`$${e.price} / day`:`$${e.price} sale`} &bull; Listed by <strong>${C(e.seller)}</strong>
              </div>
              <div style="font-size: 0.8125rem; color: var(--ink-secondary); margin-top: 4px;">
                "${C(e.desc)}"
              </div>
            </div>

            <div style="display: flex; gap: 8px;">
              <button class="btn btn-sm" data-action="approve-listing" data-id="${e.id}">
                ${d(`check`)} Approve
              </button>
              <button class="btn btn-sm btn-danger" data-action="reject-listing" data-id="${e.id}">
                Reject
              </button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `:`
      <div class="table-card" style="padding: 48px 24px; text-align: center; color: var(--muted);">
        <h3 style="color: var(--ink); margin: 0 0 6px;">Moderation Queue is Clean</h3>
        <p>There are currently no student listings awaiting review. New student submissions will appear here.</p>
      </div>
    `}function C(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function w(e){let t=l.getCurrentUser(),n=t?.coins||0,r=t?e.redeemedPerks.filter(e=>e.userId===t.key):[];return`
    <main class="wrap" style="padding: 48px 0 96px;">
      <!-- Hero Banner for Perks -->
      <div style="background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.25); border-radius: var(--radius-lg); padding: clamp(28px, 5vw, 44px); margin-bottom: 40px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
          <div style="max-width: 640px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; color: var(--coin); font-weight: 700; background: rgba(165,100,16,0.12); padding: 4px 10px; border-radius: var(--radius-pill); margin-bottom: 12px;">
              ${d(`spark`)} Circular Economy Rewards
            </div>
            <h1 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.04em; margin: 0 0 12px; color: var(--ink);">
              Turn your circular habits into real campus perks.
            </h1>
            <p style="margin: 0; color: var(--ink-secondary); font-size: 1.0625rem; line-height: 1.6;">
              Every time you lend, borrow, or buy second-hand on CampusLoop, you earn <strong>1 Campus Coin per $1</strong>. Use coins for instant checkout discounts (10 coins = $1 off) or redeem them below for campus-sponsored amenities.
            </p>
          </div>

          <div style="background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px 28px; text-align: center; box-shadow: var(--shadow-sm); min-width: 220px;">
            <div style="font-family: var(--mono); font-size: 0.75rem; color: var(--muted); text-transform: uppercase;">
              Your Active Balance
            </div>
            <div style="font-size: 3rem; font-weight: 800; color: var(--coin); line-height: 1.1; margin: 6px 0;">
              ${n}
            </div>
            <div style="font-size: 0.8125rem; color: var(--muted);">Campus Coins</div>
          </div>
        </div>
      </div>

      <!-- Active Claimed Vouchers -->
      ${r.length>0?`
        <div style="margin-bottom: 48px;">
          <h2 style="font-size: 1.5rem; letter-spacing: -0.03em; margin: 0 0 14px;">Your Active Reward Vouchers</h2>
          <div class="table-card">
            ${r.map(e=>`
              <div class="profile-item-row">
                <div class="p-row-grow">
                  <div class="p-row-title">${T(e.title)}</div>
                  <div class="p-row-sub">Claimed on ${new Date(e.date).toLocaleDateString()} &bull; Present at campus vendor</div>
                </div>
                <div class="order-pass-pill" style="font-size:1.1rem; color:var(--green-text); font-weight:800;">
                  ${e.voucherCode}
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      `:``}

      <!-- Perks Catalog -->
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px;">
        <div>
          <h2 style="font-size: 1.6rem; letter-spacing: -0.03em; margin: 0 0 4px;">Available Campus Perks</h2>
          <p style="color: var(--muted); margin: 0; font-size: 0.9375rem;">
            Redeem directly using your balance. Vouchers are saved to your dashboard.
          </p>
        </div>
      </div>

      <div class="perks-grid">
        ${e.perks.map(e=>{let t=n>=e.cost;return`
            <div class="perk-card">
              <div class="perk-icon-wrap">
                ${d(e.icon||`gift`)}
              </div>
              <div style="font-size: 0.75rem; font-family: var(--mono); color: var(--muted); text-transform: uppercase; margin-bottom: 4px;">
                ${e.category}
              </div>
              <h3 style="margin: 0 0 8px; font-size: 1.2rem; font-weight: 700;">
                ${T(e.title)}
              </h3>
              <p style="margin: 0 0 18px; color: var(--muted); font-size: 0.9375rem; line-height: 1.5; flex: 1;">
                ${T(e.desc)}
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line); padding-top: 16px;">
                <span class="perk-cost-tag" style="font-size: 1.1rem;">${e.cost} coins</span>
                <button 
                  class="btn btn-sm ${t?`btn-lime`:`btn-ghost`}" 
                  data-action="redeem-perk" 
                  data-perk-id="${e.id}"
                  ${t?``:`disabled title="Collect more coins on checkouts"`}
                >
                  ${t?`Redeem Perk`:`Need more coins`}
                </button>
              </div>
            </div>
          `}).join(``)}
      </div>
    </main>
  `}function T(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function E(){return`
    <footer class="footer">
      <div class="wrap footer-in">
        <div class="footer-left">
          <div style="font-weight: 700; color: var(--ink); display: flex; align-items: center; gap: 6px;">
            <span>Loop<span style="color:var(--green-text);">.</span>campus</span>
          </div>
          <span class="footer-pill">${d(`leaf`)} Certified Circular Campus Hub</span>
        </div>

        <div style="display: flex; gap: 20px; font-size: 0.8125rem; flex-wrap: wrap;">
          <span>Zero Electronic Waste Policy</span>
          <span>Faculty Review Standards</span>
          <span>Station Attendant Protocol</span>
        </div>

        <div style="font-size: 0.75rem; color: var(--muted); font-family: var(--mono);">
          v2.0 Production Build &bull; Campus Circular Economy Initiative
        </div>
      </div>
    </footer>
  `}function D(e){if(!e)return``;let t=l.getCurrentUser(),n=t&&e.owner===t.key,r=e.type===`rent`,i=e.cat.toLowerCase();return`
    <div class="modal-sheet modal-lg" role="dialog" aria-labelledby="item-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${d(`close`)}
      </button>

      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <!-- Left: Image / Visual Thumbnail -->
        <div 
          style="
            flex: 1; 
            min-width: 240px; 
            height: 280px; 
            background: var(--t-${i}); 
            border-radius: var(--radius-md); 
            display: grid; 
            place-items: center; 
            color: var(--t-${i}-ink);
            position: relative;
          "
        >
          <span 
            class="badge-tag" 
            style="top: 14px; left: 14px; background: var(--surface); color: var(--t-${i}-ink);"
          >
            ${e.cat}
          </span>
          <span class="condition-pill" style="top: 14px; right: 14px;">
            ${e.condition||`Good`} Condition
          </span>
          ${d(e.icon||`box`)}
        </div>

        <!-- Right: Specifications & Details -->
        <div style="flex: 1.3; min-width: 260px; display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.8125rem; color: var(--orange); font-weight: 700; text-transform: uppercase;">
            <span>${r?`Campus Rental`:`Direct Purchase`}</span>
            <span style="color: var(--line-strong);">•</span>
            <span style="color: var(--muted);">${r?`Per Day Billing`:`One-Time Payment`}</span>
          </div>

          <h2 id="item-modal-title" style="margin: 8px 0 10px; font-size: 1.6rem; letter-spacing: -0.04em; color: var(--ink);">
            ${O(e.title)}
          </h2>

          <p style="margin: 0 0 16px; color: var(--muted); font-size: 0.9375rem; line-height: 1.55;">
            ${O(e.details||e.desc)}
          </p>

          <!-- Campus Pickup Point Box -->
          <div style="background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px 14px; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 0.875rem; color: var(--green-text);">
              ${d(`location`)}
              <span>Campus Pickup Station</span>
            </div>
            <div style="font-size: 0.8125rem; color: var(--ink-secondary); margin-top: 4px;">
              ${O(e.location||`Central Library - Ground Floor Service Desk`)}
            </div>
          </div>

          <!-- Pricing & Deposit Summary -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; padding: 12px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: 16px;">
            <div>
              <div style="font-size: 1.8rem; font-weight: 800; color: var(--ink); line-height: 1;">
                $${e.price}
                <span style="font-size: 0.875rem; font-weight: 500; color: var(--muted);">
                  ${r?`/ day`:``}
                </span>
              </div>
              ${r?`
                <div style="font-size: 0.75rem; color: var(--muted); margin-top: 4px;">
                  Refundable Security Deposit: $${e.deposit||0}
                </div>
              `:``}
            </div>

            <!-- Seller Credibility Info -->
            <div style="text-align: right;">
              <div style="font-size: 0.875rem; font-weight: 600; color: var(--ink);">
                ${O(e.seller)}
              </div>
              <div style="display: flex; align-items: center; gap: 6px; justify-content: flex-end; margin-top: 2px;">
                <span style="font-size: 0.75rem; color: var(--muted);">${e.rating} ★</span>
                <span class="tier-badge ${e.tier}">${e.tier}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div style="display: flex; gap: 10px; margin-top: auto;">
            ${n?`
              <button class="btn btn-ghost" style="flex: 1;" disabled>This is your listing</button>
            `:`
              <button class="btn btn-lime" style="flex: 1;" data-action="open-checkout-modal" data-id="${e.id}">
                ${r?`Reserve Rental`:`Buy Now`} ${d(`arrowRight`)}
              </button>
            `}
          </div>
        </div>
      </div>
    </div>
  `}function O(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function k(e,t=1,n=!1){if(!e)return``;let r=l.getCurrentUser(),i=e.type===`rent`,a=r?.coins||0,o=Math.max(1,Math.min(14,t)),s=i?e.price*o:e.price,c=Math.min(a,Math.floor(s*10)),u=n?c:0,f=Math.round(u/10*100)/100,p=Math.max(0,s-f),m=i&&e.deposit||0,h=Math.round((p+m)*100)/100,g=Math.floor(p),_=new Date;return _.setDate(_.getDate()+o),`
    <div class="modal-sheet" role="dialog" aria-labelledby="co-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${d(`close`)}
      </button>

      <div class="modal-header">
        <div style="font-family: var(--mono); font-size: 0.75rem; color: var(--green-text); font-weight: 700; text-transform: uppercase;">
          Checkout &amp; Pickup Pass
        </div>
        <h2 id="co-modal-title" style="margin-top: 4px;">${A(e.title)}</h2>
        <p class="lead">From ${A(e.seller)} &bull; Pick up at ${A(e.location)}</p>
      </div>

      <form id="checkout-form" data-item-id="${e.id}">
        ${i?`
          <div class="form-field">
            <label class="form-label" for="co-days-input">
              Rental Duration: <span id="co-days-display" style="color:var(--green-text);">${o} day${o>1?`s`:``}</span>
            </label>
            <div style="display: flex; align-items: center; gap: 12px;">
              <input 
                id="co-days-input" 
                class="form-input" 
                type="range" 
                min="1" 
                max="14" 
                value="${o}" 
                style="flex: 1;"
              />
              <span class="mono" style="font-weight: 700; min-width: 48px; text-align: right;">${o} d</span>
            </div>
            <div class="form-hint">
              Due back by: <strong>${_.toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}</strong>
            </div>
          </div>
        `:``}

        ${a>0?`
          <div style="margin: 16px 0; padding: 12px; background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.2); border-radius: var(--radius-sm);">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                id="co-use-coins" 
                ${n?`checked`:``} 
                style="width: 18px; height: 18px; accent-color: var(--green);"
              />
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 0.875rem; color: var(--coin);">
                  Apply Campus Coins
                </div>
                <div style="font-size: 0.75rem; color: var(--ink-secondary);">
                  Wallet balance: ${a} coins &bull; Max redemption: ${c} coins (-$${(c/10).toFixed(2)})
                </div>
              </div>
            </label>
          </div>
        `:``}

        <!-- Live Cost Breakdown -->
        <div class="checkout-summary-box">
          <div class="checkout-row">
            <span>${i?`$${e.price} &times; ${o} day${o>1?`s`:``}`:`Item Price`}</span>
            <span>$${s.toFixed(2)}</span>
          </div>

          ${f>0?`
            <div class="checkout-row coins-applied">
              <span>Coins Discount (${u} coins)</span>
              <span>-$${f.toFixed(2)}</span>
            </div>
          `:``}

          ${i&&m>0?`
            <div class="checkout-row">
              <span title="Fully refunded when returned on time in good condition">Refundable Deposit</span>
              <span>+$${m.toFixed(2)}</span>
            </div>
          `:``}

          <div class="checkout-row total-row">
            <span>Total Payable</span>
            <span>$${h.toFixed(2)}</span>
          </div>

          <div class="checkout-row" style="margin-top: 8px; font-family: var(--mono); font-size: 0.8125rem; color: var(--green-text);">
            <span>Reward on this order:</span>
            <span>+${g} coins</span>
          </div>
        </div>

        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn btn-ghost" style="flex: 1;" data-action="close-modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-lime" style="flex: 2;">
            Confirm &amp; Generate Pickup Pass ${d(`arrowRight`)}
          </button>
        </div>
      </form>
    </div>
  `}function A(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function j(e,t){return e?`
    <div class="modal-sheet" role="dialog" aria-labelledby="success-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${d(`close`)}
      </button>

      <div class="modal-header" style="text-align: center;">
        <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: var(--green-text); display: grid; place-items: center; margin: 0 auto 12px;">
          ${d(`check`)}
        </div>
        <h2 id="success-modal-title">Order Confirmed!</h2>
        <p class="lead" style="margin-bottom: 12px;">
          Your campus reservation for <strong>${M(e.title)}</strong> is active.
        </p>
      </div>

      <!-- Campus Pickup Pass Card -->
      <div class="pass-card">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; color: var(--green-text);">
          ${d(`qr`)}
          <span>Campus Pickup Verification Pass</span>
        </div>

        <div class="pass-code">${e.pickupPass}</div>

        <div style="font-size: 0.875rem; color: var(--ink-secondary); line-height: 1.4;">
          Show this code to the desk attendant or seller at:<br/>
          <strong>${M(e.location)}</strong>
        </div>

        ${e.returnDueDate?`
          <div style="margin-top: 12px; font-size: 0.8125rem; color: var(--muted); border-top: 1px dashed var(--line-strong); padding-top: 8px;">
            Return due by: <strong>${new Date(e.returnDueDate).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}</strong>
          </div>
        `:``}
      </div>

      <!-- Rewards Banner -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--coin-bg); border: 1px solid rgba(165, 100, 16, 0.2); border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 8px; color: var(--coin); font-weight: 600;">
          ${d(`coin`)}
          <span>Coins Earned</span>
        </div>
        <div style="font-family: var(--mono); font-weight: 700; color: var(--coin);">
          +${e.coinsEarned} coins
        </div>
      </div>

      <div style="display: flex; gap: 10px;">
        <button class="btn btn-ghost" style="flex: 1;" data-action="open-chat-modal" data-order-id="${e.id}">
          ${d(`chat`)} Message Seller
        </button>
        <button class="btn btn-lime" style="flex: 1;" data-action="nav" data-view="profile">
          View in Dashboard
        </button>
      </div>
    </div>
  `:``}function M(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function N(n={}){let r=l.getCurrentUser()?.role===`Faculty`,i=n.type||`rent`;return`
    <div class="modal-sheet modal-lg" role="dialog" aria-labelledby="list-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${d(`close`)}
      </button>

      <div class="modal-header">
        <h2 id="list-modal-title">List an Item on CampusLoop</h2>
        <p class="lead">
          ${r?`As a verified Faculty member, your listing will be published immediately.`:`Student listings undergo brief faculty peer review before going live to maintain campus trust.`}
        </p>
      </div>

      <form id="list-item-form">
        <div class="form-field">
          <label class="form-label" for="item-title">Item Title *</label>
          <input 
            id="item-title" 
            class="form-input" 
            placeholder="e.g. Organic Chemistry 8th Edition, Sony Wireless Headphones" 
            required 
            maxlength="80" 
            value="${P(n.title||``)}"
          />
        </div>

        <div class="form-row-2">
          <div class="form-field">
            <label class="form-label" for="item-category">Category *</label>
            <select id="item-category" class="form-select">
              ${e.filter(e=>e.id!==`all`).map(e=>`
                <option value="${e.id}" ${n.cat===e.id?`selected`:``}>${e.name}</option>
              `).join(``)}
            </select>
          </div>

          <div class="form-field">
            <label class="form-label" for="item-condition">Item Condition *</label>
            <select id="item-condition" class="form-select">
              <option value="Like New">Like New (Mint / Unused)</option>
              <option value="Excellent" selected>Excellent (Gently used)</option>
              <option value="Good">Good (Normal minor wear)</option>
              <option value="Fair">Fair (Fully functional)</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <label class="form-label">Transaction Format *</label>
          <div class="type-toggle" style="width: 100%; display: grid; grid-template-columns: 1fr 1fr;">
            <button 
              type="button" 
              class="type-toggle-btn ${i===`rent`?`active`:``}" 
              data-action="form-set-type" 
              data-type="rent"
            >
              Rent out (Per Day)
            </button>
            <button 
              type="button" 
              class="type-toggle-btn ${i===`buy`?`active`:``}" 
              data-action="form-set-type" 
              data-type="buy"
            >
              Sell permanently
            </button>
          </div>
        </div>

        <div class="form-row-2">
          <div class="form-field">
            <label class="form-label" for="item-price">
              ${i===`rent`?`Daily Rental Price ($) *`:`Selling Price ($) *`}
            </label>
            <input 
              id="item-price" 
              class="form-input" 
              type="number" 
              min="1" 
              step="0.5" 
              placeholder="10" 
              required 
              value="${n.price||``}"
            />
          </div>

          <div class="form-field">
            <label class="form-label" for="item-deposit">
              ${i===`rent`?`Refundable Security Deposit ($)`:`Original Retail Value ($)`}
            </label>
            <input 
              id="item-deposit" 
              class="form-input" 
              type="number" 
              min="0" 
              step="1" 
              placeholder="${i===`rent`?`20`:`80`}" 
              value="${n.deposit||``}"
            />
          </div>
        </div>

        <div class="form-field">
          <label class="form-label" for="item-location">Campus Pickup Point *</label>
          <select id="item-location" class="form-select">
            ${t.map(e=>`
              <option value="${e}">${e}</option>
            `).join(``)}
          </select>
        </div>

        <div class="form-field">
          <label class="form-label" for="item-desc">Description &amp; Included Accessories *</label>
          <textarea 
            id="item-desc" 
            class="form-textarea" 
            placeholder="Details about condition, cables or bags included, exam clearance notes..." 
            required 
            maxlength="240"
          >${P(n.desc||``)}</textarea>
        </div>

        <div id="list-form-error" style="color: var(--danger); font-size: 0.875rem; margin-bottom: 12px; display: none;"></div>

        <div style="display: flex; gap: 10px; margin-top: 24px;">
          <button type="button" class="btn btn-ghost" style="flex: 1;" data-action="close-modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-lime" style="flex: 2;">
            ${r?`Publish Listing`:`Submit for Faculty Review`} ${d(`arrowRight`)}
          </button>
        </div>
      </form>
    </div>
  `}function P(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function F(e){let t=l.getState(),n=l.getCurrentUser(),r=t.orders.find(t=>t.id===e),i=t.messages[e]||[];return`
    <div class="modal-sheet" role="dialog" aria-labelledby="chat-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${d(`close`)}
      </button>

      <div class="modal-header">
        <div style="font-family: var(--mono); font-size: 0.75rem; color: var(--green-text); font-weight: 700; text-transform: uppercase;">
          Peer Coordination &bull; ${e}
        </div>
        <h2 id="chat-modal-title" style="margin-top: 4px; font-size: 1.4rem;">
          ${r?I(r.title):`Campus Handshake`}
        </h2>
        <p class="lead" style="margin-bottom: 8px;">
          ${r?`Station: ${I(r.location)}`:`Coordinate meetup details.`}
        </p>
      </div>

      <div class="chat-container">
        <div class="chat-history" id="chat-history">
          ${i.map(e=>{let t=n&&e.sender===n.name;return`
              <div class="chat-bubble ${e.role===`system`?`system`:t?`renter`:`seller`}">
                <div style="font-size: 0.6875rem; opacity: 0.75; margin-bottom: 2px;">
                  ${I(e.sender)} &bull; ${e.time}
                </div>
                <div>${I(e.text)}</div>
              </div>
            `}).join(``)}
        </div>

        <!-- Quick Prompts -->
        <div class="quick-prompts">
          <button class="prompt-chip" data-action="quick-reply" data-text="I am heading to the pickup station now!">
            Heading there now!
          </button>
          <button class="prompt-chip" data-action="quick-reply" data-text="Can we meet at 2:30 PM today?">
            Meet at 2:30 PM?
          </button>
          <button class="prompt-chip" data-action="quick-reply" data-text="Left the item with the library desk attendant. Thank you!">
            Left with desk
          </button>
        </div>

        <!-- Input Bar -->
        <form id="chat-send-form" data-order-id="${e}" class="chat-input-bar">
          <input 
            id="chat-input" 
            type="text" 
            placeholder="Type a message to peer..." 
            autocomplete="off" 
            required 
          />
          <button type="submit" class="btn btn-sm btn-lime" style="border-radius: 0; padding: 0 16px;">
            Send
          </button>
        </form>
      </div>
    </div>
  `}function I(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function L(e={}){let t=e.note||`Sign in to access your wallet, reserve items, and manage campus listings.`;return`
    <div class="modal-sheet" role="dialog" aria-labelledby="login-modal-title">
      <button class="modal-close-btn" data-action="close-modal" aria-label="Close modal">
        ${d(`close`)}
      </button>

      <div class="modal-header">
        <h2 id="login-modal-title">Sign in to CampusLoop</h2>
        <p class="lead">${R(t)}</p>
      </div>

      <!-- Quick Demo Account Picker -->
      <div style="background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 0.75rem; font-family: var(--mono); text-transform: uppercase; color: var(--muted); margin-bottom: 10px; font-weight: 700;">
          Instant One-Click Demo Personas:
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button class="btn btn-ghost" style="justify-content: flex-start; text-align: left; padding: 10px 14px;" data-action="fast-login" data-user="student">
            <span style="font-weight: 700;">Alex Morgan</span>
            <span style="color: var(--muted); font-size: 0.8125rem; margin-left: auto;">Student (Biology) &bull; 65 Coins</span>
          </button>
          <button class="btn btn-ghost" style="justify-content: flex-start; text-align: left; padding: 10px 14px;" data-action="fast-login" data-user="faculty">
            <span style="font-weight: 700;">Dr. Sam Rivera</span>
            <span style="color: var(--green-text); font-size: 0.8125rem; margin-left: auto;">Faculty Moderator &bull; 140 Coins</span>
          </button>
          <button class="btn btn-ghost" style="justify-content: flex-start; text-align: left; padding: 10px 14px;" data-action="fast-login" data-user="student2">
            <span style="font-weight: 700;">Maya Chen</span>
            <span style="color: var(--muted); font-size: 0.8125rem; margin-left: auto;">Senior Student (CS) &bull; 110 Coins</span>
          </button>
        </div>
      </div>

      <!-- Standard Form -->
      <form id="email-login-form">
        <div class="form-field">
          <label class="form-label" for="login-email">Campus Email</label>
          <input 
            id="login-email" 
            class="form-input" 
            type="email" 
            placeholder="alex.morgan@campus.edu" 
            value="${n.student.email}" 
            required 
          />
        </div>

        <div class="form-field">
          <label class="form-label" for="login-password">Password</label>
          <input 
            id="login-password" 
            class="form-input" 
            type="password" 
            value="${n.student.password}" 
            required 
          />
        </div>

        <div id="login-error" style="color: var(--danger); font-size: 0.875rem; margin-bottom: 12px; display: none;"></div>

        <div style="display: flex; gap: 10px; margin-top: 18px;">
          <button type="button" class="btn btn-ghost" style="flex: 1;" data-action="close-modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-lime" style="flex: 1;">
            Sign in ${d(`arrowRight`)}
          </button>
        </div>
      </form>
    </div>
  `}function R(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}var z=class{constructor(){this.appRoot=document.getElementById(`app`),this.modalRoot=document.getElementById(`modal-root`),this.toastRoot=document.getElementById(`toast-root`),this.modalState={checkoutDays:1,checkoutUseCoins:!1,listFormData:{type:`rent`}},this.init()}init(){l.subscribe(()=>{this.applyTheme(),this.render()}),this.applyTheme(),this.attachEventListeners(),this.render()}applyTheme(){let e=l.getState().theme,t=document.documentElement;if(e===`dark`)t.setAttribute(`data-theme`,`dark`);else if(e===`light`)t.setAttribute(`data-theme`,`light`);else{let e=window.matchMedia(`(prefers-color-scheme: dark)`).matches;t.setAttribute(`data-theme`,e?`dark`:`light`)}}render(){let e=l.getState(),t=e.ui.view,n=``;n=t===`profile`?v(e):t===`perks`?w(e):_(e),this.appRoot.innerHTML=`
      ${f(e)}
      ${n}
      ${E()}
    `,this.renderModal(e),this.renderToasts(e)}renderModal(e){let t=e.ui.activeModal;if(!t){this.modalRoot.innerHTML=``;return}let n=``,{name:r,data:i}=t;switch(r){case`itemDetail`:n=D(e.items.find(e=>e.id===i.id));break;case`checkout`:n=k(e.items.find(e=>e.id===i.id),this.modalState.checkoutDays,this.modalState.checkoutUseCoins);break;case`orderSuccess`:n=j(i.order,i.item);break;case`list`:n=N(this.modalState.listFormData);break;case`chat`:n=F(i.orderId);break;case`login`:n=L(i);break;default:n=``}if(n){this.modalRoot.innerHTML=`
        <div class="modal-overlay" data-action="overlay-click">
          ${n}
        </div>
      `;let e=document.getElementById(`chat-history`);e&&(e.scrollTop=e.scrollHeight)}else this.modalRoot.innerHTML=``}renderToasts(e){let t=e.ui.toasts;t.length?this.toastRoot.innerHTML=`
      <div class="toast-stack">
        ${t.map(e=>`
          <div class="toast-item ${e.type}" role="status">
            <span>${e.message}</span>
          </div>
        `).join(``)}
      </div>
    `:this.toastRoot.innerHTML=``}attachEventListeners(){document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let n=t.getAttribute(`data-action`);this.handleAction(n,t,e)}),document.addEventListener(`submit`,e=>{this.handleFormSubmit(e)}),document.addEventListener(`input`,e=>{if(e.target.id===`search-input`)l.setSearch(e.target.value);else if(e.target.id===`co-days-input`){let t=parseInt(e.target.value,10)||1;this.modalState.checkoutDays=t,this.renderModal(l.getState())}}),document.addEventListener(`change`,e=>{e.target.id===`sort-select`?l.setSort(e.target.value):e.target.id===`co-use-coins`&&(this.modalState.checkoutUseCoins=e.target.checked,this.renderModal(l.getState()))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&l.getState().ui.activeModal&&l.closeModal()})}handleAction(e,t,n){switch(e){case`switch-user`:{let e=t.getAttribute(`data-user`);l.switchUser(e);break}case`fast-login`:{let e=t.getAttribute(`data-user`);l.switchUser(e),l.closeModal();break}case`nav`:{let e=t.getAttribute(`data-view`);l.setView(e),window.scrollTo({top:0,behavior:`smooth`});break}case`set-profile-tab`:{let e=t.getAttribute(`data-tab`);l.setProfileTab(e);break}case`toggle-theme`:l.toggleTheme();break;case`set-category`:{let e=t.getAttribute(`data-cat`);l.setCategory(e);break}case`set-type`:{let e=t.getAttribute(`data-type`);l.setType(e);break}case`clear-search`:l.setSearch(``);break;case`reset-filters`:l.setSearch(``),l.setCategory(`all`),l.setType(`all`);break;case`open-detail-modal`:{let e=parseInt(t.getAttribute(`data-id`),10);l.openModal(`itemDetail`,{id:e});break}case`open-checkout-modal`:{let e=parseInt(t.getAttribute(`data-id`),10);this.modalState.checkoutDays=1,this.modalState.checkoutUseCoins=!1,l.openModal(`checkout`,{id:e});break}case`open-list-modal`:this.modalState.listFormData={type:`rent`},l.openModal(`list`);break;case`open-login-modal`:l.openModal(`login`);break;case`open-chat-modal`:{let e=t.getAttribute(`data-order-id`);l.openModal(`chat`,{orderId:e});break}case`close-modal`:l.closeModal();break;case`overlay-click`:n.target===t&&l.closeModal();break;case`form-set-type`:{let e=t.getAttribute(`data-type`);this.modalState.listFormData.type=e,this.renderModal(l.getState());break}case`return-rental`:{let e=t.getAttribute(`data-order-id`);l.updateRentalStatus(e,`completed`);break}case`withdraw-listing`:{let e=parseInt(t.getAttribute(`data-id`),10);l.withdrawListing(e);break}case`approve-listing`:{let e=parseInt(t.getAttribute(`data-id`),10);l.approveListing(e);break}case`reject-listing`:{let e=parseInt(t.getAttribute(`data-id`),10);l.rejectListing(e,`Did not meet safety guidelines`);break}case`redeem-perk`:{let e=t.getAttribute(`data-perk-id`);l.redeemPerk(e);break}case`quick-reply`:{let e=t.getAttribute(`data-text`),n=document.getElementById(`chat-input`);n&&(n.value=e,n.focus());break}}}handleFormSubmit(e){e.preventDefault();let t=e.target;if(t.id===`checkout-form`){let e=parseInt(t.getAttribute(`data-item-id`),10),n=l.getState().items.find(t=>t.id===e);if(!n)return;l.checkout(n,{days:this.modalState.checkoutDays,useCoins:this.modalState.checkoutUseCoins})}else if(t.id===`list-item-form`){let e=document.getElementById(`item-title`).value.trim(),t=document.getElementById(`item-category`).value,n=document.getElementById(`item-condition`).value,r=parseFloat(document.getElementById(`item-price`).value),i=parseFloat(document.getElementById(`item-deposit`).value)||0,a=document.getElementById(`item-location`).value,o=document.getElementById(`item-desc`).value.trim(),s=this.modalState.listFormData.type||`rent`,c=document.getElementById(`list-form-error`);if(!e||!o||!(r>0)){c&&(c.textContent=`Please fill out all required fields with a valid price.`,c.style.display=`block`);return}l.listItem({title:e,desc:o,details:o,cat:t,condition:n,price:r,deposit:i,location:a,type:s,icon:{Mobility:`bike`,Study:`book`,Creative:`camera`,Home:`chair`,Tech:`laptop`}[t]||`box`})}else if(t.id===`chat-send-form`){let e=t.getAttribute(`data-order-id`),n=document.getElementById(`chat-input`),r=n?n.value:``;if(r.trim()){l.sendChatMessage(e,r),n&&(n.value=``);let t=document.getElementById(`chat-history`);t&&(t.scrollTop=t.scrollHeight)}}else if(t.id===`email-login-form`){let e=document.getElementById(`login-email`).value,t=document.getElementById(`login-password`).value,n=l.login(e,t);if(!n.success){let e=document.getElementById(`login-error`);e&&(e.textContent=n.message,e.style.display=`block`)}}}};document.addEventListener(`DOMContentLoaded`,()=>{new z});
//# sourceMappingURL=index-Cy80R98R.js.map