import {
  IconDashboard,
  IconBell,
  IconClock,
  IconUsers,
  IconWallet,
  IconSettings
} from '@tabler/icons-react'

const menus = [
  { id: 'dashboard', name: 'Dashboard', path: '/', icon: IconDashboard },
  { id: 'notification', name: 'Notification', path: '/notification', icon: IconBell },
  { id: 'schedule', name: 'Schedule', path: '/schedule', icon: IconClock },
  { id: 'users', name: 'Users', path: '/users', icon: IconUsers },
  { id: 'wallet', name: 'Wallet', path: '/wallet', icon: IconWallet },
  { id: 'setting', name: 'Setting', path: '/setting', icon: IconSettings }
]

export { menus }
