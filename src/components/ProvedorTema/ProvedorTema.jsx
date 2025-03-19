import {ThemeProvider} from '@emotion/react'

const tema = {
    cores: {
        branco: '#ffff',
        atencao: '',
        foco: '',
        primarias: {
            a: '#5754ED',
            b:'',
            c:''
        },
        secundarias: {
            a: '#EBEAF9',
            b:'',
            c:''
        },
        neutras:{
            a: '#373737',
            b:'',
            c:'#f5f5f5',
            d:''
        },
        dark:{
            a:'',
            b:''
        }

    },
    espacamentos:{
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px'
    },
    fontFamily: " 'Montserrat', sans-serif "

}

const ProvedorTema =({children})=>{
    return(
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}

export default ProvedorTema