//@ts-ignore
import NomieApp from './App.svelte'
import { useRegisterSW } from 'virtual:pwa-register/svelte'

const intervalMS = 60 * 60 * 1000 * 24 * 7; // 1 week

/* It's registering a service worker and then updating it every hour. */
useRegisterSW({
  onRegistered(r) {
    if (r) r.update()
    r &&
      setInterval(() => {
        r.update()
      }, intervalMS)
  },
})

/**
 * Setup Day JS
 */
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

const app = new NomieApp({
  target: document.body,
})

export default app
