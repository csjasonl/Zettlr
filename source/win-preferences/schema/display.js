/**
 * @ignore
 * BEGIN HEADER
 *
 * Contains:        Display Preferences Schema
 * CVM-Role:        Model
 * Maintainer:      Hendrik Erz
 * License:         GNU GPL v3
 *
 * Description:     Exports the display tab schema.
 *
 * END HEADER
 */

import { trans } from '../../common/i18n-renderer'

export default function () {
  const isWinOrMac = [ 'darwin', 'win32' ].includes(process.platform)
  return {
    fieldsets: [
      [
        {
          type: 'fieldset-label', // TODO: Create this type
          text: trans('dialog.preferences.display.preview_info')
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.render_citations'),
          model: 'display.renderCitations'
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.render_iframes'),
          model: 'display.renderIframes'
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.render_images'),
          model: 'display.renderImages'
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.render_links'),
          model: 'display.renderLinks'
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.render_math'),
          model: 'display.renderMath'
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.render_tasks'),
          model: 'display.renderTasks'
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.render_htags'),
          model: 'display.renderHTags'
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.display.use_first_headings'),
          model: 'display.useFirstHeadings'
        }
      ],
      [
        {
          type: 'select',
          model: 'display.theme',
          label: trans('dialog.preferences.theme.title'),
          options: {
            'berlin': 'Berlin',
            'frankfurt': 'Frankfurt',
            'bielefeld': 'Bielefeld',
            'karl-marx-stadt': 'Karl-Marx-Stadt',
            'bordeaux': 'Bordeaux'
          },
          placeholder_for_reference: {
            'berlin': {
              textColor: 'white',
              backgroundColor: '#1cb27e',
              name: 'Berlin',
              fontFamily: 'sans-serif'
            },
            'frankfurt': {
              textColor: 'white',
              backgroundColor: '#1d75b3',
              name: 'Frankfurt',
              fontFamily: 'serif'
            },
            'bielefeld': {
              textColor: 'black',
              backgroundColor: '#ffffdc',
              name: 'Bielefeld',
              fontFamily: 'monospace'
            },
            'karl-marx-stadt': {
              textColor: 'white',
              backgroundColor: '#dc2d2d',
              name: 'Karl-Marx-Stadt',
              fontFamily: 'sans-serif'
            },
            'bordeaux': {
              textColor: '#dc2d2d',
              backgroundColor: '#fffff8',
              name: 'Bordeaux',
              fontFamily: 'monospace'
            }
          }
        },
        {
          type: 'checkbox',
          label: trans('dialog.preferences.theme.accent_color_label'),
          model: 'display.useSystemAccentColor',
          // Disable on anything except macOS and Windows
          disabled: !isWinOrMac,
          info: (!isWinOrMac) ? trans('dialog.preferences.theme.accent_color_info') : undefined
        }
      ],
      [
        {
          type: 'fieldset-label', // TODO: Create this type
          text: trans('dialog.preferences.display.image_size_info')
        },
        {
          type: 'slider',
          label: trans('dialog.preferences.display.image_width'),
          name: 'slider-image-width',
          min: 0,
          max: 100,
          model: 'display.imageWidth'
        },
        {
          type: 'slider',
          label: trans('dialog.preferences.display.image_height'),
          name: 'slider-image-height',
          min: 0,
          max: 100,
          model: 'display.imageHeight'
        }
      ]
    ]
  }
}
