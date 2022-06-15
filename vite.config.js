import vue from "@vitejs/plugin-vue";
import Unocss from 'unocss/vite'
import { presetAttributify } from 'unocss'
import Components from 'unplugin-vue-components/vite'

import {
  VantResolver,
} from 'unplugin-vue-components/resolvers'
export default {
  plugins: [
    vue(),
    
    Components({
      dts: 'src/typings/components.d.ts',
      extensions: ['vue', 'tsx'],
      /** 搜索子目录  */
      deep: true,
      /** 允许子目录作为组件的命名空间前缀 */
      directoryAsNamespace: false,
    resolvers:[ VantResolver() ]}),
    Unocss({
      presets: [
        presetAttributify({ }),
      ],
    })
  ],
  
};
