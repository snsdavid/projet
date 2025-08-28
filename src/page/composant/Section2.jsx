import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Section2.css"; // Assuming you have a CSS file for styling

const Section2 = () => {

  return (
    <>
    <div class="main-section body1">
        <div class="green-stripe"></div>
        
        <div class="curved-background"></div>
        
        <div class="content-wrapper">
            <div class="stats-section">
                <h2 class="stats-title">En quelques chiffres</h2>
                <div class="stats-container">
                    <div class="stat-item">
                        <span class="stat-number">+ 40</span>
                        <div class="stat-label">Années<br/>d'activité</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">+ 3000</span>
                        <div class="stat-label">Références<br/>dans le monde</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">+ 800</span>
                        <div class="stat-label">Projets pilotés<br/>(AT & AMO)</div>
                    </div>
                </div>
            </div>

            <div class="white-content-section">
                <h3 class="section-title">Vos Enjeux</h3>
                
                <div class="enjeux-container">
                    <div class="enjeu-item">
                        <svg class="enjeu-icon" viewBox="0 0 100 100">
                            <path d="M20 70c0-15 10-25 25-25s25 10 25 25" stroke-linecap="round"/>
                            <path d="M45 45c-8 0-15-7-15-15s7-15 15-15 15 7 15 15-7 15-15 15z"/>
                            <path d="M30 25c5-8 15-8 20 0"/>
                            <path d="M35 20l5 5 5-5"/>
                            <ellipse cx="75" cy="25" rx="8" ry="5"/>
                            <circle cx="73" cy="23" r="1" fill="currentColor"/>
                            <path d="M67 25c3-2 3-6 0-8"/>
                        </svg>
                        <div class="enjeu-text">Biodiversité et<br/>ressources<br/>naturelles</div>
                    </div>

                    <div class="enjeu-item">
                        <svg class="enjeu-icon" viewBox="0 0 100 100">
                            <ellipse cx="35" cy="25" rx="12" ry="18"/>
                            <ellipse cx="50" cy="20" rx="10" ry="15"/>
                            <ellipse cx="65" cy="25" rx="12" ry="18"/>
                            <rect x="47" y="43" width="6" height="25" rx="3"/>
                            <path d="M30 68h40" stroke-linecap="round"/>
                            <path d="M35 73h30" stroke-linecap="round"/>
                            <path d="M40 78h20" stroke-linecap="round"/>
                        </svg>
                        <div class="enjeu-text">Arbres et forêts</div>
                    </div>

                    <div class="enjeu-item">
                        <svg class="enjeu-icon" viewBox="0 0 100 100">
                            <path d="M25 75h50" stroke-linecap="round" stroke-width="3"/>
                            <path d="M30 75v-8c0-4 2-6 6-6s6 2 6 6v8" stroke-linecap="round"/>
                            <path d="M45 75v-12c0-4 2-6 6-6s6 2 6 6v12" stroke-linecap="round"/>
                            <path d="M60 75v-10c0-4 2-6 6-6s6 2 6 6v10" stroke-linecap="round"/>
                            <circle cx="33" cy="60" r="1.5" fill="currentColor"/>
                            <circle cx="36" cy="58" r="1.5" fill="currentColor"/>
                            <circle cx="39" cy="60" r="1.5" fill="currentColor"/>
                            <circle cx="48" cy="48" r="1.5" fill="currentColor"/>
                            <circle cx="51" cy="46" r="1.5" fill="currentColor"/>
                            <circle cx="54" cy="48" r="1.5" fill="currentColor"/>
                        </svg>
                        <div class="enjeu-text">Agriculture<br/>durable</div>
                    </div>

                    <div class="enjeu-item">
                        <svg class="enjeu-icon" viewBox="0 0 100 100">
                            <rect x="25" y="35" width="15" height="20" rx="2"/>
                            <rect x="27" y="37" width="3" height="3"/>
                            <rect x="32" y="37" width="3" height="3"/>
                            <rect x="37" y="37" width="3" height="3"/>
                            <rect x="45" y="25" width="18" height="25" rx="2"/>
                            <rect x="47" y="27" width="3" height="3"/>
                            <rect x="52" y="27" width="3" height="3"/>
                            <rect x="57" y="27" width="3" height="3"/>
                            <path d="M20 55h60" stroke-linecap="round"/>
                            <ellipse cx="35" cy="62" rx="8" ry="3"/>
                            <path d="M25 70c8-5 16-5 24 0s16 5 24 0" stroke-linecap="round"/>
                        </svg>
                        <div class="enjeu-text">Territoires</div>
                    </div>

                    <div class="enjeu-item">
                        <svg class="enjeu-icon" viewBox="0 0 100 100">
                            <circle cx="35" cy="35" r="12"/>
                            <path d="M35 18v6 M53 35h-6 M35 52v-6 M17 35h6" stroke-linecap="round" stroke-width="3"/>
                            <path d="M47 23l-4 4 M47 47l-4-4 M23 23l4 4 M23 47l4-4" stroke-linecap="round" stroke-width="2"/>
                            <path d="M55 45c-3 0-5 2-5 5 0 1 0 2 1 3h20c3 0 5-2 5-5s-2-5-5-5c0-5-4-9-9-9-3 0-6 2-7 5z"/>
                            <path d="M58 58v8 M63 60v6 M68 58v8 M73 60v6" stroke-linecap="round" stroke-width="2"/>
                        </svg>
                        <div class="enjeu-text">Climat</div>
                    </div>
                </div>

                <div class="arrow-container">
                    <svg class="arrow-icon" viewBox="0 0 100 100">
                        <path d="M50 20v60" stroke-linecap="round" stroke-width="3"/>
                        <path d="M35 65l15 15 15-15" stroke-linecap="round" stroke-width="3"/>
                        <path d="M50 35v-15" stroke-linecap="round" stroke-width="2"/>
                    </svg>
                </div>

                <h3 class="section-title">Nos Prestations</h3>
                
                <div class="prestations-container">
                    <div class="prestation-item">
                        <svg class="prestation-icon" viewBox="0 0 100 100">
                            <rect x="25" y="25" width="35" height="45" rx="3"/>
                            <path d="M30 35h25 M30 42h20 M30 49h25 M30 56h15" stroke-linecap="round"/>
                            <circle cx="70" cy="40" r="12"/>
                            <path d="M63 40l5 5 12-12" stroke-linecap="round" stroke-width="2"/>
                            <circle cx="45" cy="75" r="8"/>
                            <path d="M40 70l3 3 6-6" stroke-linecap="round" stroke-width="1.5"/>
                        </svg>
                        <div class="prestation-text">Évaluations</div>
                    </div>

                    <div class="prestation-item">
                        <svg class="prestation-icon" viewBox="0 0 100 100">
                            <rect x="25" y="30" width="50" height="35" rx="3"/>
                            <path d="M25 40h50" stroke-width="1"/>
                            <rect x="30" y="22" width="8" height="8" rx="1"/>
                            <rect x="42" y="22" width="8" height="8" rx="1"/>
                            <rect x="54" y="22" width="8" height="8" rx="1"/>
                            <rect x="66" y="22" width="8" height="8" rx="1"/>
                            <path d="M30 45h40 M30 50h35 M30 55h40 M30 60h25" stroke-linecap="round" stroke-width="1"/>
                            <circle cx="65" cy="50" r="2" fill="currentColor"/>
                            <circle cx="60" cy="55" r="2" fill="currentColor"/>
                        </svg>
                        <div class="prestation-text">Études et<br/>planification</div>
                    </div>

                    <div class="prestation-item">
                        <svg class="prestation-icon" viewBox="0 0 100 100">
                            <circle cx="40" cy="40" r="12"/>
                            <circle cx="40" cy="48" r="3" fill="currentColor"/>
                            <path d="M35 35h10 M33 30h14" stroke-linecap="round"/>
                            <path d="M55 30c8 0 15 7 15 15v10c0 8-7 15-15 15" stroke-linecap="round" stroke-width="2"/>
                            <circle cx="65" cy="45" r="3" fill="none" stroke-width="2"/>
                            <g transform="translate(60,35)">
                                <circle r="8"/>
                                <path d="M-3,-8 L3,-8 L3,-10 L-3,-10 Z"/>
                                <path d="M8,-3 L8,3 L10,3 L10,-3 Z"/>
                                <path d="M3,8 L-3,8 L-3,10 L3,10 Z"/>
                                <path d="M-8,3 L-8,-3 L-10,-3 L-10,3 Z"/>
                            </g>
                        </svg>
                        <div class="prestation-text">AT et AMO</div>
                    </div>

                    <div class="prestation-item">
                        <svg class="prestation-icon" viewBox="0 0 100 100">
                            <rect x="25" y="45" width="40" height="25" rx="2"/>
                            <rect x="27" y="47" width="36" height="21" rx="1"/>
                            <path d="M30 40v-8h30v8" stroke-linecap="round"/>
                            <rect x="40" y="25" width="10" height="7" rx="1"/>
                            <path d="M30 52h25 M30 56h20 M30 60h25 M30 64h15" stroke-linecap="round" stroke-width="1"/>
                            <path d="M70 30l8-3-8-3-8 3 8 3z"/>
                            <path d="M75 27v6l-5 2"/>
                            <rect x="76" y="25" width="1" height="8"/>
                            <circle cx="76.5" cy="24" r="1"/>
                        </svg>
                        <div class="prestation-text">Formation –<br/>Communication</div>
                    </div>

                    <div class="prestation-item">
                        <svg class="prestation-icon" viewBox="0 0 100 100">
                            <rect x="20" y="35" width="30" height="40" rx="2"/>
                            <path d="M25 42h20 M25 47h15 M25 52h20 M25 57h12 M25 62h18 M25 67h10" stroke-linecap="round"/>
                            <circle cx="75" cy="25" r="2" fill="currentColor"/>
                            <circle cx="75" cy="35" r="2"/>
                            <path d="M73 33l2 2 4-4" stroke-linecap="round" stroke-width="1.5"/>
                            <circle cx="75" cy="45" r="2" fill="currentColor"/>
                            <circle cx="75" cy="55" r="2"/>
                            <path d="M73 53l2 2 4-4" stroke-linecap="round" stroke-width="1.5"/>
                            <circle cx="75" cy="65" r="2" fill="currentColor"/>
                            <path d="M65 25h8 M65 35h8 M65 45h8 M65 55h8 M65 65h8" stroke-linecap="round" stroke-width="1"/>
                        </svg>
                        <div class="prestation-text">Audit et expertise</div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </> 

  );
};

export default Section2;
