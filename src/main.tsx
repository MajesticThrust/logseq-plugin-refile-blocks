import '@logseq/libs'
import type { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin'
import proxyLogseq from 'logseq-proxy'
import React from 'react'
import { type Root, createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

const settings: SettingSchemaDesc[] = [
  {
    key: 'refile-test',
    type: 'string',
    title: 'Refile Test',
    description: 'A test command for refiling blocks',
    default: 'ctrl+alt+r',
  },
]

if (import.meta.env.VITE_MODE === 'web') {
  // run in browser
  console.log('meta.env.VITE_LOGSEQ_API_SERVER', import.meta.env.VITE_LOGSEQ_API_SERVER)
  console.log(`%c[version]: v${__APP_VERSION__}`, 'background-color: #60A5FA; color: white; padding: 4px;')
  proxyLogseq({
    config: {
      apiServer: import.meta.env.VITE_LOGSEQ_API_SERVER,
      apiToken: import.meta.env.VITE_LOGSEQ_API_TOKEN,
    },
    settings: window.mockSettings,
  })
  renderApp()
} else {
  console.log('=== logseq-plugin-refile-blocks loaded ===')
  logseq.useSettingsSchema(settings).ready(() => {
    console.log('settings', logseq.settings)

    logseq.provideModel({
      show() {
        renderApp()
        logseq.showMainUI()
      },
    })

    // Close the modal by clicking ESC key
    document.addEventListener(
      'keydown',
      function (e) {
        if (e.key === 'Escape') {
          logseq.hideMainUI(/*{ restoreEditingCursor: true }*/)
        }
        e.stopPropagation()
      },
      false,
    )

    logseq.App.registerUIItem('toolbar', {
      key: 'logseq-plugin-refile-blocks',
      template: '<a data-on-click="show" class="button"><i class="ti ti-window"></i></a>',
    })

    if (logseq.settings?.['refile-test']) {
      logseq.App.registerCommandPalette(
        {
          key: 'refile-test',
          label: 'Refile Test',
          keybinding: { mode: 'global', binding: logseq.settings['refile-test'] as string },
        },
        () => {
          // TODO find currently selected block or blocks
          // TODO return if no blocks selected
          console.log('Refile Test')
        },
      )
    }
  })
}

function renderApp() {
  const root = createRoot(document.getElementById('root')!)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
