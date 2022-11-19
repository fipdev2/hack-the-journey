import { extendTheme } from 'native-base'

export const THEME = extendTheme({
	colors: {
		darkpurple:'#1C1628',
        middleblue:'#1A3F87',
		white: '#ffffff',
        lightblue:'#7FB4E4'
	},
	fonts: {
        heading: 'Ubuntu_700Bold',
        body: 'Ubuntu_400Regular',
        thin: 'Ubuntu_300Light',
    
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24
	},
	sizes: {
		14: 56
	}
})