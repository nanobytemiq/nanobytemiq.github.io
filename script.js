const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const active = navLinks.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", active ? "true" : "false");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const upcomingApps = [
  ["C Coder", "com.rashidomar.c_coder"],
  ["Community Digital Centre", "com.rashidomar.community_digital_centre"],
  ["Crop Manager", "com.rashidomar.crop_manager"],
  ["Job Application Tracker", "com.rashidomar.job_application_tracker"],
  ["Morse Code Cipher Encoder", "com.rashidomar.morse_code_cipher_encoder"],
  ["Python Coder", "com.rashidomar.python_coder"],
  ["QR Barcodes Master", "com.rashidomar.qr_barcodes_master"],
  ["TypeScript Coder", "com.rashidomar.typescript_coder"],
  ["Vehicle Manager", "com.rashidomar.vehicle_manager"],
  ["Workout Exercise Logger", "com.rashidomar.workout_exercise_logger"],
  ["Animal Manager", "com.rashidomar.animal_manager"],
  ["Boutique Manager", "com.rashidomar.boutique_manager"],
  ["CV Resume Master", "com.rashidomar.cv_resume_master"],
  ["FinCore", "com.rashidomar.fincore"],
  ["Garage Manager", "com.rashidomar.garage_manager"],
  ["Hardware Manager", "com.rashidomar.hardware_manager"],
  ["Hotel Manager", "com.rashidomar.hotel_manager"],
  ["Pro Financial Calculator", "com.rashidomar.pro_financial_calculator"],
  ["Scholario", "com.rashidomar.scholario"],
  ["Shop Manager", "com.rashidomar.shop_manager"],
  ["Student Calculator", "com.rashidomar.student_calculator"],
  ["Unisex Salon Manager", "com.rashidomar.unisex_salon_manager"],
  ["Web Coder", "com.rashidomar.web_coder"],
];

const descriptions = {
  "C Coder": "A focused coding environment for learning and building in C.",
  "Community Digital Centre":
    "Digital tools designed to support community services and access.",
  "Crop Manager":
    "Organize crop activities, records and useful farm information.",
  "Job Application Tracker":
    "Track applications, interviews, follow-ups and your job search progress.",
  "Morse Code Cipher Encoder":
    "Encode, decode and explore Morse code and cipher workflows.",
  "Python Coder":
    "A mobile Python learning and coding environment built for practice.",
  "QR Barcodes Master": "Scan, create and work with QR codes and barcodes.",
  "TypeScript Coder":
    "A practical TypeScript coding environment for learning and experimentation.",
  "Vehicle Manager":
    "Keep useful vehicle records, maintenance information and reminders organized.",
  "Workout Exercise Logger":
    "Log workouts, exercises and training progress in one place.",
  "Animal Manager":
    "Organize animal records and useful management information.",
  "Boutique Manager":
    "Manage boutique products, sales and day-to-day business information.",
  "CV Resume Master":
    "Build and organize professional CV and resume information.",
  FinCore:
    "A finance-focused toolkit for managing useful financial information.",
  "Garage Manager":
    "Organize garage operations, vehicle jobs, customers and records.",
  "Hardware Manager":
    "Manage hardware inventory, records and related business information.",
  "Hotel Manager":
    "Organize hotel operations, records and day-to-day management workflows.",
  "Pro Financial Calculator":
    "A powerful calculator toolkit for practical financial calculations.",
  Scholario: "A learning-focused digital workspace for students and education.",
  "Shop Manager":
    "Manage shop products, sales, stock and essential business records.",
  "Student Calculator":
    "A practical calculator designed around common student needs.",
  "Unisex Salon Manager":
    "Organize salon services, customers, appointments and business records.",
  "Web Coder":
    "A focused environment for learning and experimenting with web code.",
};

const iconNames = {
  "C Coder": "C-Coder.png",
  "Community Digital Centre": "Community-Digital-Centre.png",
  "Crop Manager": "Crop-Manager.png",
  "Job Application Tracker": "Job-Application-Tracker.png",
  "Morse Code Cipher Encoder": "Morse-Code-Cipher-Encoder.png",
  "Python Coder": "Python-Coder.png",
  "QR Barcodes Master": "QR-Barcodes-Master.png",
  "TypeScript Coder": "TypeScript-Coder.png",
  "Vehicle Manager": "Vehicle-Manager.png",
  "Workout Exercise Logger": "Workout-Exercise-Logger.jpg",
  "Animal Manager": "Animal-Manager.png",
  "Boutique Manager": "Boutique-Manager.jpg",
  "CV Resume Master": "CV-Resume-Master.png",
  FinCore: "FinCore.png",
  "Garage Manager": "Garage-Manager.jpg",
  "Hardware Manager": "Hardware-Manager.jpg",
  "Hotel Manager": "Hotel-Manager.jpg",
  "Pro Financial Calculator": "Pro-Financial-Calculator.png",
  Scholario: "Scholario.png",
  "Shop Manager": "Shop-Manager.jpg",
  "Student Calculator": "Student-Calculator.png",
  "Unisex Salon Manager": "Unisex-Salon-Manager.jpg",
  "Web Coder": "Web-Coder.png",
};

const upcomingContainer = document.getElementById("upcomingApps");

if (upcomingContainer) {
  upcomingContainer.innerHTML = upcomingApps
    .map(([name, packageName]) => {
      const icon = iconNames[name] || name.toLowerCase().replace(/\s+/g, "_");
      const initials = name
        .split(/\s+/)
        .map((word) => word[0])
        .slice(0, 2)
        .join("");
      return `
            <article class="product-card">
                <div class="product-image">
                    <img src="icons/${icon}" alt="${name} app icon" onerror="this.style.display='none'">
                    <span class="fallback-icon">${initials}</span>
                </div>
                <div class="product-content">
                    <span class="product-type">UPCOMING APPLICATION</span>
                    <h3>${name}</h3>
                    <p>${descriptions[name] || "A new digital product currently in development at LaySoftware."}</p>
                    <span class="package-label">${packageName}</span>
                </div>
            </article>
        `;
    })
    .join("");
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
