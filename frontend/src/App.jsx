import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import AdminApp from './admin/AdminApp'

const Home = lazy(() => import('./pages/Home'))
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'))
const Commodities = lazy(() => import('./pages/Commodities'))
const Energy = lazy(() => import('./pages/commodities/Energy'))
const Metals = lazy(() => import('./pages/commodities/Metals'))
const Minerals = lazy(() => import('./pages/commodities/Minerals'))
const Agriculture = lazy(() => import('./pages/commodities/Agriculture'))
const ConstructionMaterials = lazy(() => import('./pages/commodities/ConstructionMaterials'))
const SpecialistSourcing = lazy(() => import('./pages/commodities/SpecialistSourcing'))
const Markets = lazy(() => import('./pages/Markets'))
const MarketIntelligence = lazy(() => import('./pages/markets/MarketIntelligence'))
const CommodityPrices = lazy(() => import('./pages/markets/CommodityPrices'))
const Freight = lazy(() => import('./pages/markets/Freight'))
const MarketInsights = lazy(() => import('./pages/markets/MarketInsights'))
const ActiveDesk = lazy(() => import('./pages/ActiveDesk'))
const GlobalNetwork = lazy(() => import('./pages/GlobalNetwork'))
const HowWeWork = lazy(() => import('./pages/HowWeWork'))
const OurStory = lazy(() => import('./pages/about/OurStory'))
const OurApproach = lazy(() => import('./pages/about/OurApproach'))
const OurPeople = lazy(() => import('./pages/about/OurPeople'))
const EthicsCompliance = lazy(() => import('./pages/about/EthicsCompliance'))
const Insights = lazy(() => import('./pages/Insights'))
const InsightArticle = lazy(() => import('./pages/InsightArticle'))
const Contact = lazy(() => import('./pages/Contact'))
const SubmitMandate = lazy(() => import('./pages/SubmitMandate'))
const Privacy = lazy(() => import('./pages/legal/Privacy'))
const Terms = lazy(() => import('./pages/legal/Terms'))
const Disclaimer = lazy(() => import('./pages/legal/Disclaimer'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border border-argos-gray-lighter border-t-argos-black rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="commodities" element={<Commodities />} />
          <Route path="commodities/energy" element={<Energy />} />
          <Route path="commodities/metals" element={<Metals />} />
          <Route path="commodities/minerals" element={<Minerals />} />
          <Route path="commodities/agriculture" element={<Agriculture />} />
          <Route path="commodities/construction-materials" element={<ConstructionMaterials />} />
          <Route path="commodities/specialist-sourcing" element={<SpecialistSourcing />} />
          <Route path="markets" element={<Markets />} />
          <Route path="markets/intelligence" element={<MarketIntelligence />} />
          <Route path="markets/prices" element={<CommodityPrices />} />
          <Route path="markets/freight" element={<Freight />} />
          <Route path="markets/insights" element={<MarketInsights />} />
          <Route path="active-desk" element={<ActiveDesk />} />
          <Route path="global-network" element={<GlobalNetwork />} />
          <Route path="how-we-work" element={<HowWeWork />} />
          <Route path="about/story" element={<OurStory />} />
          <Route path="about/approach" element={<OurApproach />} />
          <Route path="about/people" element={<OurPeople />} />
          <Route path="about/ethics" element={<EthicsCompliance />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightArticle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="submit-mandate" element={<SubmitMandate />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="disclaimer" element={<Disclaimer />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
