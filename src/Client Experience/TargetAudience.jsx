import React from "react";

const audience = [
  {
    title: "Crypto Startups",
    subtitle: "Security & Infrastructure for Emerging Blockchain Ventures",
    desc: "Early-stage and scaling crypto startups operate across hot wallets, smart contracts, and on-chain transaction layers, exposing them to protocol-level and operational vulnerabilities.\nWe implement secure wallet provisioning, smart contract interaction safeguards, multi-sig governance, and treasury security frameworks to protect digital assets and ensure operational resilience.",
  },
  {
    title: "Institutions",
    subtitle: "Enterprise Digital Asset Security & Compliance Frameworks",
    desc: "Institutions entering the digital asset space require regulated custody models, compliance alignment (AML/KYC), and operational standardization.\nWe design custodial architectures, transaction approval hierarchies, audit-ready processes, and risk management systems aligned with institutional-grade security protocols.",
  },
  {
    title: "Family Offices",
    subtitle: "Structured Crypto Allocation & Wealth Preservation",
    desc: "Family offices managing diversified portfolios require secure custody, governance controls, and long-term asset protection strategies.\nWe deploy multi-entity wallet segregation, cold storage vaulting, internal audit trails, and risk-managed liquidity frameworks to safeguard generational wealth.",
  },
  {
    title: "Investment Funds",
    subtitle: "Fund-Level Digital Asset Custody & Risk Management",
    desc: "Crypto-focused and hybrid funds require secure asset custody, transparent reporting, and controlled execution environments.\nWe implement fund-level wallet structures, transaction governance models, and liquidity execution strategies designed to reduce counterparty risk and market exposure.",
  },
  {
    title: "Private Equity Firms",
    subtitle: "Secure Digital Asset Exposure & Capital Deployment",
    desc: "Private equity firms investing in blockchain and crypto assets require secure acquisition, custody, and exit strategies.\nWe support deal-level wallet structuring, secure asset transfers, and OTC-based liquidation mechanisms, ensuring efficient and secure capital movement.",
  },
  {
    title: "High-Net-Worth Individuals (HNWI)",
    subtitle: "Institutional-Grade Protection for Private Crypto Wealth",
    desc: "HNWI clients managing significant on-chain portfolios require advanced custody solutions and attack-surface minimization.\nWe design segregated wallet infrastructures, multi-signature authorization layers, hardware wallet configurations, and geographically distributed cold storage systems, protecting against key compromise, phishing vectors, and unauthorized access.",
  },
  {
    title: "Asset Managers & ETFs",
    subtitle: "Digital Asset Custody for Managed Portfolios",
    desc: "Asset managers and ETF operators require secure custody infrastructure, transparent reporting, and regulated execution frameworks.\nWe implement portfolio-level wallet segmentation, transaction validation systems, and compliance-aligned custody solutions.",
  },
  {
    title: "Venture Capital Firms",
    subtitle: "Secure Allocation into Crypto & Web3 Assets",
    desc: "VC firms allocating capital into tokens and blockchain projects require secure onboarding, custody, and portfolio tracking mechanisms.\nWe provide secure wallet frameworks, deal-specific custody setups, and structured liquidity pathways for token investments.",
  },
  {
    title: "Investment Bankers",
    subtitle: "High-Value Crypto Transactions & Liquidity Execution",
    desc: "Investment bankers handling large-scale crypto transactions require deep liquidity access, discreet execution, and minimized market impact.\nWe facilitate OTC desk routing, block trade execution, and slippage-optimized liquidation strategies, ensuring secure and efficient transactions.",
  },
];

const TargetAudience = () => {
  return (
    <div className="bg-[#F8FAFF] py-12 md:py-12">
      <div className="max-w-6xl mx-auto px-7 md:px-10">

        {/* Header */}
        <div className="text-center mx-auto">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-semibold">
              Liquidity Infrastructure
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] mx-auto max-w-lg mt-4 leading-snug">
            Who Needs Secure Ledger Solutions
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>

          <p className="mt-3 text-[#2F6FD6] text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Advanced Digital Asset Security & Liquidity Infrastructure for Institutional and High-Value Market Participants
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-14 mt-8">
          {audience.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff] p-6 rounded-xl hover:shadow-lg transition border border-transparent hover:border-[#2F6FD6]"
            >
              <h3 className="text-[#1A2B6B] font-semibold md:text-base text-sm">
                {item.title}
              </h3>

              <p className="md:text-sm text-xs text-[#2F6FD6] mt-1">
                {item.subtitle}
              </p>

              <p className="md:text-sm text-xs text-[#6D7380] mt-3 whitespace-pre-line leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TargetAudience;