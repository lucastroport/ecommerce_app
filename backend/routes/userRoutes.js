import express from 'express'
import {
    authUser,
    getUserProfile,
    regsiterUser,
    updateUserProfile
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile')
    .get(protect, getUserProfile)//because its protected we add the protect middleware
    .put(protect, updateUserProfile)

router.route('/').post(regsiterUser)

export default router
