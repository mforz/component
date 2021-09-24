


const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')




module.exports = {
     



    entry: {
        main: path.resolve(__dirname, '../src/packages/home/index.tsx')
    },
     

    resolve:{
        alias:{
            '@src':path.resolve(__dirname, '../src'),
            '@packages':path.resolve(__dirname, '../src/packages'),
            '@containers': path.resolve(__dirname, '../src/containers'),
        },
        mainFiles: ['index','main'],
        extensions:['.ts','.tsx','.scss','json','js']
    },



    module:{ 

        rules:[
            {
                test:/\.(t|j)sx?$/,
                use:'babel-loader',
            },

            {
                test:/\.(sa|sc)ss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader:'resolve-url-loader',
                        options:{
                            keepQuery: true,
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:true,
                        }
                    }
                ]
            },

            {
                test:/\.(png|jpe?g|svg|gif)/,
                type: 'assets/inline',
            },

            {
                test:/\.(eot|ttf|woff|woff2)$/,
                type:'assets/resource',
                generator:{
                    filename:'fonts/[hash][ext][query]'
                }
            }, 
        ]
    }

}