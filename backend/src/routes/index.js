import { Router } from 'express'
import authRoutes from './authRoutes.js'
import activeDeskRoutes from './activeDeskRoutes.js'
import mandateRoutes from './mandateRoutes.js'
import commodityRoutes from './commodityRoutes.js'
import insightRoutes from './insightRoutes.js'
import marketDataRoutes from './marketDataRoutes.js'
import freightRoutes from './freightRoutes.js'
import contactRoutes from './contactRoutes.js'
import userRoutes from './userRoutes.js'
import auditRoutes from './auditRoutes.js'
import settingsRoutes from './settingsRoutes.js'
import dashboardRoutes from './dashboardRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/active-desk', activeDeskRoutes)
router.use('/mandates', mandateRoutes)
router.use('/commodities', commodityRoutes)
router.use('/insights', insightRoutes)
router.use('/market-data', marketDataRoutes)
router.use('/freight', freightRoutes)
router.use('/contacts', contactRoutes)
router.use('/users', userRoutes)
router.use('/audit', auditRoutes)
router.use('/settings', settingsRoutes)
router.use('/admin', dashboardRoutes)

export default router
