import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { postReq } from './postReq'

const localeMap = new Map([
    [
        'tr',
        {
            router: {
                home: 'Ana Sayfa',
                error: 'Hata!'
            },
            shared: {
                error: {
                    text: 'Ups! Bence yanlış yerdesin. Ana sayfaya dönmek için aşağıdaki butona tıklayın.',
                    button: 'Ana Sayfa'
                }
            }
        }
    ],
    [
        'en',
        {
            router: {
                home: 'Home',
                error: 'Error!'
            },
            shared: {
                error: {
                    text: "Ups! I think you're in the wrong place. Click the button below to return to the home page.",
                    button: 'Home Page'
                }
            }
        }
    ]
])

export default () => {
    const route = useRoute()
    const locale = ({ lng }: { lng: string }) => {
        return localeMap.get(lng)
    }

    return {
        route,
        locale,
        ref,
        postReq,
        computed
    }
}
