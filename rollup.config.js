import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import banner from './banner'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/main.js',
        format: 'iife',
        sourcemap: false,
        banner
    },
    plugins: [
        // 清除上次编译成果
        clear({ targets: ['dist'] }),
        // 编译 ts
        typescript({ tsconfig: './tsconfig.json' })
    ]
}
