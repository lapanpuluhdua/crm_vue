const routes = [
  {
      name: 'login',
      path: '/v/login',
      component: () => import('../pages/Login.vue'),
      meta: {
        requiresVisitor: true,
        layout: 'LoginLayout'
      },
  },
  {
    name: 'forgotpassword',
    path: '/v/forgotpassword',
    component: () => import('../pages/Forgotpassword.vue'),
    meta: {
      requiresVisitor: true,
      layout: 'LoginLayout'
    }
  },
  {
    name: 'resetpassword',
    path: '/v/resetpassword',
    component: () => import('../pages/Resetpassword.vue'),
    meta: {
      requiresVisitor: true,
      layout: 'LoginLayout'
    }
  },
	{
		name: 'dashboard',
		path: '/v/',
		component: () => import('../pages/Dashboard.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
	},
  {
		name: 'app',
		path: '/v/app',
		component: () => import('../pages/App.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
	},
  {
    name: 'enquiry',
    path: '/v/enquiries',
    component: () => import('../pages/Enquiry.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'enquiryAssign',
    path: '/v/enquiriesAssign',
    component: () => import('../pages/EnquiryAssign.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'subscription',
    path: '/v/subscription',
    component: () => import('../pages/Subscription.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'profile',
    path: '/v/profile',
    component: () => import('../pages/Profile.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'allenquiry',
    path: '/v/allenquiry',
    component: () => import('../pages/Allenquiry.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'comlog',
    path: '/v/comlog',
    component: () => import('../pages/ComLog.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'enquiryprocess',
    path: '/v/enquiriesproc',
    component: () => import('../pages/EnquiryProc.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'products',
    path: '/v/products',
    component: () => import('../pages/Product.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'school',
    path: '/v/school',
    component: () => import('../pages/School.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
      name: 'user',
      path: '/v/user',
      component: () => import('../pages/User.vue'),
      meta: {
        requiresAuth: true,
        layout: 'DashboardLayout'
      }
  },
  {
    name: 'user2',
    path: '/v/user2',
    component: () => import('../pages/User2.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
},
  {
      name: 'role',
      path: '/v/role',
      component: () => import('../pages/Role.vue'),
      meta: {
        requiresAuth: true,
        layout: 'DashboardLayout'
      }
  },
  {
    name: 'permission',
    path: '/v/permission',
    component: () => import('../pages/Permission.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'permissionsroles',
    path: '/v/permissionsroles',
    component: () => import('../pages/Permissionsroles.vue'),
    meta: {
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
	{
		name: 'basic_hooks',
		path: '/v/basic_hooks',
		component: () => import('../pages/basic/Hooks.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
	},
  {
    name: 'basic_methods',
    path: '/v/basic_methods',
    component: () => import('../pages/basic/Methods.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
  {
    name: 'testvuex',
    path: '/v/testvuex',
    component: () => import('../vuex/usecom.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  }
]


export default routes;